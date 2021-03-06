/** @format */

/**
 * External dependencies
 */
import React, { PureComponent } from 'react';
import { localize } from 'i18n-calypso';

/**
 * Internal dependencies
 */
import Button from 'components/button';

class ReaderLandingStepContent extends PureComponent {
	render() {
		const { translate, onButtonClick } = this.props;
		return (
			<div className="reader-landing__step-content">
				<img
					src="/calypso/images/reader/reader-intro-character.svg"
					alt={ translate( 'Illustration of a person reading' ) }
					className="reader-landing__step-content-illustration"
				/>
				<Button primary={ true } type="submit" onClick={ onButtonClick }>
					{ translate( 'Continue' ) }
				</Button>
			</div>
		);
	}
}

export default localize( ReaderLandingStepContent );
