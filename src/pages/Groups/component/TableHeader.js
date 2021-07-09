import React from "react";

function TableHeader({tableHeader}) {
	return (
		<thead>
		<tr>
			{tableHeader.map(name => <th scope="col" className="pb-4"> {name} </th>)}
		</tr>
		</thead>
	);
}

export default TableHeader;