import React from 'react';

function SchemeItem({item}) {
	return (
		<div className="col">
			<div className="row justify-content-center">
				<div className="col-6 pb-4">
					<img className="img-fluid rounded mx-auto d-block" src={item} alt="schemeItem"/>
				</div>
			</div>
		</div>
	);
}

export default SchemeItem;
