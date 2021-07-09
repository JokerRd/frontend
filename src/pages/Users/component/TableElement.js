import React from "react";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";

function TableElement({tableElement}) {
	return (
		<tr>
			<td> {tableElement.name} </td>
			<td> {tableElement.mail} </td>
			<td> {tableElement.state} </td>
			<td>
				<DeleteButton id={tableElement.id}/>
			</td>
		</tr>
	);
}

export default TableElement;