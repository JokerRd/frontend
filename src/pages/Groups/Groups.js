import React, {useEffect, useState} from 'react'
import '../../assets/plugins/bootstrap/css/bootstrap.min.css'
import './styles/groups.css'
import logo from './img/logo.png'
import user from './img/user.png'
import './component/Header';
import Header from "./component/Header";
import PublicationsTable from "./component/PublicationsTable";
import axios from "axios";
import NewButton from "./component/NewButton";
import {useDispatch, useSelector} from "react-redux";
import {getGroups} from "../../redux/slices/groupSlice";

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
				href: "http://localhost:3000/publications"
			}
		]
	},
	tableHeader: ["Название Группы", "Ccылка на группу", "Категории животных", "Город", "Действия"],
	tableElements: [
		{
			name: "Котики Екатеринбург",
			filters: "Кошки, Котята",
			city: "Екатеринбург",
		},
		{
			name: "Собачки ЕКБ",
			filters: "Собаки, Щенки",
			city: "Екатеринбург",
		},
		{
			name: "Котята и щенята ЕКБ",
			filters: "Котята, Щенки",
			city: "Екатеринбург",
		},
		{
			name: "Щенки Челябинск",
			filters: "Щенки",
			city: "Челябинск",
		},
		{
			name: "Животные в добрые руки Екатеринбург",
			filters: "Собаки, Кошки, Щенки, Котята",
			city: "Екатеринбург",
		},
	]
}


function Groups() {
	const groups = useSelector(state => state.group.groups)
	const dispatch = useDispatch()
	console.log(groups)
	useEffect(() => {
		(async () => {
			await dispatch(getGroups())
		})()
	}, [dispatch])
	return (
		<div className="container-fluid">
			<Header content={content.header}> </Header>
			<PublicationsTable tableHeader={content.tableHeader} tableElements={groups}> </PublicationsTable>
			<NewButton/>
		</div>
	)
}

export default Groups;
