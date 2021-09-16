GOLD Design System
=============

> The components for GOLD Design System, previously known as the Australian Government Design System.

## Documentation

**Full documentation at [gold.designsystemau.org](http://gold.designsystemau.org)**

---

## Installation

### Prerequisites
The design system components are distributed through the [npm](https://www.npmjs.com) ecosystem. Npm requires `node.js` and the components needs [node.js](https://nodejs.org/en/) 8 or higher.

If you are not familiar with `npm` and want to use the design system, we have created a [download page](https://designsystem.gov.au/download) to help.

Once on the page you can select the components you wish to use and choose how you want do download them.

* **CSS minified** will bundle the CSS of the components into a single file to be used directly in HTML.
* **CSS modules** are used with modern JavaScript allowing you to import styles specific component styles.
* **SASS modules** will create multiple SASS files that can be imported into a main.scss file.
* **JavaScript minified** will bundle the JavaScript of the components together and minify them for use directly in HTML.
* **JavaScript modules** are used when you want to break a part the components functionality.
* **React modules** allow the components to be imported directly into React.

### Installing modules
To install a module make sure you have a `package.json` file in the root of your project folders. (You can generate one by running `npm init`.)
Inside your working folder install any module and [pancake](https://github.com/govau/pancake/) will make sure you have all assets ready to use.

Run `npm install @gold.au/body` to install the body module. To install several modules, chain them like:

```shell
npm install @gold.au/body @gold.au/header @gold.au/footer @gold.au/buttons
```

An even better experience is using [Syrup](https://github.com/govau/pancake/tree/master/packages/pancake-syrup). Install it globally via
`npm install -g @gov.au/syrup`. More info coming soon.


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Frequently asked questions

View our [frequently asked questions page](./FAQ.md) to see common questions from the community.

If you can’t find an answer to a question you have please email us at designsystem@dta.gov.au or join our conversation on [slack](http://guides.service.gov.au/join-slack/).

**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Checklist and browser support

We use the below checklist to ensure new modules or updates to existing modules have a certain level of quality:

### Checklist

#### General checks
- [x] Semantic HTML and non semantic test?
- [x] No JavaScript fallback?
- [x] SVG fallback, functional without SVG?
- [x] IE9, IE10, IE11 legacy test
- [x] IE8 functional test

#### Accessibility checks
- [x] Accessibility colour contrast
- [x] Keyboard accessible
- [x] Tested with screen reader
- [x] Accessibility expert review

#### CSS / Sass
- [x] Never nest anything that is not either an overwrite or a child element.
- [x] `font-family` and text `color` on elements that don’t require body
- [x] Using `AU-space()` with `unit` for spacing everywhere but in font-sizes; no magic numbers
- [x] No hardcoded colors, use `$AU-color-` or `$AU-colordark-` vars.
- [x] Sass focus mixin `AU-focus()` or `AU-focus( 'dark' )`
- [x] Using `AU-fontgrid()` for `font-size` and `line-height` to snap typography to the grid.
- [x] Print style sheets

#### JavaScript
- [x] `var AU = AU || {};` in top?
- [x] Each module has it’s own name-space prefixed with `AU` e.g.: `AU.modulename.function1`, `AU.modulename.function2`
- [x] Keep public API small, use private functions where you can
- [x] Export out private function for tests only `if( typeof module !== 'undefined' )`
- [x] Export entire module in the end: `if( typeof module !== 'undefined' ) { module.exports = AU; }` so react can use it.
- [x] Provide sane defaults for parameters where you can
- [x] Add [jest](https://facebook.github.io/jest/) unit tests where you can
- [x] Document public API in the readme.

#### package.json
- [x] `dependencies` - `peerDependencies` check
- [x] Delete/enable js object and settings for pancake plugins


### Browser support

All components have to work on the below browsers:

| Browser           | Version           | Platform      | Engine   |
|-------------------|-------------------|---------------|----------|
| Internet Explorer | 8                 | Windows 7     | Trident  |
| Internet Explorer | 9                 | Windows 7     | Trident  |
| Internet Explorer | 10                | Windows 7     | Trident  |
| Internet Explorer | 11                | Windows 8.1   | Trident  |
| Edge              | Latest            | Windows 10    | EdgeHTML |
| Firefox           | Latest            | OS X          | Gecko    |
| Firefox           | Latest            | Windows 10    | Gecko    |
| Firefox           | Latest            | Android 6     | Gecko    |
| Chrome            | Latest            | OS X          | Blink    |
| Chrome            | Latest            | Windows 10    | Blink    |
| Chrome            | Latest            | Android 4.0   | Blink    |
| Chrome            | Latest            | Android 6     | Blink    |
| Safari            | Latest (11)       | OS X          | WebKit   |
| Safari            | Latest - 1 ( 10 ) | iOS           | WebKit   |
| Samsung           |                   | G S8          |          |
| Samsung           |                   | G S7          |          |
| Samsung           |                   | G S6          |          |
| Chrome            |                   | pixel 7.1     |          |
| Native browser    |                   | Lumia 930 8.1 |          |
| Chome +1          |                   |               |          |
| Safari +1         |                   |               |          |
| Firefox +1        |                   |               |          |


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Modules

<details>
	<summary>@gold.au/core</summary>
	<br><code>npm install @gold.au/core</code><br>
	<br>See the <a href="https://github.com/designsystemau/gold-design-system/blob/main/packages/core/README.md">readme file for core</a><br><br>
	<i>No dependencies</i>

----------
</details>

<details>
	<summary>@gov.au/accordion</summary>
	<br><code>npm install @gov.au/accordion</code><br>
	<br>See the <a href="https://github.com/designsystemau/gold-design-system/blob/main/packages/accordion/README.md">readme file for accordion</a><br><br>
	Dependencies:
	<br>

```shell
├─ animate
└─ core
```
----------
</details>

<details>
	<summary>@gov.au/animate</summary>
	<br><code>npm install @gov.au/animate</code><br>
	<br>See the <a href="https://github.com/designsystemau/gold-design-system/blob/main/packages/animate/README.md">readme file for animate</a><br><br>
	<i>No dependencies</i>

----------
</details>

<details>
	<summary>@gold.au/body</summary>
	<br><code>npm install @gold.au/body</code><br>
	<br>See the <a href="https://github.com/designsystemau/gold-design-system/blob/main/packages/body/README.md">readme file for body</a><br><br>
	Dependencies:
	<br>

```shell
└─ core
```
----------
</details>

<details>
	<summary>@gov.au/breadcrumbs</summary>
	<br><code>npm install @gov.au/breadcrumbs</code><br>
	<br>See the <a href="https://github.com/designsystemau/gold-design-system/blob/main/packages/breadcrumbs/README.md">readme file for breadcrumbs</a><br><br>
	Dependencies:
	<br>

```shell
├─ core
└─ link-list
   ├─ core
   └─ body
      └─ core
```
----------
</details>

<details>
	<summary>@gold.au/buttons</summary>
	<br><code>npm install @gold.au/buttons</code><br>
	<br>See the <a href="https://github.com/designsystemau/gold-design-system/blob/main/packages/buttons/README.md">readme file for buttons</a><br><br>
	Dependencies:
	<br>

```shell
└─ core
```
----------
</details>

<details>
	<summary>@gov.au/callout</summary>
	<br><code>npm install @gov.au/callout</code><br>
	<br>See the <a href="https://github.com/designsystemau/gold-design-system/blob/main/packages/callout/README.md">readme file for callout</a><br><br>
	Dependencies:
	<br>

```shell
└─ core
```
----------
</details>

<details>
	<summary>@gold.au/card</summary>
	<br><code>npm install @gold.au/card</code><br>
	<br>See the <a href="https://github.com/designsystemau/gold-design-system/blob/main/packages/card/README.md">readme file for card</a><br><br>
	Dependencies:
	<br>

```shell
└─ core
```
----------
</details>

<details>
	<summary>@gold.au/control-input</summary>
	<br><code>npm install @gold.au/control-input</code><br>
	<br>See the <a href="https://github.com/designsystemau/gold-design-system/blob/main/packages/control-input/README.md">readme file for control-input</a><br><br>
	Dependencies:
	<br>

```shell
└─ core
```
----------
</details>

<details>
	<summary>@gold.au/cta-link</summary>
	<br><code>npm install @gold.au/cta-link</code><br>
	<br>See the <a href="https://github.com/designsystemau/gold-design-system/blob/main/packages/cta-link/README.md">readme file for cta-link</a><br><br>
	Dependencies:
	<br>

```shell
└─ core
```
----------
</details>

<details>
	<summary>@gold.au/direction-links</summary>
	<br><code>npm install @gold.au/direction-links</code><br>
	<br>See the <a href="https://github.com/designsystemau/gold-design-system/blob/main/packages/direction-links/README.md">readme file for direction-links</a><br><br>
	Dependencies:
	<br>

```shell
└─ core
```
----------
</details>

<details>
	<summary>@gold.au/footer</summary>
	<br><code>npm install @gold.au/footer</code><br>
	<br>See the <a href="https://github.com/designsystemau/gold-design-system/blob/main/packages/footer/README.md">readme file for footer</a><br><br>
	Dependencies:
	<br>

```shell
└─ core
```
----------
</details>

<details>
	<summary>@gold.au/form</summary>
	<br><code>npm install @gold.au/form</code><br>
	<br>See the <a href="https://github.com/designsystemau/gold-design-system/blob/main/packages/form/README.md">readme file for form</a><br><br>
	Dependencies:
	<br>

```shell
└─ core
```
----------
</details>

<details>
	<summary>@gold.au/grid-12</summary>
	<br><code>npm install @gold.au/grid-12</code><br>
	<br>See the <a href="https://github.com/designsystemau/gold-design-system/blob/main/packages/grid-12/README.md">readme file for grid-12</a><br><br>
	Dependencies:
	<br>

```shell
└─ core
```
----------
</details>

<details>
	<summary>@gold.au/header</summary>
	<br><code>npm install @gold.au/header</code><br>
	<br>See the <a href="https://github.com/designsystemau/gold-design-system/blob/main/packages/header/README.md">readme file for header</a><br><br>
	Dependencies:
	<br>

```shell
└─ core
```
----------
</details>

<details>
	<summary>@gold.au/headings</summary>
	<br><code>npm install @gold.au/headings</code><br>
	<br>See the <a href="https://github.com/designsystemau/gold-design-system/blob/main/packages/headings/README.md">readme file for headings</a><br><br>
	Dependencies:
	<br>

```shell
└─ core
```
----------
</details>

<details>
	<summary>@gold.au/inpage-nav</summary>
	<br><code>npm install @gold.au/inpage-nav</code><br>
	<br>See the <a href="https://github.com/designsystemau/gold-design-system/blob/main/packages/inpage-nav/README.md">readme file for inpage-nav</a><br><br>
	Dependencies:
	<br>

```shell
├─ core
└─ link-list
   ├─ core
   └─ body
      └─ core
```
----------
</details>

<details>
	<summary>@gold.au/keyword-list</summary>
	<br><code>npm install @gold.au/keyword-list</code><br>
	<br>See the <a href="https://github.com/designsystemau/gold-design-system/blob/main/packages/keyword-list/README.md">readme file for keyword-list</a><br><br>
	Dependencies:
	<br>

```shell
├─ core
└─ link-list
   ├─ core
   └─ body
      └─ core
```
----------
</details>

<details>
	<summary>@gold.au/link-list</summary>
	<br><code>npm install @gold.au/link-list</code><br>
	<br>See the <a href="https://github.com/designsystemau/gold-design-system/blob/main/packages/link-list/README.md">readme file for link-list</a><br><br>
	Dependencies:
	<br>

```shell
├─ core
└─ body
   └─ core
```
----------
</details>

<details>
	<summary>@gold.au/main-nav</summary>
	<br><code>npm install @gold.au/main-nav</code><br>
	<br>See the <a href="https://github.com/designsystemau/gold-design-system/blob/main/packages/main-nav/README.md">readme file for main-nav</a><br><br>
	Dependencies:
	<br>

```shell
├─ core
├─ animate
└─ link-list
   ├─ core
   └─ body
      └─ core
```
----------
</details>

<details>
	<summary>@gold.au/page-alerts</summary>
	<br><code>npm install @gold.au/page-alerts</code><br>
	<br>See the <a href="https://github.com/designsystemau/gold-design-system/blob/main/packages/page-alerts/README.md">readme file for page-alerts</a><br><br>
	Dependencies:
	<br>

```shell
├─ core
└─ body
   └─ core
```
----------
</details>

<details>
	<summary>@gold.au/progress-indicator</summary>
	<br><code>npm install @gold.au/progress-indicator</code><br>
	<br>See the <a href="https://github.com/designsystemau/gold-design-system/blob/main/packages/progress-indicator/README.md">readme file for progress-indicator</a><br><br>
	Dependencies:
	<br>

```shell
└─ core
```
----------
</details>

<details>
	<summary>@gold.au/responsive-media</summary>
	<br><code>npm install @gold.au/responsive-media</code><br>
	<br>See the <a href="https://github.com/designsystemau/gold-design-system/blob/main/packages/responsive-media/README.md">readme file for responsive-media</a><br><br>
	Dependencies:
	<br>

```shell
└─ core
```
----------
</details>

<details>
	<summary>@gold.au/searchbox</summary>
	<br><code>npm install @gold.au/searchbox</code><br>
	<br>See the <a href="https://github.com/designsystemau/gold-design-system/blob/main/packages/searchbox/README.md">readme file for searchbox</a><br><br>
	Dependencies:
	<br>

```shell
├─ core
├─ text-inputs
│  └─ core
└─ buttons
   └─ core
```
----------
</details>

<details>
	<summary>@gold.au/select</summary>
	<br><code>npm install @gold.au/select</code><br>
	<br>See the <a href="https://github.com/designsystemau/gold-design-system/blob/main/packages/select/README.md">readme file for select</a><br><br>
	Dependencies:
	<br>

```shell
└─ core
```
----------
</details>

<details>
	<summary>@gold.au/side-nav</summary>
	<br><code>npm install @gold.au/side-nav</code><br>
	<br>See the <a href="https://github.com/designsystemau/gold-design-system/blob/main/packages/side-nav/README.md">readme file for side-nav</a><br><br>
	Dependencies:
	<br>

```shell
├─ core
├─ animate
├─ accordion
│  ├─ animate
│  └─ core
└─ link-list
   ├─ core
   └─ body
      └─ core
```
----------
</details>

<details>
	<summary>@gold.au/skip-link</summary>
	<br><code>npm install @gold.au/skip-link</code><br>
	<br>See the <a href="https://github.com/designsystemau/gold-design-system/blob/main/packages/skip-link/README.md">readme file for skip-link</a><br><br>
	Dependencies:
	<br>

```shell
└─ core
```
----------
</details>

<details>
	<summary>@gold.au/table</summary>
	<br><code>npm install @gold.au/table</code><br>
	<br>See the <a href="https://github.com/designsystemau/gold-design-system/blob/main/packages/table/README.md">readme file for table</a><br><br>
	Dependencies:
	<br>

```shell
└─ core
```
----------
</details>

<details>
	<summary>@gold.au/tags</summary>
	<br><code>npm install @gold.au/tags</code><br>
	<br>See the <a href="https://github.com/designsystemau/gold-design-system/blob/main/packages/tags/README.md">readme file for tags</a><br><br>
	Dependencies:
	<br>

```shell
└─ core
```
----------
</details>

<details>
	<summary>@gold.au/text-inputs</summary>
	<br><code>npm install @gold.au/text-inputs</code><br>
	<br>See the <a href="https://github.com/designsystemau/gold-design-system/blob/main/packages/text-inputs/README.md">readme file for text-inputs</a><br><br>
	Dependencies:
	<br>

```shell
└─ core
```
----------
</details>

<br>

**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Tests

Visual tests have been built into each module and can be seen in either of the `README.md` files of each module or in the [listing above](#modules).
We have also integrated [pa11y](https://github.com/pa11y/pa11y) for accessibility testing and are using [jest](https://facebook.github.io/jest/) for javascript
tests.

Run all tests with the npm test script:

```shell
npm run test
```


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------

## Related repositories
- [govau/design-system-starter](https://github.com/designsystemau/design-system-starter)
- [govau/design-system-site](https://github.com/chameleon/design-system-site)

**[⬆ back to top](#contents)**

