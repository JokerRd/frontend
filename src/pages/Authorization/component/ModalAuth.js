import {Button, Modal, Row} from "react-bootstrap";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {authentication, getRedirect} from "../../../redux/slices/modalAuthSlice";
import parseUrl from "../function/parseUrl";

function ModalAuth({show, handleClose, setUrl, getUrl}) {
    const redirect = useSelector(state => state.modalAuth.urlRedirect)
    const url = useSelector(state => state.modalAuth.url)
    const dispatch = useDispatch();
    console.log(redirect)
    return (
        <Modal
            show={show}
            onHide={handleClose}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title>
                    Введите данные аккаунта
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="row align-items-center my-3">
                    <div className="col-3">
                        Введите адресную строку
                    </div>
                    <div className="col">
                        <input className="form-control" type="text"
                               onChange={(event => (setUrl(event.target.value)))}
                               aria-label="default input example"/>
                    </div>
                </div>
                <Row className="justify-content-md-center">
                    <Button variant="primary" onClick={async () => await dispatch(getRedirect())}> Получить URL</Button>
                </Row>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Отмена
                </Button>
                <Button variant="primary" onClick = {async () => await dispatch(authentication(parseUrl(url)))}>
                    Подтвердить
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalAuth;