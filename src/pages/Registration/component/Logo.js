import React from 'react';

function Logo({logo}) {
	return (
		<div className="row justify-content-center">
			<div className="col-3 pb-4">
				<img className="img-fluid rounded mx-auto d-block" src={logo} alt="Логотип"/>
			</div>
		</div>
	);
}

export default Logo;
