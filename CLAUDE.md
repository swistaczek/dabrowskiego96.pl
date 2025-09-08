# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Jekyll-based website for a residential community (Wspólnota Mieszkaniowa) at Dąbrowskiego 96 in Poznań, Poland. The site uses GitHub Pages with the Minimal Mistakes theme and is deployed from the `gh-pages` branch.

## Key Commands

### Development
```bash
# Install dependencies (required before first run)
bundle install

# Run development server
bundle exec jekyll serve
# Site will be available at http://127.0.0.1:4000

# Build site without serving
bundle exec jekyll build
```

### Git Workflow
```bash
# Always work on gh-pages branch (deployment branch)
git checkout gh-pages

# The master branch contains a different version (Bootstrap landing page)
# DO NOT merge between branches
```

## Architecture & Structure

### Jekyll Configuration
- **Theme**: Minimal Mistakes (remote theme via GitHub Pages)
- **Language**: Polish (pl-PL)
- **Main config**: `_config.yml`
- **Dependencies**: Managed via `Gemfile` (github-pages gem)

### Content Structure
- `_pages/`: Static pages (about, przetargi, jezyce)
  - Pages use front matter with `permalink`, `title`, `description`
  - SEO metadata should be included
- `_posts/`: Blog posts in format `YYYY-MM-DD-title.md`
- `_data/navigation.yml`: Main navigation menu configuration
- `assets/`: Static assets (images, CSS, JS)

### Key Pages
1. **Homepage** (`index.html`): Landing with recent posts
2. **About** (`_pages/about.md`): Community information
3. **Jeżyce** (`_pages/jezyce.md`): SEO-focused district information
4. **Tenders** (`_pages/przetargi.md`): Procurement/tender announcements

## Important Conventions

### SEO Considerations
- External links should use `{:rel="nofollow"}` to preserve SEO juice
- Include meta descriptions and keywords in page front matter
- Focus on local Polish keywords (Jeżyce, Poznań, Dąbrowskiego)

### Content Language
- All content must be in Polish
- Use proper Polish characters (ą, ę, ć, ł, ń, ó, ś, ź, ż)
- Maintain formal but friendly tone appropriate for a residential community

### Jekyll Front Matter
Typical page structure:
```yaml
---
permalink: /path/
title: "Page Title"
description: "SEO description"
keywords: "comma, separated, keywords"
toc: false  # Set to true for table of contents
---
```

### Navigation Updates
When adding new pages, update `_data/navigation.yml`:
```yaml
main:
  - title: "Menu Item"
    url: /path/
```

## Deployment

The site automatically deploys to GitHub Pages when pushing to the `gh-pages` branch. Changes typically appear within 2-5 minutes at the live URL.

## Common Tasks

### Adding a New Page
1. Create file in `_pages/` with `.md` extension
2. Add proper front matter with permalink
3. Update navigation in `_data/navigation.yml`
4. Test locally with `bundle exec jekyll serve`

### Creating a Blog Post
1. Create file in `_posts/` with format `YYYY-MM-DD-title.md`
2. Include categories and tags in front matter
3. Posts automatically appear in the news feed

### Modifying Navigation
Edit `_data/navigation.yml` and add/modify entries under the `main:` key.

## Branch Information
- **gh-pages**: Active deployment branch (Jekyll/Minimal Mistakes)
- **master**: Legacy Bootstrap landing page (DO NOT USE)