import { configureStore } from '@reduxjs/toolkit'
import modalAuthReducer from '../slices/modalAuthSlice'
import registrationReducer from '../slices/registrationSlice'
import administratorReducer from "../slices/administratorSlice";
import groupReducer from "../slices/groupSlice";
import userReducer from "../slices/userSlice";
import publicationsReducer from "../slices/publicationsSlice";

export default configureStore({
    reducer: {
        modalAuth: modalAuthReducer,
        registration: registrationReducer,
        administrator: administratorReducer,
        group: groupReducer,
        user: userReducer,
        publications: publicationsReducer
    },
})