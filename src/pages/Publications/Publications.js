import React from 'react'
import '../../assets/plugins/bootstrap/css/bootstrap.min.css'
import './styles/publications.css'
import gav from './img/Гав.jpg'
import demon from './img/Демон.jpg'
import cupcake from './img/Кекс.jpg'
import mint from './img/Мята.jpg'
import pups from './img/Пупс.jpg'
import logo from './img/logo.png'
import user from './img/user.png'
import './component/Header';
import Header from "./component/Header";
import PublicationsTable from "./component/PublicationsTable";
import {useEffect, useState} from "react";
import {Spinner} from "react-bootstrap";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {getUsers} from "../../redux/slices/administratorSlice";
import {getUserId} from "../../redux/slices/userSlice";
import {getPublications} from "../../redux/slices/publicationsSlice";

function createItems(array) {
	let newArray = [];
	for (let i = 0; i < array.length; i++) {
		newArray.push({
			name: array[i].namePost,
			description: array[i].description,
			date: array[i].publicationDataTime,
			status: renamePost(array[i].postStatus),
			image: cupcake
		})
	}
	return newArray
}

function renamePost(str) {
	if (str === "Draft")
		return "Черновик";
	if (str === "OnPublications")
		return "На публикации";
	if (str === "Stopped")
		return "Остановлено"
	return str;
}

const content = {
	header: {
		logo: logo,
		user: user,
		serviceName: "Charity Assistant",
		username: "",
		headerElements: [
			{
				name: "Группы",
				href: "#"
			},
			{
				name: "Пользователи",
				href: "#"
			},
			{
				name: "Создать публикацию",
				href: "#"
			},
			{
				name: "Мои публикации",
				href: "#"
			}
		]
	},
	tableHeader: ["Объявление", "Название поста", "Статус публикации", "Действия"],
	tableElements: [
		{
			name: "Кот Кекс",
			description: "Рыжий, добрый",
			date: "11.05.2001",
			status: "Остановлен",
			image: cupcake
		},
		{
			name: "Пёс Демон",
			description: "Ласковый, черный лабрадор",
			date: "12.05.2001",
			status: "Активен",
			image: demon
		},
		{
			name: "Котенок Гав",
			description: "Породистый, мальчик",
			date: "14.05.2001",
			status: "Остановлен",
			image: gav
		},
		{
			name: "Кошечка Мята",
			description: "Грациозная, пепельно-белая",
			date: "15.05.2001",
			status: "Активен",
			image: mint
		},
		{
			name: "Щенок Пупс",
			description: "Игривый, пёстрый",
			date: "16.05.2001",
			status: "Активен",
			image: pups
		},
	]
}


function Publications() {
	const id = useSelector(state => state.user.userId)
	const publications  = useSelector(state => state.publications.publications)
	const dispatch = useDispatch()
	console.log(publications)
	useEffect(() => {
		(async () => {
			await dispatch(getUserId());
			if (id !== -1) {
				await dispatch(getPublications(id))
			}
		})()
	}, [dispatch, id])

	return (
		<div className="container-fluid">
			<Header content={content.header}> </Header>
			<PublicationsTable tableHeader={content.tableHeader}
							   tableElements={publications}> </PublicationsTable>
		</div>
	)
}

export default Publications;
