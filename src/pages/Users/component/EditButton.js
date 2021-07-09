import React, {useState} from "react";
import {Button, Modal} from 'react-bootstrap' ;
import '../../../assets/plugins/bootstrap/css/bootstrap.min.css'
import {useDispatch, useSelector} from "react-redux";
import {closeEdit, showEdit} from "../../../redux/slices/administratorSlice";


function EditButton({tableElement}) {
	const isShow = useSelector(state => state.administrator.modalEdit.isShow)
	const dispatch = useDispatch();
	console.log(isShow)
	return (
		<div>
			<Button className="mr-2" variant="primary" onClick={() => dispatch(showEdit())}>
				Редактировать
			</Button>

			<Modal
				show={isShow}
				onHide={() => dispatch(closeEdit())}
				size="lg"
				centered
			>
				<Modal.Header closeButton>
					<Modal.Title>
						Изменение пользователя
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div className="row align-items-center my-3">
						<div className="col-3">
							Почта:
						</div>
						<div className="col">
							<input className="form-control" type="mail" placeholder= {tableElement.mail}
							       aria-label="default input example"/>
						</div>
					</div>

					<div className="row align-items-center my-3">
						<div className="col-3">
							Имя:
						</div>
						<div className="col">
							<input className="form-control" type="text" placeholder= {tableElement.name}
							       aria-label="default input example" />
						</div>
					</div>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={() => dispatch(closeEdit())}>
						Отмена
					</Button>
					<Button variant="primary" >
						Изменить
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
}

export default EditButton;