# Sean's portfolio site.


This is an entirely static website thanks to [Jekyll](http://jekyllrb.com/) and [GitHub Pages](https://pages.github.com/); site is built with superpowers from [Gulp](http://gulpjs.com/), [Browsersync](https://browsersync.io/), [Sass](http://sass-lang.com/), and [other great open-sourced projects](#manual-version-control).  

Redesigned and built from scratch with these new features:

- designed with web accessibility in mind
- used [vertical rhythm](http://zellwk.com/blog/why-vertical-rhythms/) for a better typography experience
- modularized css with sass
- modularized themes
- minimized traffic and page reload time via AJAX with smoothState.js
- animated page transition with animations
- embedded a custom version JavaScript [photo viewer](http://photoswipe.com/) by Dmitry Semenov
- added  bilingual support for English and Chinese (currently disabled, many thanks to [a blog post](https://www.sylvaindurand.org/making-jekyll-multilingual/) by Sylvain Durand)


## Local Development

_(of course, you'll need [ruby gem](https://rubygems.org/) and [node](https://nodejs.org/en/))_  

1. `gem install jekyll`
2. `npm install --save-dev`
3. `gulp`


## Manual Version Control

Manual version-control for dependencies to make it easier for [GitHub Pages](https://pages.github.com/versions/).

| Package | Version |
| --- | --- |
| normalize.css | [v5.0.0](https://github.com/necolas/normalize.css/releases/tag/5.0.0) |
| PhotoSwipe | [v4.1.2](https://github.com/dimsemenov/PhotoSwipe/releases/tag/v4.1.2) |
| Susy | [2.2.12](https://github.com/oddbird/susy/releases/tag/2.2.12) |
| Breakpoint | [v2.7.0](https://github.com/at-import/breakpoint/releases/tag/v2.7.0) |
| Typi | [v2.3.0](https://github.com/zellwk/typi/releases/tag/v2.3.0) |
| jQuery | [v3.2.0](https://code.jquery.com/jquery-3.2.0.min.js) |
| smoothState.js | [a22f5b6](https://github.com/miguel-perez/smoothState.js/commit/a22f5b6b372dc532a159e967e408e4d766fa70a4) |
| VelocityJS | [1.5.0](https://github.com/julianshapiro/velocity/releases/tag/1.5.0) |
| pace | [v1.0.2](https://raw.github.com/HubSpot/pace/v1.0.2/pace.min.js) |
| freezeframe.js | [v3.0.8](https://github.com/ctrl-freaks/freezeframe.js/tree/056ac1526b043aab9ea21579a3210c44cc375666) |


## Licenses

- Site code, excluding all projects, photos, and documents, is licensed under [the MIT License](LICENSE.md).
