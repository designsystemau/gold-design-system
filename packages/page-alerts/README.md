@gold.au/page-alerts
============

> Use page alerts to notify users of important information and state changes to the page.


## Contents

* [Install](#install)
* [Usage](#usage)
* [Tests](#tests)
* [Release History](#release-history)
* [License](#license)


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Install


```shell
yarn add @gold.au/page-alerts
```

```shell
npm install @gold.au/page-alerts
```


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Usage


* [React](#react)


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


### React

Usage:

```jsx
import AUpageAlert from './page-alerts.js';

<AUpageAlert as='info'>
  Content of alert
</AUpageAlert>
```

All props:

```jsx
<AUpageAlert
  as="info"         {/* One of four kinds: 'info', 'success', 'warning', 'error' */}
  alt={ false }     {/* An alternate variation of the component */}
  dark={ false }    {/* A dark variation of the component */}
>
  Content of alert
</AUpageAlert>
```
_(💡 additional props are spread onto the component)_

For more details have a look at the [usage example](https://github.com/designsystemau/gold-design-system/tree/main/packages/page-alerts/tests/react/index.js).


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Dependency graph

```shell
page-alerts
├─ core
└─ body
   └─ core
```


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Tests


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Release History

* v2.1.4 - Update core package dependency to use the latest version
* v2.1.3 - Remove --save-dev flag from readme instructions
* v2.1.2 - Removed unused `Fragment` React import
* v2.1.1 - Removed uikit references
* v2.1.0 - Remove role alert as it interupts the screen reader
* v2.0.8 - Update dependencies
* v2.0.7 - Removing web pack dev server, updating dependencies
* v2.0.6 - Fixed build scripts for Windows
* v2.0.5 - Replace node-sass with sass
* v2.0.4 - Change npm run watch browser-sync location
* v2.0.3 - Update dependencies
* v2.0.2 - Change homepage links
* v2.0.1 - Fix dependencies
* v2.0.0 - Change to focus colour and border/muted color mix
* v1.0.0 - Moved to AU namespace, added new color themes and spacing
* v0.3.0 - Added pancake-react plugin, ES5 main file
* v0.2.0 - Added react component
* v0.1.1 - Improved print styles
* v0.1.0 - 💥 Initial version


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## License

Copyright (c) Commonwealth of Australia.
Licensed under [MIT](https://raw.githubusercontent.com/govau/design-system-components/packages/core/master/LICENSE).


**[⬆ back to top](#contents)**

# };
