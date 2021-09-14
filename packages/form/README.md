@gold.au/form
============

> The form component contains layout, labelling and inline validations for form fields


## Contents

* [Install](#install)
* [Dependency graph](#dependency-graph)
* [Tests](#tests)
* [Release History](#release-history)
* [License](#license)


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Install


```shell
yarn add @gold.au/form
```

```shell
npm install @gold.au/form
```


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Dependency graph

```shell
form
└─ core
```


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Tests

The visual test: https://auds.service.gov.au/packages/form/tests/site/


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Release History

* v0.1.6 - Update core package dependency to use the latest version
* v0.1.5 - Update version for the dependency: @gold.au/core
* v0.1.4 - Add margin between text area and form labels, hint text and error messages.
* v0.1.3 - Remove --save-dev flag from readme instructions.
* v0.1.2 - Remove hint text colours as they are now in core.
* v0.1.1 - Update selector to add `margin-top` for all `input` elements that are preceded by a label element
* v0.1.0 - 💥 Initial version


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## License

Copyright (c) Commonwealth of Australia.
Licensed under [MIT](https://raw.githubusercontent.com/govau/design-system-components/packages/core/master/LICENSE).


**[⬆ back to top](#contents)**

# };



----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Usage


* [React](#react)


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------

### React

Usage:

```jsx
import { AUlabel, AUhintText, AUerrorText, AUformGroup, AUfieldset, AUlegend } from '@gold.au/form';

<AUlabel text="Email" />

<AUhintText text="We will only use this email to respond to your query." />

<AUerrorText text="Enter an email address in the correct format, like name@example.com" />

<AUformGroup>
    // labels, hint text, and form controls here
</AUformGroup>

<AUfieldset>
    <AUlegend>
    // labels/hint text here
    </AUlegend>

    // form controls here
    
</AUfieldset>
```

All props:

```jsx
<AUlabel 
    text="Email"                 {/* The text of the label */}
    dark={ true }                {/* The dark variation of the component */}
    inline={ true }              {/* Label inline*/}
/>

<AUhintText
    text="We will only use this email to respond to your query." {/* The hint text */}
    dark = { true }                                              {/* The dark variation of the component */}
    alt={ false }                                                {/* The alt variation of the component */}
/>

<AUerrorText
    text="Enter an email in the valid format."  {/* The error text */}
    dark={ true }                               {/* The dark variation of the component */}
    inline={ true }                             {/* Display the error text inline*/}
/>

<AUformGroup
    status="invalid"            {/* Adds invalid state to form group */}
    dark = { true }             {/* The dark variation of the component */}
/>

<AUfieldset 
    dark = { true }             {/* The dark variation of the component */}
/>
```
