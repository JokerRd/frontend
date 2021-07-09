import React from 'react';
import SchemeItem from "./SchemeItem";
import '../styles/authorization.css'

function SchemeItems({schemeItems}) {
	return (
		<div className="pt-5 row item">
			<SchemeItem item={schemeItems.settings}> </SchemeItem>
			<SchemeItem item={schemeItems.post}> </SchemeItem>
			<SchemeItem item={schemeItems.photo}> </SchemeItem>
		</div>
	);
}

export default SchemeItems;