import React, {useState} from "react";
import {Button, Modal} from 'react-bootstrap' ;
import '../../../assets/plugins/bootstrap/css/bootstrap.min.css'

function EditButton() {

	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<div>
			<Button className="mr-2" variant="primary" onClick={handleShow}>
				Редактировать
			</Button>

			<Modal
				show={show}
				onHide={handleClose}
				size="lg"
				centered
			>
				<Modal.Header closeButton>
					<Modal.Title>
						Изменение группы
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div className="row align-items-center my-3">
						<div className="col-3">
							Ссылка на группу:
						</div>
						<div className="col">
							<input className="form-control" type="link" placeholder="Ссылка на группу ВКонтакте"
							       aria-label="default input example"/>
						</div>
					</div>

					<div className="row align-items-center my-3">
						<div className="col-3">
							Город:
						</div>
						{/*стили selectа не рисуется, что-то с бустрапом*/}
						{/*
						<div className="col">
							<select className="form-select" aria-label="Default select example">
								<option value="1">Екатеринбург</option>
								<option value="2">Челябинск</option>
								<option value="3">Пермь</option>
							</select>
						</div>
						*/}
						<div className="col">
							<input className="form-control" type="link" placeholder="Город группы"
							       aria-label="default input example"/>
						</div>
					</div>

					<div className="row align-items-center my-3">
						<div className="col-3">
							Категории:
						</div>
						<div className="col">
							{/*Нет валидации*/}
							{/*Захардкоженно, нужно их брать из хранилища и рисовать оттуда*/}
							<div className="form-check form-check-inline mr-4 center-block">
								<input className="form-check-input" type="checkbox" value="" id="dogs"/>
								<label className="form-check-label" htmlFor="dogs">
									Собаки
								</label>
							</div>
							<div className="form-check form-check-inline mr-4 center-block">
								<input className="form-check-input" type="checkbox" value="" id="cats"/>
								<label className="form-check-label" htmlFor="cats">
									Кошки
								</label>
							</div>
							<div className="form-check form-check-inline mr-4 center-block">
								<input className="form-check-input" type="checkbox" value="" id="little-dogs"/>
								<label className="form-check-label" htmlFor="little-dogs">
									Щенки
								</label>
							</div>
							<div className="form-check form-check-inline mr-4 center-block">
								<input className="form-check-input" type="checkbox" value="" id="little-cats"/>
								<label className="form-check-label" htmlFor="little-cats">
									Котята
								</label>
							</div>
						</div>
					</div>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Отмена
					</Button>
					<Button variant="primary">
						Изменить
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
}

export default EditButton;