@gold.au/control-input
============

> Control inputs include radio buttons and checkboxes. They allow users to select one or more options.


## Contents

* [Install](#install)
* [Usage](#usage)
* [Dependency graph](#dependency-graph)
* [Tests](#tests)
* [Release History](#release-history)
* [License](#license)


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Install


```shell
yarn add @gold.au/control-input
```

```shell
npm install @gold.au/control-input
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
import { AUcheckbox, AUradio } from './control-input.js';

<AUradio label="Yes" name="has_email" value="yes" id="yes" />
<AUradio label="No" name="has_email" value="no" id="no" />
<AUradio label="Maybe" name="has_email" value="maybe" id="maybe" />

<AUcheckbox label="Has email?" name="has_email" id="has-email" />
```

All props:

```jsx
<AUradio
  label="The label"  {/* The label of the radio button */}
  id="radio-ex"      {/* The id of the radio button*/}
  alt={ false }      {/* An alternate variation of the component */}
  small={ false }    {/* The small variation of the component */}
  dark={ false }     {/* The dark variation of the component */}
/>

<AUcheckbox
  label="The label"  {/* The label of the checkbox */}
  id="checkbox-ex"   {/* The id of the radio button*/}
  alt={ false }      {/* An alternate variation of the component */}
  small={ false }    {/* The small variation of the component */}
  dark={ false }     {/* The dark variation of the component */}
/>
```
_(💡 additional props are spread onto the component)_

For more details have a look at the [usage example](https://github.com/designsystemau/gold-design-system/tree/master/packages/control-input/tests/react/index.js).


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Dependency graph

```shell
control-input
└─ core
```


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Tests

The visual test: https://auds.service.gov.au/packages/control-input/tests/site/


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Release History

* v3.0.2 - Update core package dependency to use the latest version
* v3.0.1 - Remove --save-dev flag from readme instructions
* v3.0.0 - Use explicit labelling instead of implicit labelling for control inputs. Remove `margin-top` for control input block that is not followed by another control input block. Removed unused `Fragment` React import
* v2.2.2 - Fixed radio input underlapping svg on small inputs
* v2.2.1 - Removed uikit references
* v2.2.0 - Changed focus appearance on radio buttons to be round
* v2.1.7 - Replace `checked` attribute with `defaultChecked` on control inputs examples
* v2.1.6 - Update dependencies
* v2.1.5 - Removing web pack dev server, updating dependencies
* v2.1.4 - Fixed build scripts for Windows
* v2.1.3 - Replace node-sass with sass
* v2.1.2 - Change npm run watch browser-sync location
* v2.1.1 - Update dependencies
* v2.1.0 - Adjust spacing, size and lineheight and fixed errors
* v2.0.3 - Change homepage link
* v2.0.2 - Adding focus offset back to control inputs
* v2.0.1 - Fix dependencies
* v2.0.0 - Change to focus colour and border/muted color mix
* v1.0.0 - Moved to AU namespace, added new color themes and spacing
* v0.3.0 - Added pancake-react plugin, ES5 main file
* v0.2.0 - Added react component
* v0.1.1 - Fixed webkit render bug
* v0.1.0 - 💥 Initial version


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## License

Copyright (c) Commonwealth of Australia.
Licensed under [MIT](https://raw.githubusercontent.com/govau/design-system-components/packages/core/master/LICENSE).


**[⬆ back to top](#contents)**

# };
