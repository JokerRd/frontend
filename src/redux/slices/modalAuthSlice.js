import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {uri} from "../../url";
import axios from "axios";

const initialState = {
    isShow: false,
    urlRedirect: "",
    url: "",
    status : "idle",
    error: ""
}
export const getRedirect = createAsyncThunk("modalAuth/getRedirect",
    async () => {
        const response = await axios.get(uri + "/registration/oauth", {
            withCredentials: true}
        )
        return response.data;
    })

export const authentication = createAsyncThunk("modalAuth/authentication",
    async (url) => {
        const response = await axios.get(uri + "/authentication/vk",
            {params: {access_token: url.accessToken, user_id: url.userId}, withCredentials: true});
        return response.status;
    })

const modalAuthSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        show: state => { state.isShow = true},
        close: state => {
            state.isShow = false
            state.url = ""
        },
        setUrl: (state, action) => {state.url = action.payload}
    },
    extraReducers: {
        [getRedirect.pending]: (state, action) => {
            state.status = 'loading'
        },
        [getRedirect.fulfilled]: (state, action) => {
            state.status = 'succeeded';
            let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
                width=0,height=0,left=-1000,top=-1000`;
            window.open(action.payload, "test", params);
            state.urlRedirect = action.payload;
        },
        [getRedirect.rejected]: (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        },
        [authentication.fulfilled]: (state, action) => {
            if (action.payload === 200) {
                window.location.href = "/publications"
            }
        }
    }
})

export const { show, close, setUrl} = modalAuthSlice.actions

export default modalAuthSlice.reducer