import React, {useState} from 'react';
import './styles/authorization.css'
import '../../assets/plugins/bootstrap/css/bootstrap.min.css';
import Button from "./component/Button";
import SchemeDescriptions from "./component/schemeDescriptions";
import SchemeItems from "./component/SchemeItems";
import Description from "./component/Description";
import Title from "./component/Title";
import Logo from "./component/Logo";
import logo from "../Registration/img/logo.png";
import settings from "../Registration/img/settings.png";
import post from "../Registration/img/post.png";
import photo from "../Registration/img/photo.png";
import './styles/authorization.css'
import ModalAuth from "./component/ModalAuth";
import {useDispatch, useSelector} from "react-redux";
import {close, show, setUrl} from '../../redux/slices/modalAuthSlice'
import parseUrl from "./function/parseUrl";

function Authorization() {
	const content = {
		logo: logo,
		title: "Добро пожаловать в Charity Assistant",
		buttonName: "Войти с помощью ВКонтакте",
		description: ["Это сервис автоматической публикации благотворительных объявлений",
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
	console.log(document);
	window.addEventListener("message", function(event) {
		console.log(event.data)
	});
	window.onbeforeunload = (ev) => {
		console.log(ev.target.url)
		return true;
	};
	const isShow = useSelector(state => state.modalAuth.isShow)
	const url = useSelector(state => state.modalAuth.url)
	const redirect = useSelector(state => state.modalAuth.urlRedirect)
	const dispatch = useDispatch();
	const setUrlForAuth = (ev) => dispatch(setUrl(ev))
	console.log()
	return (
		<div className="container-fluid">
			<div className="row justify-content-center align-items-start">
				<div className="col-8 py-5 justify-content-center">
					<ModalAuth show={isShow} handleClose={() => dispatch(close())} setUrl={ setUrlForAuth} />
					<Logo logo={content.logo}> </Logo>
					<Title title={content.title}> </Title>
					<Description description={content.description}> </Description>
					<SchemeItems schemeItems={content.schemeItems}> </SchemeItems>
					<SchemeDescriptions schemeDescriptions={content.schemeDescriptions}> </SchemeDescriptions>
					<Button onClick = {() => {
						dispatch(show());
						console.log(url)
					}} buttonName={content.buttonName}> </Button>
				</div>
			</div>
		</div>
	);
}

export default Authorization;
