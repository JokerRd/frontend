import React from 'react';
import '../Authorization/styles/authorization.css'
import '../../assets/plugins/bootstrap/css/bootstrap.min.css';
import logo from './img/logo.png'
import photo from './img/photo.png'
import post from './img/post.png'
import settings from './img/settings.png'
import Button from "./component/Button";
import SchemeDescriptions from "./component/schemeDescriptions";
import SchemeItems from "./component/SchemeItems";
import Description from "./component/Description";
import Title from "./component/Title";
import Logo from "./component/Logo";
import {useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {confirmInvited} from "../../redux/slices/registrationSlice";
import { Planets } from 'react-preloaders';
import ReactLoading from 'react-loading';
import {Col, Container, Row} from "react-bootstrap";
import {Preloader} from "../../utils/Preloader";
import ModalAuth from "../Authorization/component/ModalAuth";
import {close, show} from "../../redux/slices/modalAuthSlice";

const content = {
    logo: logo,
    title: "Добро пожаловать в Charity Assistant",
    buttonName: "Зарегистрироваться с помощью ВКонтакте",
    description: ["Это сервис автоматической публикации благотворительных объявлений.",
        "Мы поможем разместить объявление о вашем питомце за несколько кликов."],
    schemeItems: {
        settings: settings,
        post: post,
        photo: photo
    },
    schemeDescriptions: {
        settingsDescription: "Установить фильтры для групп",
        postDescription: "Написать пост о питомце",
        photoDescription: "Загрузить фотографии питомца"
    }
}



const RegistrationView = () => {
    return(
        <div className="container-fluid">
            <div className="row justify-content-center align-items-start">
                <div className="col-8 py-5 justify-content-center">
                    <Logo logo={content.logo}> </Logo>
                    <Title title={content.title}> </Title>
                    <Description description={content.description}> </Description>
                    <SchemeItems schemeItems={content.schemeItems}> </SchemeItems>
                    <SchemeDescriptions schemeDescriptions={content.schemeDescriptions}> </SchemeDescriptions>
                    <Button buttonName={content.buttonName}> </Button>
                </div>
            </div>
        </div>
    )
}


function Registration() {
    let { guid } = useParams();
    const status = useSelector(state => state.registration.status)
    const dispatch = useDispatch();
    dispatch(confirmInvited(guid));
    /*if (status === "succeeded") {

    }*/
    let view = status === "succeeded" ? <RegistrationView />: <Preloader />
    console.log(status)
    return (
        <>
            {view}
        </>
    );
}

export default Registration;
