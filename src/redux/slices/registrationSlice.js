import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {uri} from "../../url";
import axios from "axios";

export const confirmInvited = createAsyncThunk("registration/confirmInvited",
    async (guid) => {
        const response = await axios.get(uri + "/invited", {params: {
            guid: guid
            }})
        return response.status;
    })


const initialState = {
    status: "idle",
    error: "",
    guid: ""
}

const registrationSlice = createSlice({
    name: "registration",
    initialState,
    extraReducers: {
        [confirmInvited.fulfilled]: (state, action) => {
            if (action.payload === 200) {
                state.status = 'succeeded';
            }
        },
        [confirmInvited.rejected]: (state, action) => {
                state.status = 'error';
        }
    }
})

export default registrationSlice.reducer