import React, {useState} from "react";
import {Button, Modal} from 'react-bootstrap' ;
import '../../../assets/plugins/bootstrap/css/bootstrap.min.css'
import {useDispatch, useSelector} from "react-redux";
import {closeDelete, deleteGroup, showDelete} from "../../../redux/slices/groupSlice";

function DeleteButton({id}) {
	const isShow = useSelector(state => state.group.modalDelete.isShow)
	const dispatch = useDispatch();
	console.log(id)
	return (
		<div>
			<Button variant="danger" onClick={() => dispatch(showDelete())}>
				Удалить
			</Button>

			<Modal
				show={isShow}
				onHide={() =>dispatch(closeDelete())}
				size="lg"
				centered
			>
				<Modal.Header closeButton>
					<Modal.Title>
						Вы действительно хотите удалить группу?
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					Это действие отменить нельзя, но вы в любой момент сможете добавить группу заново.
				</Modal.Body>
				<Modal.Footer>
					<Button variant="primary" onClick={() => dispatch(closeDelete())}>
						Отмена
					</Button>
					<Button variant="danger" onClick={() => dispatch(deleteGroup(id))}>
						Удалить
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
}

export default DeleteButton;