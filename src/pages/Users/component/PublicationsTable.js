import React from "react";
import TableHeader from "./TableHeader";
import TableElement from "./TableElement";

function PublicationsTable({tableHeader, tableElements}) {
	return (
		<div className="row justify-content-center align-items-start py-3">
			<div className="col-8 pt-4 justify-content-center">
				<table className="table table-hover table-borderless block">
					<TableHeader tableHeader={tableHeader}> </TableHeader>
					<tbody>
					{tableElements.map(tableElement =>
						<TableElement tableElement={tableElement}> </TableElement>)}
					</tbody>
				</table>
			</div>
		</div>
	)
}

export default PublicationsTable;