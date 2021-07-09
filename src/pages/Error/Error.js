import React from 'react'
import '../../assets/plugins/bootstrap/css/bootstrap.min.css'
import './styles/error.css'
import errorImage from './img/error.jpg'
import err403 from './img/403.png'
import err404 from './img/404.png'
import err503 from './img/503.png'

function getPicture(code) {
	if (code === '403')
		return <img src={err403} className="icon img-fluid my-5" alt="Ошибка 403"/>
	else if (code === '404')
		return <img src={err404} className="icon img-fluid my-5" alt="Ошибка 404"/>;
	else if (code === '503')
		return <img src={err503} className="icon img-fluid my-5" alt="Ошибка 503"/>
}

function Error({code, errorContent}) {
	return (
		<div className="container-fluid">
			<div className="row justify-content-center align-items-start">
				<div className="col-8 py-5 justify-content-center">

					<div className="row justify-content-center align-items-center">
						<div className="col-auto">
							{getPicture(code)}
						</div>
						<div className="col-auto">
							<h1 className="font">{code}</h1>
						</div>
						<div className="col-auto">
							{getPicture(code)}
						</div>
					</div>

					<h6 className="font">{errorContent}</h6>
					<img src={errorImage} className="img-fluid my-5" alt="Ошибка"/>
				</div>
			</div>
		</div>
	)
}

export default Error;
