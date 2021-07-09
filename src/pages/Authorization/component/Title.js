import React from "react";

function Title({title}) {
	return (
		<div className= "row">
			<div className="h2 pb-2 text-center col-xl"> {title} </div>
		</div>
	);
}

export default Title;