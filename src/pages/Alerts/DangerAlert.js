import React from 'react'
import '../../assets/plugins/bootstrap/css/bootstrap.min.css'

function DangerAlert({content}) {
	return (
		<div className="alert alert-danger alert-dismissible fade show" role="alert">
			{content}
			<button type="button" className="close" data-dismiss="alert" aria-label="Close">
				<span aria-hidden="true">&times;</span>
			</button>
		</div>
	)
}

export default DangerAlert;
