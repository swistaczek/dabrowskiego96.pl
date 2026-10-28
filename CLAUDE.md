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
# gh-pages is the only long-lived branch and the deployment branch
git checkout gh-pages

# Changes go through a short-lived branch and a pull request into gh-pages
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

### Short links (for SMS)
Long URLs, especially ones with Polish characters percent-encoded (`og%C5%82oszenia`), are not used in SMS: on 2026-10-28 the carrier rejected every SMS carrying such a link. For SMS create a short link on this site instead, e.g. `dabrowskiego96.pl/5zl`:
- one root file per link, `<name>.html`, front matter `permalink: /<name>/`, `layout: null`, `sitemap: false`;
- body: `<meta http-equiv="refresh">` plus `location.replace()` to the target, `rel="canonical"` to the target, `noindex`, and a plain `<a>` fallback (see `5zl.html`);
- name: short, lowercase ASCII, no Polish characters; the plugin `jekyll-redirect-from` is not enabled, so do not use `redirect_from`.

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
- **gh-pages**: The only branch. Default branch and GitHub Pages source (Jekyll/Minimal Mistakes).
- The old `master` (untouched Start Bootstrap template from 2019) was removed in October 2026. Its last commit is kept under the tag `szablon-bootstrap-2019`.

## Versions
- GitHub Pages builds the site in classic mode, so Jekyll and plugin versions are set by GitHub (`github-pages` gem, Jekyll 3.10). They cannot be raised from this repo; Jekyll 4 would need a GitHub Actions build.
- The theme is pinned in `_config.yml`: `remote_theme: mmistakes/minimal-mistakes@<tag>`. To update the theme, change the tag to a newer release and check the site after the build.