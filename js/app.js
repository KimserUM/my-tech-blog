/*
 * Dark mode, search, reading time, scroll-to-top.
 * No frameworks, no build step.
 */

(function() {
  // --- Dark mode toggle ---
  var toggle = document.getElementById('theme-toggle');
  if (toggle) {
    toggle.addEventListener('click', function() {
      document.body.classList.toggle('dark');
      var isDark = document.body.classList.contains('dark');
      toggle.textContent = isDark ? 'Light' : 'Dark';
    });
  }

  // --- Project search ---
  var search = document.getElementById('project-search');
  if (search) {
    search.addEventListener('input', function() {
      var query = search.value.toLowerCase().trim();
      var cards = document.querySelectorAll('.card');
      cards.forEach(function(card) {
        var text = card.textContent.toLowerCase();
        card.style.display = text.indexOf(query) !== -1 ? '' : 'none';
      });
    });
  }

  // --- Reading time estimate ---
  var post = document.querySelector('.post');
  if (post) {
    var text = post.textContent;
    var words = text.split(/\s+/).length;
    var minutes = Math.max(1, Math.round(words / 200));
    var span = document.createElement('span');
    span.className = 'reading-time';
    span.textContent = ' · ' + minutes + ' min read';
    var date = post.querySelector('.date');
    if (date) date.appendChild(span);
  }

  // --- Scroll to top button ---
  var topBtn = document.createElement('button');
  topBtn.id = 'scroll-top';
  topBtn.textContent = 'Top';
  topBtn.style.cssText = 'display:none;position:fixed;bottom:24px;right:24px;' +
    'background:var(--code-bg);color:var(--muted);border:1px solid var(--border);' +
    'padding:6px 14px;border-radius:4px;font-size:13px;cursor:pointer;z-index:99;';
  document.body.appendChild(topBtn);

  window.addEventListener('scroll', function() {
    topBtn.style.display = window.scrollY > 400 ? '' : 'none';
  });

  topBtn.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();
