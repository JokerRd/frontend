import React, {useEffect} from 'react'
import '../../assets/plugins/bootstrap/css/bootstrap.min.css'
import './styles/users.css'
import logo from './img/logo.png'
import user from './img/user.png'


import './component/Header';
import Header from "./component/Header";
import PublicationsTable from "./component/PublicationsTable";
import NewButton from "./component/NewButton";
import {useDispatch, useSelector} from "react-redux";
import {getUsers} from "../../redux/slices/administratorSlice";





const content = {
	header: {
		logo: logo,
		user: user,
		serviceName: "Charity Assistant",
		username: "Евгений Куликов",
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
	tableHeader: ["Пользователь", "Почта", "Статус", "Действия"],
	tableElements: [
		{
			name: "Виталий Анисимов",
			mail: "vitalura@mail.ru",
			state: "Зарегистрирован",
		},
		{
			name: "Дмитрий Каледин",
			mail: "dim_kaledin1974@yandex.ru",
			state: "Приглашен",
		},
		{
			name: "Генадий Алимов",
			mail: "puperpee.12@overgg.ru",
			state: "Зарегистрирован",
		},
		{
			name: "Елизавета Алтынбаева",
			mail: "eluza_babax@icloud.com",
			state: "Зарегистрирован",
		},
		{
			name: "Евгений Пушной",
			mail: "pushhhhhoy@gmail.com",
			state: "Зарегистрирован",
		},
		{
			name: "Галина Попова",
			mail: "galua_popova1954@gmail.com",
			state: "Приглашен",
		},
		{
			name: "Ольга Лосева",
			mail: "olya123@yandex.ru",
			state: "Приглашен",
		},
		{
			name: "Олег Хуторов",
			mail: "hutorr17@mail.com",
			state: "Зарегистрирован",
		},
	]
}

function Users() {
	const users = useSelector(state => state.administrator.users)
	const dispatch = useDispatch()
	console.log(users)
	useEffect(() => {
		(async () => {
			await dispatch(getUsers())
		})()
	}, [dispatch])
	return (
		<div className="container-fluid">
			<Header content={content.header}> </Header>
			<PublicationsTable tableHeader={content.tableHeader} tableElements={users}> </PublicationsTable>
			<NewButton/>
		</div>
	)
}

export default Users;
