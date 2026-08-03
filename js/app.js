/*
 * Minimal dark mode toggle and project search.
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
})();
