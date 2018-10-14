# ![Obsidian.css](http://cl.ly/2T0B352h1d1n/obsidian-header.png)

[![npm version](https://badge.fury.io/js/obsidian.css.svg)](https://badge.fury.io/js/obsidian.css)
[![Build Status](https://travis-ci.org/charliewilco/obsidian.svg?branch=master)](https://travis-ci.org/charliewilco/obsidian)

Obsidian.css is a modular CSS library that focuses on code common to most projects.

This project works under the belief that when abstracted most CSS is shockingly similar across projects. More than likely you'll need a type scale, a grid system, spacing utilities, media blocks, sensible default styling for elements (forms, tables, buttons). This project is a collection of the CSS patterns that have stuck with me over the last two years and grown with me.

Styles are written in an adapted BEM naming convention and organized in an [ITCSS-like](/itcss) methodology. It uses PostCSS plugins to compile variables, color functions and add vendor prefixes.

## Installation

```
yarn add obsidian.css --save
```

or link to the CDN

```markup
<link rel="stylesheet" href="https://unpkg.com/obsidian.css" media="screen" title="Obsidian.css" charset="utf-8">
```

### Using in Build

Recommended you use [PostCSS](https://github.com/postcss/postcss) and [postcss-import](https://github.com/postcss/postcss-import).

Example using Gulp.js:

```js
const gulp = require('gulp');
const postcss = require('gulp-postcss');
const atImport = require('postcss-import');
const env = require('postcss-preset-env');

const processors = [
  atImport,
  env
];

gulp.task('styles', () => {
  return gulp.src('path/to/stylesheet')
    .pipe(postcss(processors))
    // Probably other tasks
    .pipe(gulp.dest('path/to/destination'));
})

```
then import into your CSS and modify some variables:

```css
@import 'obsidian.css/lib/settings';
@import 'obsidian.css/lib/generic';
@import 'obsidian.css/lib/elements';

@import 'obsidian.css/lib/objects/obsidian.grid';
```

```css
@import 'obsidian.css';

:root {
  --headlines: 'Proxima Nova Condensed', Lucida Grande, sans-serif;
  --body-text: 'Meta Serif Pro', Charter, serif;
}
```

And things should compile the way you'd expect.

## Methodology

### ITCSS

[ITCSS](https://www.youtube.com/watch?v=1OKZOV-iLj4) (Inverted Triangle CSS) from Harry Roberts, is a way of structuring CSS in such a way that the most general selectors to trickle down to the most specific selectors, as if they're moving from the top of an bottom of a triangle to the pinnacle of it.


In this implementation there are a few differences. Normally in ITCSS, you could have a tools like Sass functions, but most of the tools we'd need are coming in CSS and transpiled by [PostCSS plugins](https://postcss.org/).

Objects have minimal visual styling in Obsidian. This is a set between the reset styling and the component level styling because it's beyond an element.

Settings contain base styles but often module variables are only contained in that module; there are a few exceptions (like shadow values).

### Naming Classes

Classes in Obsidian are named with purpose.

### Prefixes

Objects, components, and utilities are all prefixed (`.o-`, `.c-`, `.u-`). This leads to clear class names, class names we can search for an `outline` for QA. It also puts a hard line between objects and components.

#### Exceptions

Elements are not prefixed (ie. `.list`, `.table`) because they extend responsive ability or serve as a opt-in default for an element vs opinionated styling. Classes in `obsidian.forms-ui` add specific opinionated styling that's common to projects.

#### Suffixes

Obsidian uses responsive suffixes `@sm`. Responsive targeting shouldn't be a modifier and falls in its own category. Obsidian defaults to a mobile first approach to CSS, meaning that classes without suffixes apply their styles to all screen sizes and ascend upward for styling per suffix.

`@sm`, `@md`, `@lg` are the given suffixes in Obsidian.

#### BEM

[BEM](https://en.bem.info/) is a naming convention that gives class names informative and clear meaning.

```
.block__element--modifier {
  /* Declarations */
}
```

##### Block Names

Blocks can be described as squares you can draw around a piece of UI or the root of a module (visual or conceptual). Most block names should be really simple, so avoid abbreviating or complicating. If two words are needed to describe a block separate them with a single hyphen `-`.

Blocks are the basis of a name. They can have both a modifier and a element attached (`.block__element--modifier`) or have just have one (either a modifier `.block--modifier` or an element `.block__element`.

Utilities in Obsidian get a specific block name that describes their function. For example `d` abbreviating `display` or `bkg` abbreviating `background`.

##### Element Names

Elements are pieces of a block separated from a block by a double underscore `__`. `.c-modal__close` would refer to a close link for a modal component, `.o-intrinsic__item` would refer to the item in the intrinsic container.

##### Modifier Names

Modifiers add to the block or element in some way, hence modifying it. `.o-icon--sm` would refer to a small icon object and `.o-grid__col--3/12` would refer to a grid column that's 3 parts of 12.

Utility modifiers get a single hyphen `-`.

#### Sources

- [BEMIT](http://csswizardry.com/2015/08/bemit-taking-the-bem-naming-convention-a-step-further/)
- [More Transparent UI Code with Namespaces](http://csswizardry.com/2015/03/more-transparent-ui-code-with-namespaces/)
- [Dropbox CSS Styleguide](https://github.com/dropbox/css-style-guide)


## Contributing

First off, you're awesome for wanting to contribute. Second, please take a second to go over a few things to make this process simpler for everyone. Third, you're awesome.

### Getting Started

Clone the repository and run the following in the root of the project:

```sh
yarn

yarn workspace obsidian-documentation dev -p 5000 # open this in one tab
yarn workspace obsidian.css dev # open this in another
```

This project uses [yarn workspaces](https://yarnpkg.com/en/docs/workspaces).

Inside this project there are PostCSS plugins, the core library, and the dev documenation.

### Issues

**Reduced test cases are required**. All bug reports and problem issues require a reduced test case. See [CSS Tricks - Reduced Test Cases](http://css-tricks.com/reduced-test-cases/) on why they _"are the absolute, ... number one way to troubleshoot bugs."_ Reduced test cases help you identify the issue at hand and understand your own code. On our side, they greatly reduce the amount of time spent resolving the issue.

- A reduced test case is an isolated example that demonstrates the bug or issue.
- It contains the bare minimum HTML, CSS, and JavaScript required to demonstrate the bug. No extra functionality or styling.
- A link to your site is **not** a reduced test case.
- A [JSBin](http://jsbin.com/) or [CodePen](http://codepen.io) is preferred so we can help you fix an error.

### Pull Requests

- [Fork](https://github.com/charlespeters/obsidian#fork-destination-box) this repo.
- Push to your fork and submit a pull request.
- Please provide a short explanation of why you made the changes you made.

## License

MIT

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
