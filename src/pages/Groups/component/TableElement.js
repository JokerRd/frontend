import React from "react";
import axios from "axios";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";


function TableElement({tableElement}) {
	return (
		<tr>
			<td> {tableElement.name} </td>
			<td>{tableElement.link}</td>
			<td> {tableElement.animalTypes} </td>
			<td> {tableElement.regions} </td>
			<td>
				<DeleteButton id={tableElement.id}/>
			</td>
		</tr>
	);
}

export default TableElement;