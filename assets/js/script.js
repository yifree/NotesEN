// Dark Mode
const darkToggle = document.getElementById('darkToggle');
if (darkToggle) {
  // Initialize dark mode state
  if (localStorage.getItem('dark') === '1') {
    document.body.classList.add('dark');
  }
  
  // Toggle dark mode
  darkToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    localStorage.setItem('dark', document.body.classList.contains('dark') ? '1' : '0');
  });
}

// Back to Top
const backBtn = document.getElementById('backToTop');
if (backBtn) {
  // Scroll event listener
  window.addEventListener('scroll', () => {
    backBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
  });
  
  // Click to scroll to top
  backBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// Search Function
const input = document.getElementById('search-input');
const results = document.getElementById('search-results');
const postsList = document.getElementById('posts-list');

if (input && results && postsList) {
  // Input event listener
  input.addEventListener('input', async () => {
    const query = input.value.trim().toLowerCase();
    
    // Clear results and show original list
    if (!query) {
      results.innerHTML = '';
      postsList.style.display = 'block';
      return;
    }
    
    try {
      // Get search data
      const response = await fetch('/search.json');
      const allPosts = await response.json();
      
      // Filter matching posts
      const matchedPosts = allPosts.filter(post =>
        post.title.toLowerCase().includes(query) || 
        post.content.toLowerCase().includes(query)
      );
      
      // Generate search results HTML
      let html = `<div style="margin-bottom: 16px; color: var(--muted); font-size: 14px;">Found ${matchedPosts.length} results</div>`;
      matchedPosts.forEach(post => {
        html += `<div class="search-result-item"><a href="${post.url}">${post.title}</a> <small>${post.date}</small></div>`;
      });
      
      // Display search results
      results.innerHTML = html;
      postsList.style.display = 'none';
    } catch (error) {
      console.error('Search failed:', error);
      results.innerHTML = '<div>Search failed, please try again later</div>';
    }
  });
}

// Table of Contents Scroll Tracking
const tocItems = document.querySelectorAll('.toc a');
if (tocItems.length > 0) {
  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY + 100;
    
    document.querySelectorAll('h1, h2, h3').forEach(heading => {
      const headingTop = heading.offsetTop;
      const headingBottom = headingTop + heading.offsetHeight;
      
      if (scrollPosition >= headingTop && scrollPosition < headingBottom) {
        const id = heading.id || heading.getAttribute('id');
        if (id) {
          tocItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${id}`) {
              item.classList.add('active');
            }
          });
        }
      }
    });
  });
}
