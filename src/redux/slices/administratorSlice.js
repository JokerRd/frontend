import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from "axios";
import {uri} from "../../url";

const initialState = {
    users: [],
    status : "idle",
    error: "",
    statusAdd: "idle",
    statusDelete: "idle",
    modalCreate: {
        isShow: false,
        newUser: {
            id: 0,
            name: "",
            email: ""
        }
    },
    modalEdit: {
        isShow: false
    },
    modalDelete: {
        isShow: false
    }
}

function mapStatus(status){
    if (status === "NotRegistered") {
        return "Приглашен"
    } else {
        return "Зарегистрирован"
    }
}

function mapUsers(users) {
    return users.map(user => {
        return {id: user.id, name: user.name, mail: user.email, state: mapStatus(user.registrationStatus)}
    } )
}

export const getUsers = createAsyncThunk("administrator/getUsers",
    async () => {
        const response = await axios.get(uri + "/users/invited/list", {withCredentials: true});
        return response.data;
    })

export const addNewUser = createAsyncThunk("administrator/addNewUsers",
    async (newUser) => {
        const response = await axios.post(uri + "/user/save", newUser, {withCredentials: true});
        return response.statusText;
    })

export const deleteUser = createAsyncThunk("administrator/deleteUser",
    async (idUser) => {
        const response = await axios.delete(uri + "/user", {
            params: {
                id: idUser
            },
            withCredentials: true
        })
        return response.statusText;
    })

const administratorSlice = createSlice({
    name: 'administrator',
    initialState,
    reducers: {
        show: state => { state.modalCreate.isShow = true},
        close: state => {
            state.modalCreate.isShow = false;
            state.modalCreate.newUser = {id: 0, name: "", email: ""}
        },
        showEdit: state => {state.modalEdit.isShow = true},
        closeEdit: state => {
            state.modalEdit.isShow = false;
        },
        showDelete: state => {state.modalDelete.isShow = true},
        closeDelete: state => {
            state.modalDelete.isShow = false
        },
        setNameNewUser: (state, action) => {
            state.modalCreate.newUser.name = action.payload
        },
        setEmailNewUser: (state, action) => {
            state.modalCreate.newUser.email = action.payload
        }
    },
    extraReducers: {
        [getUsers.fulfilled]: (state, action) => {
            state.status = 'succeeded';
            state.users = mapUsers(action.payload);
        },
        [getUsers.rejected]: (state, action) => {
            state.status = "error";
            state.users = [];
        },
        [addNewUser.fulfilled]: (state, action) => {
            state.statusAdd = 'succeeded';
            console.log(action.payload);
            state.modalCreate.isShow = false;
            window.location.reload();
        },
        [addNewUser.rejected]: (state, action) => {
            state.statusAdd = "error";
            console.log(action.payload);
        },
        [deleteUser.fulfilled]: (state, action) => {
            state.statusDelete = "succeeded";
            console.log(action.payload);
            state.modalDelete.isShow = false;
            window.location.reload();
        },
        [deleteUser.rejected]: (state, action) => {
            state.statusDelete = "error";
            console.log(action.payload);
        }
    }
})

export default administratorSlice.reducer
export const { show, close, setNameNewUser, setEmailNewUser,
    closeEdit, showEdit, showDelete, closeDelete} = administratorSlice.actions