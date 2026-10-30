# Sirry Chen · Academic homepage

A restrained academic website built with Jekyll and hosted on GitHub Pages. The layout follows the profile-and-content structure of [AcadHomepage](https://github.com/RayeRen/acad-homepage.github.io), with custom templates and styles. The original site was based on [Hanlin Cai's homepage](https://github.com/GuangLun2000/GuangLun2000.github.io) and Minimal Mistakes; the original license is retained.

## Editing content

- `_config.yml`: name, affiliation, email, social links, and navigation.
- `index.md`: biography, academic background, and news.
- `_data/publications.yml`: papers in reverse chronological order. Fill in real metadata and resource URLs only.
- `_data/news.yml`: dated updates.
- `blogs.md` and `share.md`: note indexes. Articles live in `blogs/` and `share/`.
- `works.md`: publications only.
- `assets/css/academic.css`: colors, spacing, typography, and responsive layout.

Existing article URLs, downloads, and audio demonstrations are preserved. Add YAML front matter with `layout: post`, `title`, `date`, and an explicit `permalink` to new articles. Article pages show a contents sidebar instead of the personal profile. Add `notes: true` to note indexes for the same sidebar, and `mathjax: true` for mathematical notation.

## Local preview

With Ruby and Bundler installed:

```sh
bundle install
bundle exec jekyll serve
```

Open `http://127.0.0.1:4000`. GitHub Pages builds the source on the `main` branch. Generated `_site/` files and local caches should not be committed.

Google Scholar and RedNote (Xiaohongshu) SVG icons are from [Simple Icons](https://github.com/simple-icons/simple-icons), distributed under CC0 1.0. The license is included in `images/logo/SIMPLE-ICONS-LICENSE.txt`.

## Reading navigation

The profile and contents sidebars stay fixed on desktop. On small screens they become fixed, expandable panels under the header. After a downward scroll reaches the bottom, the site advances to the next main navigation section (About Me → Works → Awards → Blogs → Share → About Me). Article pages advance to the section to the right of Blogs or Share. Loading a page, browser history restoration, contents links, and scrolling inside a sidebar do not trigger automatic navigation. Scroll upward or press Escape during the short delay to cancel; playing audio or video also pauses automatic navigation. Reduced-motion preferences disable sliding animations.
