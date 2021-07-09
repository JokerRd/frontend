import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from "axios";
import {uri} from "../../url";

const initialState = {
    publications: [],
    status: "idle",
    error: "",
    filters: {
        animalTypes: [],
        regions: []
    },
    groups: [],
    paramsAnimal: "",
    paramsRegion: "",
    publicationDataTime: "",
    publicationInterval: "string",
    statusPost: "",
    userId: -1,
    postId: -1,
    post: {
        userId: -1,
        region: "",
        typeAnimal: "",
        namePost: "",
        ageAnimal: "",
        publicationGroups: [],
        description: "",
    },
    postForUpdate: {
        userId: -1,
        postId: -1,
        region: "",
        typeAnimal: "",
        namePost: "",
        ageAnimal: "",
        publicationGroups: [],
        description: "",
    }
}

function mapGroup(groups) {
    return groups.map(group => {
        return {
            nameGroup: group.name,
            id: group.id,
            publicationDataTime: new Date().toString(),
            publicationInterval: "0 * * * *"
        }
    })
}

function mapPublicGroup(groups,publicationDataTime, publicationInterval) {
    let arr = [];
    for (let group of groups.values()) {
        if (group.checked) {
            arr.push({
                id: group.id,
                nameGroup: group.nameGroup,
                publicationDataTime: publicationDataTime,
                publicationInterval: publicationInterval
            })
        }
    }
    return arr;
}



function mapStatus(status) {
    if (status === "Draft")
        return "Черновик";
    if (status === "OnPublications")
        return "На публикации";
    if (status === "Stopped")
        return "Остановлено"
    return status;
}

function mapPublications(publications) {
    return publications.map(publication => {
        return {
            id: publication.postId,
            name: publication.namePost,
            description: publication.description,
            status: mapStatus(publication.postStatus)
        }
    })
}

export const getPublications = createAsyncThunk("publications/getPublications",
    async (userId) => {
        const response = await axios.get(uri + "/posts/list", {
            params: {
                userId: userId
            },
            withCredentials: true
        })
        return response.data
    })

export const getPost = createAsyncThunk("publications/getPost",
    async (data) => {
        const response = await axios.get(uri + "/post", {
            params: {
                userId: data.userId,
                postId: data.postId
            },
            withCredentials: true
        })
        return response.data
    })

export const getFilters = createAsyncThunk("publications/getFilters",
    async () => {
        const response = await axios.get(uri + "/groups/filters", {
            withCredentials: true
        })
        return response.data
    })

export const getGroup = createAsyncThunk("publications/getGroup",
    async (params) => {
        const newParams = {}
        if (params.animalType !== "" && params.animalType !== "Нет") {
            newParams.animalType = params.animalType;
        }
        if (params.region !== "" && params.region !== "Нет") {
            newParams.region = params.region;
        }
        const response = await axios.get(uri + "/groups/list", {
            params: newParams,
            withCredentials: true
        })
        return response.data
    })

export const savePost = createAsyncThunk("publications/savePost",
    async (post) => {
        const response = await axios.post(uri + "/post/save", post, {
            withCredentials: true,
        })
        return response.data
    })

export const updatePost = createAsyncThunk("publications/updatePost",
    async (post) => {
        const response = await axios.post(uri + "/post/update", post, {
            withCredentials: true,
        })
        return response.data
    })

export const startPublication = createAsyncThunk("publications/startPublication",
    async (data) => {
        const response = await axios.get(uri + "/publication/start", {
            params: {
                userId: data.userId,
                postId: data.postId
            },
            withCredentials: true,
        })
        return response.statusText
    })

export const stopPublication = createAsyncThunk("publications/stopPublication",
    async (data) => {
        const response = await axios.get(uri + "/publication/stop", {
            params: {
                userId: data.userId,
                postId: data.postId
            },
            withCredentials: true,
        })
        return response.statusText
    })

export const saveAndStartPublication = createAsyncThunk("publications/saveAndStartPublication",
    async (post) => {
        const responseData = await axios.post(uri + "/post/save", post, {
            withCredentials: true,
        })
        const response = await axios.get(uri + "/publication/start", {
            params: {
                userId: responseData.data.userId,
                postId: responseData.data.postId
            },
            withCredentials: true,
        })
        return response.statusText
    })

export const updateAndStartPublication = createAsyncThunk("publications/updateAndStartPublication",
    async (post) => {
        const responseData = await axios.post(uri + "/post/update", post, {
            withCredentials: true,
        })
        const response = await axios.get(uri + "/publication/start", {
            params: {
                userId: responseData.data.userId,
                postId: responseData.data.postId
            },
            withCredentials: true,
        })
        return response.statusText
    })

export const getPostStatus = createAsyncThunk("publications/getPostStatus",
    async (data) => {
        const response = await axios.get(uri + "/post/status", {
            params: {
                userId: data.userId,
                postId: data.postId
            },
            withCredentials: true,
        })
        return response.data
    })

const publicationsSlice = createSlice({
    name: 'publications',
    initialState,
    reducers: {
        setParamsAnimal: (state, action) => {
            state.paramsAnimal = action.payload;
            state.post.typeAnimal = action.payload;
        },
        setParamsRegion: (state, action) => {
            state.paramsRegion = action.payload;
            state.post.region = action.payload;
        },
        setUserId: (state, action) => {
            state.userId = parseInt(action.payload);
            state.post.userId = parseInt(action.payload);
        },
        setAgeAnimal: (state, action) => {
            state.post.ageAnimal = action.payload;
        },
        setNamePost: (state, action) => {
            state.post.namePost = action.payload;
        },
        setDescription: (state, action) => {
            state.post.description = action.payload;
        },
        setDataTime: (state, action) => {
            state.publicationDataTime = action.payload;
        },
        setInterval: (state, action) => {
            state.publicationInterval = action.payload;
        },
        setPublicationsGroups: (state, action) => {
            console.log(action.payload)
            if (action.payload.checked) {
                let newArray = [...state.post.publicationGroups]
                newArray.push(action.payload.group)
                state.post.publicationGroups = newArray
            }else {
                let newArray = [...state.post.publicationGroups]
                let index = -1;
                for (let i = 0; i < newArray.length; i++) {
                    if (newArray[i].nameGroup === action.payload.group.nameGroup) {
                        index = i;
                        break
                    }
                }
                console.log(newArray)
                console.log(index)
                newArray.splice(index, 1);
                console.log(newArray)
                state.post.publicationGroups = newArray
            }
        },
        setPostForUpdate: (state, action) => {
            state.postForUpdate = action.payload;
        },
        setPost: (state, action) => {
            state.post = action.payload;
        },
        setPostId: (state, action) => {
            state.postId = action.payload
        },
        updateGroups: (state, action) => {
            if (state.post.publicationGroups.length > 0) {
                let newArray = [...state.groups]
            }
        }
    },
    extraReducers: {
        [getPublications.fulfilled]: (state, action) => {
            state.publications = mapPublications(action.payload)
        },
        [getPublications.rejected]: (state, action) => {
            state.status = "error"
        },
        [getFilters.fulfilled]: (state, action) => {
            state.filters.animalTypes = action.payload.animals;
            state.filters.regions = action.payload.regions;
        },
        [getFilters.rejected]: (state, action) => {
            state.status = "error"
        },
        [getGroup.fulfilled]: (state, action) => {
            state.groups = mapGroup(action.payload);
            console.log(state.groups);
        },
        [getGroup.rejected]: (state, action) => {
            state.status = "error"
        },
        [savePost.fulfilled]: (state, action) => {
            console.log(action.payload);
            window.location = "/builderPost/" + action.payload.userId + "/" + action.payload.postId
        },
        [savePost.rejected]: (state, action) => {
            state.status = "error"
            console.log(action.payload);
        },
        [getPost.fulfilled]: (state, action) => {
            state.postForUpdate = action.payload;
            console.log(action.payload);
        },
        [getPost.rejected]: (state, action) => {
            state.status = "error"
        },
        [getPostStatus.fulfilled]: (state, action) => {
            state.statusPost = action.payload;
            console.log(action.payload);
        },
        [getPostStatus.rejected]: (state, action) => {
            state.status = "error"
        },
        [stopPublication.fulfilled]: (state, action) => {
            console.log(action.payload)
            window.location.reload();
        },
        [stopPublication.rejected]: (state, action) => {
            state.status = "error"
        },
        [startPublication.fulfilled]: (state, action) => {
            console.log(action.payload)
            window.location = "/publications";
        },
        [startPublication.rejected]: (state, action) => {
            state.status = "error"
        },
        [saveAndStartPublication.fulfilled]: (state, action) => {
            console.log(action.payload)
            window.location = "/publications";
        },
        [saveAndStartPublication.rejected]: (state, action) => {
            state.status = "error"
        },
    }
})

export default publicationsSlice.reducer

export const {
    setParamsAnimal, setParamsRegion, setAgeAnimal,
    setDescription, setNamePost, setUserId,
    setPublicationsGroups, setDataTime, setInterval, setPostForUpdate, setPost, setPostId
} = publicationsSlice.actions