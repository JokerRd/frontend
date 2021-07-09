import React, {useState} from "react"
import {Button, Modal} from 'react-bootstrap'
import '../../../assets/plugins/bootstrap/css/bootstrap.min.css'
import ModalUser from "./ModalUser";
import {useDispatch, useSelector} from "react-redux";
import {show, close} from "../../../redux/slices/administratorSlice";


function NewButton() {
	const isShow = useSelector(state => state.administrator.modalCreate.isShow)
	const dispatch = useDispatch();
	console.log(isShow)
	return (
		<div className="row justify-content-center mb-5">
			<Button variant="outline-success" onClick={() => dispatch(show())}>
				Добавить пользователя
			</Button>
			<ModalUser show={isShow} handleClose={() => dispatch(close())} />
		</div>
	);
}

export default NewButton;