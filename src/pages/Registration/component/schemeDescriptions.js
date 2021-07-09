import React from 'react';
import SchemeDescription from "./SchemeDescription";

function SchemeDescriptions({schemeDescriptions}) {
	return (
		<div className="pb-5 row">
			<SchemeDescription schemeDescription={schemeDescriptions.settingsDescription}> </SchemeDescription>
			<SchemeDescription schemeDescription={schemeDescriptions.postDescription}> </SchemeDescription>
			<SchemeDescription schemeDescription={schemeDescriptions.photoDescription}> </SchemeDescription>
		</div>
	);
}

export default SchemeDescriptions;