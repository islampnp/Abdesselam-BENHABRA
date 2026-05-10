/**
 * experience.js — Auto-calculated experience durations & total
 * =============================================================
 *
 * DEPENDENCIES (must exist in index.html):
 *   1. Each timeline entry: <div class="timeline-item" data-start="YYYY-MM" data-end="YYYY-MM|present">
 *   2. Each entry's date area: <span class="timeline-duration"></span> (empty, injected by this script)
 *   3. Hero stats: <span class="stat-number" data-count="50">0</span> etc. in .hero-stats container
 *
 * WHAT IT DOES:
 *   - Parses data-start / data-end on every .timeline-item
 *   - Injects formatted duration ("1 yr 6 mo", "7 mo", etc.) into .timeline-duration spans
 *   - Animates ALL .stat-number[data-count] elements in .hero-stats
 *     with staggered delays (first stat no delay, others after 300ms)
 *     Easing: ease-out cubic over 1.2 s. Uses IntersectionObserver on .hero-stats
 *     so animation triggers when the hero enters the viewport.
 */

(function () {
  'use strict';

  /* ------------------------------------------------------------------ */
  /*  Helpers                                                            */
  /* ------------------------------------------------------------------ */

  /**
   * Parse a "YYYY-MM" string into a Date (first of month, UTC-safe).
   * @param {string} str
   * @returns {Date}
   */
  function parseMonth(str) {
    var parts = str.split('-');
    return new Date(parseInt(parts[0], 10), parseInt(parts[1], 10) - 1, 1);
  }

  /**
   * Compute whole calendar months between two dates.
   * startD and endD are both first-of-month.
   */
  function monthDiff(startD, endD) {
    return (endD.getFullYear() - startD.getFullYear()) * 12 +
           (endD.getMonth() - startD.getMonth());
  }

  /**
   * Format a month count into a human string.
   *   0  → "0 mo"       (shouldn't happen with valid dates)
   *   7  → "7 mo"
   *   18 → "1 yr 6 mo"
   *   12 → "1 yr"
   */
  function fmtDuration(months) {
    var y = Math.floor(months / 12);
    var m = months % 12;
    if (y > 0 && m > 0) return y + ' yr ' + m + ' mo';
    if (y > 0)          return y + ' yr';
    return m + ' mo';
  }

  /**
   * Ease-out cubic: 1 - (1 - t)^3
   */
  function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
  }

  /* ------------------------------------------------------------------ */
  /*  Core logic                                                         */
  /* ------------------------------------------------------------------ */

  function calcExperience() {
    var totalMonths = 0;
    var now = new Date();
    var items = document.querySelectorAll('.timeline-item[data-start]');
    var entries = [];

    /* ---- per-job calculations ---- */
    items.forEach(function (item) {
      var startStr = item.getAttribute('data-start');
      var endStr   = item.getAttribute('data-end');
      if (!startStr) return;

      var startD = parseMonth(startStr);
      var endD   = endStr === 'present' ? new Date(now.getFullYear(), now.getMonth(), 1)
                                        : parseMonth(endStr);

      var months = monthDiff(startD, endD);
      if (months < 0) months = 0;       // safeguard

      totalMonths += months;

      /* inject per-job badge */
      var durEl = item.querySelector('.timeline-duration');
      if (durEl) durEl.textContent = fmtDuration(months);

      entries.push({ start: startStr, end: endStr, months: months });
    });

    /* ---- update hero stat ---- */
    var totalYears = Math.floor(totalMonths / 12);
    var totalMos   = totalMonths % 12;
    // stat-year data-count is set in HTML — preserved as-is (no override)

    /* ---- inject approx-total stat into hero-stats (if not already injected) ---- */
    var heroStats = document.querySelector('.hero-stats');
    if (heroStats && !document.querySelector('.stat-total-precise')) {
      var wrap = document.createElement('div');
      var aroundYears = Math.max(1, Math.round(totalMonths / 12));
      wrap.className = 'stat-item stat-total-precise';
      wrap.innerHTML =
        '<span class="stat-number" style="font-size:1.25rem;color:#8B949E;font-weight:500;letter-spacing:0">Around ' + aroundYears + ' yr</span>' +
        '<span class="stat-label">Total Professional Experience</span>';
      heroStats.appendChild(wrap);
    }

    return { totalMonths: totalMonths, totalYears: totalYears };
  }

  /* ------------------------------------------------------------------ */
  /*  Counter animation (0 → target, 1.2 s, ease-out cubic)             */
  /* ------------------------------------------------------------------ */

  function animateStat(el, target, delay) {
    if (!el) return;
    if (target === 0) { el.textContent = '0'; return; }

    var duration = 1200;    // ms
    var startTime = null;
    var started = false;

    function frame(ts) {
      if (!started) { started = true; startTime = ts; }
      var elapsed = ts - startTime;
      var p = Math.min(elapsed / duration, 1);
      var current = Math.round(easeOutCubic(p) * target);
      el.textContent = current;
      if (p < 1) requestAnimationFrame(frame);
    }

    if (delay && delay > 0) {
      setTimeout(function () { requestAnimationFrame(frame); }, delay);
    } else {
      requestAnimationFrame(frame);
    }
  }

  function runAllAnimations() {
    var targets = document.querySelectorAll('.stat-number[data-count]');
    if (!targets.length) return;

    var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    targets.forEach(function (el) {
      var target = parseInt(el.getAttribute('data-count'), 10);
      if (reduceMotion) {
        el.textContent = target.toLocaleString();
        return;
      }
      /* year stat gets no delay; others stagger by 300 ms */
      var delay = el.classList.contains('stat-year') ? 0 : 300;
      el.textContent = '0';
      animateStat(el, target, delay);
    });

    /* post-animation formatting */
    if (!reduceMotion) {
      setTimeout(function () {
        targets.forEach(function (el) {
          if (el.getAttribute('data-count') === '10000') {
            el.textContent = '10k+';
          }
          if (el.getAttribute('data-count') === '50') {
            el.textContent = '50+';
          }
        });
      }, 1800);
    }
  }

  /* ------------------------------------------------------------------ */
  /*  Bootstrap                                                          */
  /* ------------------------------------------------------------------ */

  function init() {
    calcExperience();

    /* Use IntersectionObserver on hero-stats to trigger animations only when visible */
    var heroStats = document.querySelector('.hero-stats');
    if (heroStats) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            observer.unobserve(e.target);
            runAllAnimations();
          }
        });
      }, { threshold: 0.3 });
      observer.observe(heroStats);
    } else {
      /* fallback: animate immediately */
      runAllAnimations();
    }
  }

  /* Run after DOM is fully parsed */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
