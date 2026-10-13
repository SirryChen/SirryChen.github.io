# Sirry Chen · Academic homepage

A restrained academic website built with Jekyll and hosted on GitHub Pages. The layout follows the profile-and-content structure of [AcadHomepage](https://github.com/RayeRen/acad-homepage.github.io), with custom templates and styles. The original site was based on [Hanlin Cai's homepage](https://github.com/GuangLun2000/GuangLun2000.github.io) and Minimal Mistakes; the original license is retained.

## Editing content

- `_config.yml`: name, affiliation, email, social links, and navigation.
- `index.md`: biography, academic background, and news.
- `_data/publications.yml`: papers in reverse chronological order. Fill in real metadata and resource URLs only.
- `_data/news.yml`: dated updates.
- `blogs.md` and `share.md`: note indexes. Articles live in `blogs/` and `share/`.
- `works.md`: publications, research, and project descriptions.
- `assets/css/academic.css`: colors, spacing, typography, and responsive layout.

Existing article URLs, downloads, and audio demonstrations are preserved. Add YAML front matter with `layout: post`, `title`, `date`, and an explicit `permalink` to new articles. Article pages show a contents sidebar instead of the personal profile. Add `notes: true` to note indexes for the same sidebar, and `mathjax: true` for mathematical notation.

## Local preview

With Ruby and Bundler installed:

```sh
bundle install
bundle exec jekyll serve
```

Open `http://127.0.0.1:4000`. GitHub Pages builds the source on the `main` branch. Generated `_site/` files and local caches should not be committed.
