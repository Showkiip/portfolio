import { createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';

const projectSlice = createSlice({
    name: "projects",
    initialState: {
        createProject: {},
        getProject: [],
        deleteProject: {},
        editProject: {},
        updateProject: {}

    },
    reducers: {
        clearProjectEdit: (state, action) => {
            state.editProject = {}
        }
    },
    extraReducers: {
        "projects/createProject/fulfilled": (state, action) => {
            const { data, status } = action.payload || {}
            console.log("from createProject slice ", data)
            if (status >= 200 && status < 300) {
                toast(data.message)
                console.log(data)
                state.createProject = data?.data
            }
            else if (status >= 400 && status < 500) {

                toast(data.error)
            }
        },
        "projects/getProject/fulfilled": (state, action) => {
            const { data, status } = action.payload || {}
            console.log("from getProject slice ", data)
            if (status >= 200 && status < 300) {
                // toast(data.message)
                state.getProject = data?.data
            }
            else if (status >= 400 && status < 500) {

                toast(data.error)
            }
        },
        "projects/deleteProject/fulfilled": (state, action) => {
            const { data, status } = action.payload || {}
            console.log("from deleteProject slice ", data)
            if (status >= 200 && status < 300) {
                toast(data.message)
                state.deleteProject = data?.data
            }
            else if (status >= 400 && status < 500) {
                toast(data.error)
            }
        },
        "projects/editProject/fulfilled": (state, action) => {
            const { data, status } = action.payload || {}
            console.log("from editProject slice ", data)
            if (status >= 200 && status < 300) {
                toast(data.message)
                state.editProject = data?.data
            }
            else if (status >= 400 && status < 500) {
                toast(data.error)
            }
        },
        "projects/updateProject/fulfilled": (state, action) => {
            const { data, status } = action.payload || {}
            console.log("from updateProject slice ", data)
            if (status >= 200 && status < 300) {
                toast(data.message)

                state.updateProject = data?.data
            }
            else if (status >= 400 && status < 500) {
                toast(data.error)
            }
        },

    },

})

export const { clearProjectEdit } = projectSlice.actions;

export default projectSlice.reducer;