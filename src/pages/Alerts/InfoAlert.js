import React from 'react'
import '../../assets/plugins/bootstrap/css/bootstrap.min.css'

function InfoAlert({content}) {
	return (
		<div className="alert alert-primary alert-dismissible fade show" role="alert">
			{content}
			<button type="button" className="close" data-bs-dismiss="alert" aria-label="Close">
				<span aria-hidden="true">&times;</span>
			</button>
		</div>
	)
}

export default InfoAlert;
