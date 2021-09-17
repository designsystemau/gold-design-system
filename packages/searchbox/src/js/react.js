/*! [replace-name] v[replace-version] */
/***************************************************************************************************************************************************************
 *
 * searchbox function
 *
 *
 *
 **************************************************************************************************************************************************************/

import React from 'react';
import PropTypes from 'prop-types';

// ES5 dependency: import AUtextInput from '@gold.au/text-inputs';
// ES6 dependency: import AUtextInput from './text-inputs';

// ES5 dependency: import AUbutton from '@gold.au/buttons';
// ES6 dependency: import AUbutton from './buttons';


// The following line will be replaced automatically with generic imports for the ES5 pipeline.
// You can safely ignore this bit if you use this module with pancake
//
// [replace-imports]


/**
 * AUsearchBox
 *
 * @param  {string} label       - Text on label
 * @param  {string} btnText     - Text on button
 * @param  {string} id          - Id of text input, required
 * @param  {bool}   dark        - Dark variation of search box
 * @param  {bool}   responsive  - Responsive variation, text turns to icon on smaller devices
 * @param  {bool}   icon        - Icon only, hides text on button
 * @param  {object} btnProps    - Props to be passed into the AUbutton
 * @param  {object} inputProps    - Props to be passed into the AUtextInput
 *
 */
const AUsearchbox = ({ label, btnText, dark, responsive, id, icon, wrapper, className, inputProps, btnProps, onClick, ...attributeOptions}) => {

	let Wrapper = wrapper;

	if ( Wrapper === 'form' ) {
		attributeOptions.role = "search";
	}

	return(
		<Wrapper className={`au-search ` +
								`${dark ? 'au-search--dark' : ''} ` +
								`${icon ? 'au-search--icon' : ''} ` +
								`${responsive ? 'au-search--responsive' : ''} ` +
								`${className}`} {...attributeOptions}>
			{ label && <label htmlFor={id } className="au-search__label">{label}</label> }

			<AUtextInput dark={dark} id={id} type="search" {...inputProps} />
			<div className="au-search__btn">
				<AUbutton dark={dark} {...btnProps}>
						<span className="au-search__submit-btn-text">{btnText}</span>
				</AUbutton>
			</div>
		</Wrapper>
)
};

AUsearchbox.propTypes = {
	label: PropTypes.string,
	btnText: PropTypes.string,
	id: PropTypes.string.isRequired,
	dark: PropTypes.bool,
	icon: PropTypes.bool,
	responsive: PropTypes.bool,
	wrapper: PropTypes.oneOf([ 'div', 'form' ]),
	inputProps: PropTypes.object,
	btnProps: PropTypes.object
};

AUsearchbox.defaultProps = {
	className: '',
	btnText: 'Search',
	wrapper: 'form'
};

export default AUsearchbox;
