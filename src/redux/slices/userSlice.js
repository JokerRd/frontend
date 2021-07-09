import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from "axios";
import {uri} from "../../url";

const initialState = {
    userId: -1,
    statusAuth: "NoAuth"
}

export const getUserId = createAsyncThunk("user/getUserId",
    async () => {
        const response = await axios.get(uri + "/info", {withCredentials: true});
        return response.data;
    })

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

    },
    extraReducers: {
        [getUserId.fulfilled]: (state, action) => {
            console.log(action.payload)
            state.userId = parseInt(action.payload);
            state.statusAuth = "Auth";
            console.log(state.userId)
        },
        [getUserId.rejected]: (state, action) => {
            if (action.status === 403) {
                state.statusAuth = "NoAuth"
            }
            state.statusAuth = "Error"
        }
    }
})

export default userSlice.reducer