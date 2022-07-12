import { createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';

const projectSlice = createSlice({
    name: "projects",
    initialState: {
        createProject: {},
        getProject: []

    },
    reducers: {},
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
                toast(data.message)
              console.log(data)
                state.getProject = data?.data
            }
            else if (status >= 400 && status < 500) {

                toast(data.error)
            }
        },



    },

})

export const { } = projectSlice.actions;

export default projectSlice.reducer;