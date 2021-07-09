import React from 'react';

function SchemeDescription({schemeDescription}) {
	return (
		<div className="col">
			<div className="text-center lead col"> {schemeDescription} </div>
		</div>
	);
}

export default SchemeDescription;