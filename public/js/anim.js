/* Animations (figure videos with class "anim"): load and play only while on screen, pause when scrolled
   away. Visitors who ask for reduced motion see the poster and get controls to play it themselves. */
(function () {
  var videos = document.querySelectorAll('video.anim');
  if (!videos.length) return;
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce || !('IntersectionObserver' in window)) {
    videos.forEach(function (v) {
      if (reduce) { if (!v.closest('a')) v.controls = true; } else { v.autoplay = true; v.load(); }
    });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      var v = e.target;
      if (e.isIntersecting) { var p = v.play(); if (p && p.catch) p.catch(function () {}); }
      else { v.pause(); }
    });
  }, { threshold: 0.25 });
  videos.forEach(function (v) { io.observe(v); });
})();
