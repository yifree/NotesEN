# GitHub Blog Website Template

This is a personal blog website template built with GitHub Pages + Jekyll. It features a clean, practical, and beautiful design, perfect for tech enthusiasts to record study notes and share technical insights.

## Features

- ✅ **Clean & Beautiful**: Modern card-based design with dark mode support
- ✅ **Full-Featured**: Post list, pagination, search, tags, related posts
- ✅ **Easy Deployment**: One-click deployment on GitHub Pages
- ✅ **Easy to Use**: Markdown writing support with automatic table of contents
- ✅ **Easy Maintenance**: Clear code structure with comprehensive comments
- ✅ **Fully Automated**: Just add posts, the system updates all pages automatically
- ✅ **Responsive Design**: Works on desktop and mobile devices
- ✅ **Floating Navigation**: Fixed navigation buttons on the right for quick access
- ✅ **Optimized RSS**: Beautiful RSS feed page
- ✅ **Compact Post Cards**: Optimized layout for more content display

## Quick Start

### 1. Deploy to GitHub Pages

1. **Fork this repository**: Click the "Fork" button in the top right corner to copy this repository to your GitHub account
2. **Rename the repository**: In your repository settings, rename it to `your-username.github.io` (replace `your-username` with your GitHub username)
3. **Enable GitHub Pages**: In the "Pages" tab of repository settings, select "main" branch as the source and click "Save"
4. **Wait for deployment**: GitHub Pages will automatically build and deploy your website, usually takes 1-2 minutes
5. **Access your website**: Open browser and visit `https://your-username.github.io` (replace `your-username` with your GitHub username)

### 2. Personal Configuration (Required)

**⚠️ Important**: After deployment, you must modify the personalized information in the following files, especially replacing `yifree` with your own GitHub username.

#### 2.1 Modify `_config.yml`

Edit `_config.yml` and modify the following configurations:

```yaml
# Site basic information (required)
title: Your Blog Title
description: Your blog description
url: "https://your-username.github.io/"  # ⚠️ Replace your-username with your GitHub username

# Gitalk comment system configuration (optional but recommended)
gitalk:
  clientID: YOUR_CLIENT_ID  # Get from GitHub Developer Settings
  clientSecret: YOUR_CLIENT_SECRET  # Get from GitHub Developer Settings
  repo: your-username.github.io  # ⚠️ Replace your-username
  owner: your-username  # ⚠️ Replace your-username
  admin: [your-username]  # ⚠️ Replace your-username
  distractionFreeMode: true
```

#### 2.2 Modify `文章目录.md` (Post Directory)

Edit `文章目录.md` and replace all `yifree.github.io` with your website address:

```markdown
# Post Directory

> **Tip**: Visit [https://your-username.github.io](https://your-username.github.io) for better reading experience...

## 🔗 Quick Links

- [🏠 Home](https://your-username.github.io/)
- [📂 Archive](https://your-username.github.io/archive.html)
- [🏷️ Tags](https://your-username.github.io/tags.html)
- [🔍 Search](https://your-username.github.io/)
- [📡 RSS Feed](https://your-username.github.io/feed.xml)
```

#### 2.3 Modify Home Page Information (Optional)

Edit `index.md` and modify the home page display information:

```markdown
<div class="home-header">
  <img src="/assets/images/avatar.jpg" alt="Avatar" class="avatar">
  <h1>Your Blog Name</h1>  <!-- Modify here -->
  <p>Your blog subtitle</p>  <!-- Modify here -->
</div>
```

#### 2.4 Replace Avatar Image (Optional)

Rename your avatar image to `avatar.jpg` and replace the `assets/images/avatar.jpg` file.

### 3. Publish Posts

Create Markdown files in the `_posts` directory with the filename format `YYYY-MM-DD-title.md`, e.g., `2026-04-08-my-first-post.md`.

**⚠️ Important**:
- The date in the filename must match the `date` field in the file content
- Files must use `.md` extension
- Files must be placed in the `_posts` directory

Post format example:

```markdown
---
layout: post
title: My First Post
date: 2026-04-08 10:00:00
tags:
  - Tutorial
  - Getting Started
---

# Welcome to My Blog

This is my first blog post.

## Section 1

Content goes here...

## Section 2

More content...
```

### 4. Run Locally

To preview your blog locally, you need to install Ruby and Jekyll first.

```bash
# Install dependencies
bundle install

# Run local server
bundle exec jekyll serve

# Access local preview
# Open browser and visit http://localhost:4000
```

## Project Structure

```
.
├── _config.yml          # Site configuration
├── _posts/              # Blog posts
├── _layouts/            # Page layouts
│   ├── default.html     # Default layout
│   ├── post.html        # Post layout
│   └── page.html        # Page layout
├── _includes/           # Include components
├── assets/              # Static assets
│   ├── css/             # CSS files
│   ├── js/              # JavaScript files
│   └── images/          # Image files
├── index.md             # Home page
├── archive.html         # Archive page
├── tags.html            # Tags page
├── feed.xml             # RSS feed
└── README.md            # This file
```

## Customization

### Change Theme Colors

Edit `assets/css/style.css` and modify the CSS variables:

```css
:root {
  --bg: #fff;           /* Background color */
  --text: #333;         /* Text color */
  --link: #3498db;      /* Link color */
  --link-hover: #2980b9;/* Link hover color */
  --muted: #666;        /* Muted text color */
  --border: #eaeaea;    /* Border color */
  --code: #f8f9fa;      /* Code block background */
}
```

### Add Custom Pages

Create a new HTML or Markdown file in the root directory with the following front matter:

```markdown
---
layout: page
title: About Me
permalink: /about/
---

# About Me

This is the about page...
```

## License

MIT License

## Contributing

Contributions are welcome! Feel free to submit issues and pull requests.
