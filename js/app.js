/*
 * my-tech-blog v3 — qridian-inspired desk interactions
 */

(function() {
  // Scroll to top button
  var topBtn = document.getElementById('scroll-top');
  if (topBtn) {
    window.addEventListener('scroll', function() {
      topBtn.style.display = window.scrollY > 500 ? '' : 'none';
    });
  }

  // Reading time for post pages
  var post = document.querySelector('.page-paper');
  if (post) {
    var text = post.textContent;
    var words = text.split(/\s+/).length;
    var minutes = Math.max(1, Math.round(words / 200));
    var meta = post.querySelector('.page-meta');
    if (meta) {
      var span = document.createElement('span');
      span.className = 'reading-time';
      span.textContent = '  -  ' + minutes + ' min read';
      meta.appendChild(span);
    }
  }

  // Mobile: tap cosmic/astro link for easter egg
  var cosmic = document.querySelector('.astro-cosmic-link');
  if (cosmic) {
    cosmic.addEventListener('click', function(e) {
      if (window.innerWidth <= 1045) {
        e.preventDefault();
        cosmic.classList.toggle('is-tapped');
      }
    });
  }

  // Project search on projects page
  var search = document.getElementById('project-search');
  if (search) {
    search.addEventListener('input', function() {
      var query = search.value.toLowerCase().trim();
      var items = document.querySelectorAll('.project-item, .post-item');
      items.forEach(function(item) {
        item.style.display = item.textContent.toLowerCase().indexOf(query) !== -1 ? '' : 'none';
      });
    });
  }
})();
