import React, {useState} from "react";
import {Button, Modal} from 'react-bootstrap' ;
import '../../../assets/plugins/bootstrap/css/bootstrap.min.css'
import {useDispatch, useSelector} from "react-redux";
import {
	addNewGroup,
	closeCreate,
	setAnimalsTypeNewGroup,
	setLinkNewGroup,
	setNameNewGroup, setRegionsNewGroup,
	showCreate
} from "../../../redux/slices/groupSlice";

function NewButton() {
	const isShow = useSelector(state => state.group.modalCreate.isShow);
	const dispatch = useDispatch();
	const newGroup = useSelector(state => state.group.modalCreate.newGroup)
	console.log(newGroup)
	return (
		<div className="row justify-content-center mb-5">
			<Button variant="outline-success" onClick={() => dispatch(showCreate())}>
				Добавить новую группу
			</Button>

			<Modal
				show={isShow}
				onHide={() => dispatch(closeCreate())}
				size="lg"
				centered
			>
				<Modal.Header closeButton>
					<Modal.Title>
						Добавление группы
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div className="row align-items-center my-3">
						<div className="col-3">
							Название группы:
						</div>
						<div className="col">
							<input className="form-control" type="link" placeholder="Название группы"
								   aria-label="default input example"
							onChange={(event)=> dispatch(setNameNewGroup(event.target.value))}/>
						</div>
					</div>

					<div className="row align-items-center my-3">
						<div className="col-3">
							Ссылка на группу:
						</div>
						<div className="col">
							<input className="form-control" type="link" placeholder="Ссылка на группу ВКонтакте"
							       aria-label="default input example"
								   onChange={(event)=> dispatch(setLinkNewGroup(event.target.value))}/>
						</div>
					</div>

					<div className="row align-items-center my-3">
						<div className="col-3">
							Город:
						</div>
						<div className="col">
							<input className="form-control" type="link" placeholder="Города группы"
							       aria-label="default input example"
								   onChange={(event)=> dispatch(setRegionsNewGroup(event.target.value))}/>
						</div>
					</div>

					<div className="row align-items-center my-3">
						<div className="col-3">
							Категории:
						</div>
						<div className="col">
							<input className="form-control" type="link" placeholder="Категории животных группы"
								   aria-label="default input example"
								   onChange={(event)=> dispatch(setAnimalsTypeNewGroup(event.target.value))}/>
						</div>
					</div>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={()=> dispatch(closeCreate())}>
						Отмена
					</Button>
					<Button variant="primary" onClick={() => dispatch(addNewGroup(newGroup))}>
						Добавить
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
}

export default NewButton;