@gold.au/table
============

> Used to display tabular data


## Contents

* [Install](#install)
* [Dependency graph](#dependency-graph)
* [Tests](#tests)
* [Release History](#release-history)
* [License](#license)


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Install


```shell
yarn add @gold.au/table
```

```shell
npm install @gold.au/table
```


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Dependency graph

```shell
/table
└─ /core
```


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Tests

The visual test: https://auds.service.gov.au/packages/table/tests/site/


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Release History

* v0.2.1 - Update core package dependency to use the latest version
* v0.2.0 - Refactor sass, first cell header option
* v0.1.3 - Remove pancake js plugin from package json
* v0.1.2 - Utilise the `font-variant` property for numeric table cells
* v0.1.1 - Update font for numerical cells
* v0.1.0 - 💥 Initial version


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## License

Copyright (c) Commonwealth of Australia.
Licensed under [MIT](https://raw.githubusercontent.com/govau/design-system-components/packages/core/master/LICENSE).


**[⬆ back to top](#contents)**

# };

## Usage


* [React](#react)


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------

### React

Usage:

```jsx
import AUtable, {AUtableResponsiveWrapper, AUtableCaption, AUtableCell, AUtableHead, AUtableHeader, AUtableBody, AUtableRow} from '@gold.au/table';

//simple example
<AUtable 
	caption="Population of Australian states and territories, December 2015"
	headers={[
		{title: "Location",   key: "location"},
		{title: "Population", key: "population", type: 'numeric'}
	]}
	data={[
		{population: "7,670,700",     location: "New South Wales"},
		{location: "Victoria",        population: "5,996,400"},
		{location: "Tasmania",        population: "514,400"}
	]}
/>


//complex example
<AUtable
	caption="Example table"
	headers={[
						{title: "Name",      width: '50', key: "name" },
						{title: "Interests", width: '20', key: "interests", render: ( data, row ) => (<ul> {data.map(( data ) => (<li key={data}>{ data }</li>))}</ul>)},
						{title: "Actions",   width: '20', render: ( data, row ) => (
							<span><a href="#">Remove {row.name}</a> | <a href="#"> Update {row.name}</a></span>
							)},
						{title: "Age",       width: '10', key: "age",type: "numeric"},
					]}
	data = {[
					{name: "Bob Davidson",   age: "48", interests: ["photography", "reading"]},
					{name: "Jane Williamson",  age: "25", interests: ["basketball", "exercise", "hockey"]},
					{name: "Sally Robertson", age: "35", interests: ["Road trips", "Painting"]}
				]}
/>

//Using individual components
<table className="au-table">
	<AUtableHead>
		<AUtableRow>
			<AUtableHeader type="text" title="Location"/>
			<AUtableHeader type="numeric" title="Population"/>
			<AUtableHeader type="numeric" title="Change over previous year %"/>
		</AUtableRow>
	</AUtableHead>
	<AUtableBody>
		<AUtableRow>
			<AUtableCell data="New South Wales" type="text" />
			<AUtableCell data="7,670,700" type="numeric"/>
			<AUtableCell data="3.1%" type="numeric"/>
		</AUtableRow>
		<AUtableRow>
			<AUtableCell data="Victoria" type="text" />
			<AUtableCell data="5,996,400" type="numeric" className="bold-cell" />
			<AUtableCell data="2.5%" type="numeric"/>
		</AUtableRow>
	</AUtableBody>
</table>

```

All props:

```jsx
<AUTable
	caption="Population of Australian states and territories, December 2015"
	headers={[]}               {/* The table headers */}
	data={[]}                  {/* The table body data */}
	firstCellIsHeader={true}   {/* Is first cell in table body rows a header*}
	striped={true}             {/* Striped version of the table*/}
	className=""               {/*An additional class, optional*/}
	/>

<AUtableBody 
className=""                 {/*An additional class, optional*/}
/>

<AUtableHead 
className=""                 {/*An additional class, optional*/}
/>

<AUtableHeader /
title="Population"           {/*The title of the column/header*/}
type="numeric"               {/*The type of the column data, 'numeric' for right align, 'text' for left aligned*/}
width="75"                   {/*Width of the header/column. Can be either 25, 33, 50 or 75*/}
scope="col"                  {/*Scope of the header, can be either row or column*/}
className=""                 {/*An additional class, optional*/}
>

<AUtableCell 
data="7,950,500"             {/*The cell data*/}
type="numeric"               {/*The type of the column data, 'numeric' for right align, 'text' for left aligned*/}
className=""                 {/*An additional class, optional*/}
/>

<AUtableRow 
className=""                 {/*An additional class, optional*/}
/>

<AUtableCaption 
tableCaption="Dates and amounts"     {/*Title of the table*/}
className=""                         {/*An additional class, optional*/}
/>

// Table wrapper for responsive tables
<AUtableResponsiveWrapper /> 

/>
```
