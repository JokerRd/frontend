import {createStore} from 'redux';
import logo from "../../pages/Authorization/img/logo.png";
import settings from "../../pages/Authorization/img/settings.png";
import post from "../../pages/Authorization/img/post.png";
import photo from "../../pages/Authorization/img/photo.png";

function authorizationContent(state = {
	"logo": logo,
	"title": "Добро пожаловать в Charity Assistant",
	"buttonName": "Войти через ВКонтакте",
	"description": ["Это сервис автоматической публикации благотворительных объявлений.",
		"Мы поможем разместить объявление о вашем питомце за несколько кликов."],
	"schemeItems": {
		"settings": settings,
		"post": post,
		"photo": photo
	},
	"schemeDescriptions": {
		"settingsDescription": "Установить фильтры для групп",
		"postDescription": "Написать пост о питомце",
		"photoDescription": "Загрузить фотографии питомца"
	}
},) {
	return state;
}


const authorizationStore = createStore(authorizationContent);

authorizationStore.subscribe(() => console.log(authorizationStore.getState()));

export default authorizationStore;
