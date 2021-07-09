import React from 'react';
import '../styles/authorization.css'

function Description({description}) {
	return (
		<div>
			<div className= "row">
				<div className="h4 text-center col-xl"> {description[0]} </div>
			</div>
			<div className= "row">
				<div className="h4 pb-3 text-center col-xl"> {description[1]} </div>
			</div>
		</div>
	);
}

export default Description;
