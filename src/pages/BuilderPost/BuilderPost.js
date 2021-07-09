import FunctionalBlock from "./Components/FunctionalBlock";
import FiltersContent from "./Components/FiltersContent";
import GroupsContent from "./Components/GroupsContent";
import PostContent from "./Components/PostContent";
import GalleryContent from "./Components/GalleryContent";
import ActionButtons from "./Components/ActionButtons";
import Header from '../BuilderPost/Components/Header'
import logo from "../Publications/img/logo.png";
import user from "../Publications/img/user.png";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    getFilters,
    getGroup,
    getPost, getPostStatus,
    getPublications, setPost,
    setPostForUpdate, setPostId,
    setUserId
} from "../../redux/slices/publicationsSlice";
import {getUserId} from "../../redux/slices/userSlice";
import {useParams} from "react-router";


let post = {
    userId: 200714524,
    postId: 0,
    region: "string",
    typeAnimal: "string",
    publicationsGroups: [

    ],
    namePost: "string",
    ageAnimal: "string",
    postingTimeInMs: 86399000,
    publicationDataTime: "2021-05-25T06:43:21.230Z",
    frequencyPublication: "string",
    description: "string",
    imageLinks: [
        "string"
    ],
    isChoosePhotoOfMain: false,
    isRandomOrderMainPhoto: false,
    postStatus: 0
}
const content = {
    header: {
        logo: logo,
        user: user,
        serviceName: "Charity Assistant",
        username: "",
        headerElements: [
            {
                name: "Создать публикацию",
                href: "#"
            },
            {
                name: "Мои публикации",
                href: "#"
            }
        ]
    }};


function BuilderPost(props) {
    const {userId, postId} = useParams();
    const dispatch = useDispatch()
    useEffect(() => {
        (async () => {
            await dispatch(getFilters());
            if (userId !== undefined && postId !== undefined ) {
                let post = await dispatch(getPost({userId: userId, postId: postId}))
                console.log(post)
                dispatch(setPost(post.payload))
                await dispatch(getGroup({animalType: post.payload.typeAnimal, region: post.payload.region}))
                dispatch(setUserId(userId))
                dispatch(setPostId(postId))
                await dispatch(getPostStatus({userId: userId, postId: postId}))
            } else {
                await dispatch(getGroup({animalType: "", region: ""}))
                let id = await dispatch(getUserId());
                console.log(id.payload)
                dispatch(setUserId(id.payload))
            }
        })()
    }, [dispatch, postId, userId])
    const filters = useSelector(state => state.publications.filters)
    const post = useSelector(state => state.publications.post)
    return (
        <div className= "main">
            <Header content={content.header} />
            <FunctionalBlock name = "Фильтры" content = <FiltersContent post = {post} regions = {filters.regions} animals = {filters.animalTypes}/> />
            <FunctionalBlock name = "Группы" content = <GroupsContent post = {post} /> />
            <FunctionalBlock name = "Содержание поста" content = <PostContent post = {post} />/>
            <FunctionalBlock name = "Галлерея" content = {<GalleryContent />} />
            <FunctionalBlock content = {<ActionButtons />} />
        </div>
    );
}



export default BuilderPost;
