import React from "react";
import gav from '../img/Гав.jpg'
import EditButton from "./EditButton";
import {useSelector} from "react-redux";

function TableElement({tableElement}) {
	const id = useSelector(state => state.user.userId)
	return (
		<tr>
			<td className="img-fluid">
				<img className="miniature" src={gav} alt={"sda"}/>
			</td>
			<td> {tableElement.name} </td>
			<td> {tableElement.status} </td>
			<td><EditButton userId={id} postId={tableElement.id}/></td>
		</tr>
	);
}

export default TableElement;