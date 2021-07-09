import React from 'react'

function Button(props) {
	return (
		<div className="px-4 py-3">
			<button type="button" className="btn btn-primary btn-lg btn-block"> {props.buttonName} </button>
		</div>
	);
}

export default Button;
