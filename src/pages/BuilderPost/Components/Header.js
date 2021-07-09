import React from 'react'

function Header({content}) {
	return (
		<header className="d-flex flex-wrap align-items-center justify-content-between py-3">

			<div className="d-flex col-3 justify-content-between mb-md-0">
				<a href="/" className="text-dark text-decoration-none">
					<img className="img-fluid logo" src={content.logo} alt="logo img"/>
					<span className="h4 px-2"> {content.serviceName} </span>
				</a>
			</div>

			<div className="nav col-auto justify-content-center mb-md-0">
				<ul className="nav nav-pills">

					{/*Отрисовка из content, без хуков не назначить active element*/}
					{/*{content.headerElements.map(element =>
						<li className="nav-item"><a href={element.href} className="nav-link"> {element.name} </a></li>
					)}*/}

					{/*Статичная отрисовка*/}
					<li className="nav-item"><a href="https://localhost:3000/groups" className="nav-link">Группы</a></li>
					<li className="nav-item"><a href="https://localhost:3000/users" className="nav-link">Пользователи</a></li>
					<li className="nav-item"><a href="https://localhost:3000/builderPost" className="nav-link active">Создать публикацию</a></li>
					<li className="nav-item"><a href="https://localhost:3000/publications" className="nav-link">Мои публикации</a></li>
				</ul>
			</div>

			<div className="d-flex col-3 justify-content-end mb-md-0">
				<a href="/" className="text-dark text-decoration-none">
					<span className="h4 px-2"> {content.username} </span>
					<img className="img-fluid logo" src={content.user} alt="user img"/>
				</a>
			</div>

		</header>
	);
}

export default Header;
