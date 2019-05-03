import React from 'react';
import ReactDOM from 'react-dom';

import AUtable from './table.js';


ReactDOM.render(
	<div>
		<h2>Default</h2>
		<AUtable
			caption="Population of Australian states and territories, December 2015"
			headers={[
				{
					text: "Location",
					width: "75",
				},
				{
					text: "Population",
					width: "25"
				}
			]}
			rows={[
				[
					{
						text: "New South Wales"
					},
					{
						text: "7,670,700"
					}
				],
				[
					{
						text: "Victoria"
					},
					{
						text: "5,996,400"
					}
				],
				[
					{
						text: "Tasmania"
					},
					{
						text: "517,400"
					}
				],
			]}
		/>
		<br/>
		<br/>
		<hr/>

		<h2>Default table with right aligned header and cells</h2>
		<AUtable
			caption="Population of Australian states and territories, December 2015"
			headers={[
				{
					text: "Location",
					width: "75"
				},
				{
					text: "Population",
					width: "25",
					alignment: "right"
				}
			]}
			rows={[
				[
					{
						text: "New South Wales"
					},
					{
						text: "7,670,700",
						alignment: "right"
					}
				],
				[
					{
						text: "Victoria"
					},
					{
						text: "5,996,400",
						alignment: "right"
					}
				],
				[
					{
						text: "Tasmania"
					},
					{
						text: "517,400",
						alignment: "right"
					}
				],
			]}
		/>


		<h2>Default <code>--striped</code></h2>
		<AUtable
			striped
			caption="Population of Australian states and territories, December 2015"
			headers={[
				{
					text: "Location"
				},
				{
					text: "Population"
				}
			]}
			rows={[
				[
					{
						text: "New South Wales"
					},
					{
						text: "7,670,700"
					}
				],
				[
					{
						text: "Victoria"
					},
					{
						text: "5,996,400"
					}
				],
				[
					{
						text: "Queensland"
					},
					{
						text: "4,808,8000"
					}
				],
				[
					{
						text: "Western Australia"
					},
					{
						text: "2,603,900"
					}
				],
				[
					{
						text: "South Australia"
					},
					{
						text: "1,702,800"
					}
				],
				[
					{
						text: "Tasmania"
					},
					{
						text: "517,400"
					}
				],
				[
					{
						text: "Northern Territory"
					},
					{
						text: "244,000"
					}
				],
				[
					{
						text: "Australian Capital Territory"
					},
					{
						text: "393,000"
					}
				]
			]}
		/>
	</div>,

	document.getElementById('root'),
);
