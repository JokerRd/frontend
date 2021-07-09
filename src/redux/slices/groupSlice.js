import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from "axios";
import {uri} from "../../url";


const initialState = {
    groups: [],
    status: 'idle',
    error: "",
    modalCreate: {
        isShow: false,
        newGroup: {
            name: "",
            link: "",
            animalTypes: [],
            regions: []
        }
    },
    modalEdit: {
        isShow: false
    },
    modalDelete: {
        isShow: false
    }

}


function mapStringToArray(str) {
    return str.split(" ").join("").split(",");
}

function mapGroups(groups) {
    return groups.map(group => {
        return {
            id: group.id,
            name: group.name,
            animalTypes: parseToString(group.animalTypes),
            regions: parseToString(group.regions),
            link: group.link
        }
    })
}

function parseToString(array) {
    return array.join();
}

export const getGroups = createAsyncThunk("group/getGroups",
    async () => {
        const response = await axios.get(uri + "/groups/list", {withCredentials: true});
        return response.data;
    })

export const addNewGroup = createAsyncThunk("group/addNewGroup",
    async (newGroup) => {
        const response = await axios.post(uri + "/group/save", newGroup, {withCredentials: true});
        return response.statusText;
    })

export const deleteGroup = createAsyncThunk("group/deleteGroup",
    async (idGroup) => {
        const response = await axios.delete(uri + "/group", {
            params: {
                groupId: idGroup
            },
            withCredentials: true
        })
        return response.statusText;
    })

const groupSlice = createSlice({
    name: 'group',
    initialState,
    reducers: {
        showCreate: state => {
            state.modalCreate.isShow = true
        },
        closeCreate: state => {
            state.modalCreate.isShow = false;
            state.modalCreate.newGroup = {
                name: "",
                link: "",
                animalTypes: [],
                regions: []
            }
        },
        showEdit: state => {
            state.modalEdit.isShow = true
        },
        closeEdit: state => {
            state.modalEdit.isShow = false;
        },
        showDelete: state => {
            state.modalDelete.isShow = true
        },
        closeDelete: state => {
            state.modalDelete.isShow = false
        },
        setNameNewGroup: (state, action) => {
            state.modalCreate.newGroup.name = action.payload
        },
        setLinkNewGroup: (state, action) => {
            state.modalCreate.newGroup.link = action.payload
        },
        setAnimalsTypeNewGroup: (state, action) => {
            state.modalCreate.newGroup.animalTypes = mapStringToArray(action.payload);
        },
        setRegionsNewGroup: (state, action) => {
            state.modalCreate.newGroup.regions = mapStringToArray(action.payload);
        }
    },
    extraReducers: {
        [getGroups.fulfilled]: (state, action) => {
            state.status = "succeeded";
            state.groups = mapGroups(action.payload)
        },
        [getGroups.rejected]: (state, action) => {
            state.status = "error";
            console.log("error")
        },
        [addNewGroup.fulfilled]: (state, action) => {
            state.statusAdd = 'succeeded';
            console.log(action.payload);
            state.modalCreate.isShow = false;
            window.location.reload();
        },
        [addNewGroup.rejected]: (state, action) => {
            state.statusAdd = "error";
            console.log(action.payload);
        },
        [deleteGroup.fulfilled]: (state, action) => {
            state.statusDelete = "succeeded";
            console.log(action.payload);
            state.modalDelete.isShow = false;
            window.location.reload();
        },
        [deleteGroup.rejected]: (state, action) => {
            state.statusDelete = "error";
            console.log(action.payload);
        }


    }
})

export default groupSlice.reducer
export const {showCreate, closeCreate, closeEdit, showEdit, showDelete, closeDelete,
    setAnimalsTypeNewGroup, setLinkNewGroup, setNameNewGroup, setRegionsNewGroup} = groupSlice.actions