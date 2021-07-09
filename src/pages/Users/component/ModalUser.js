import {Button, Modal} from "react-bootstrap";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {setNameNewUser, setEmailNewUser, addNewUser} from "../../../redux/slices/administratorSlice";

function ModalUser( {show, handleClose}) {
    const dispatch = useDispatch();
    const user = useSelector(state => state.administrator.modalCreate.newUser)
    return (
        <Modal
            show={show}
            onHide={handleClose}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title>
                    Пригласить нового пользователя
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="row align-items-center my-3">
                    <div className="col-3">
                        Почта:
                    </div>
                    <div className="col">
                        <input className="form-control" type="mail" placeholder="example@email.com"
                               aria-label="default input example"
                               onChange={(event => dispatch(setEmailNewUser(event.target.value)))}/>
                    </div>
                </div>

                <div className="row align-items-center my-3">
                    <div className="col-3">
                        Имя:
                    </div>
                    <div className="col">
                        <input className="form-control" type="text" placeholder="Имя пользователя"
                               aria-label="default input example"
                               onChange={(event => dispatch(setNameNewUser(event.target.value)))}/>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Отмена
                </Button>
                <Button variant="primary" onClick={() => {
                    if (user.name !== "" && user.email !== "") {
                        dispatch(addNewUser(user));
                    }
                }}>
                    Пригласить
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalUser;