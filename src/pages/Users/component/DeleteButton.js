import React, {useState} from "react";
import {Button, Modal} from 'react-bootstrap' ;
import '../../../assets/plugins/bootstrap/css/bootstrap.min.css'
import {useDispatch, useSelector} from "react-redux";
import {closeDelete, deleteUser, showDelete} from "../../../redux/slices/administratorSlice";

function DeleteButton({id}) {
	const isShow = useSelector(state => state.administrator.modalDelete.isShow)
	const dispatch = useDispatch();
	console.log(id)
	return (
		<div>
			<Button variant="danger" onClick={()=> dispatch(showDelete())}>
				Удалить
			</Button>

			<Modal
				show={isShow}
				onHide={()=> dispatch(closeDelete())}
				size="lg"
				centered
			>
				<Modal.Header closeButton>
					<Modal.Title>
						Вы действительно хотите удалить этого пользователя?
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					Это действие отменить нельзя, но вы в любой момент сможете пригласить пользователя заново.
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={()=> dispatch(closeDelete())}>
						Отмена
					</Button>
					<Button variant="danger" onClick={() => dispatch(deleteUser(id))}>
						Удалить
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
}

export default DeleteButton;