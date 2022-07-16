import { createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';

const socialSlice = createSlice({
    name: "socials",
    initialState: {
        addSocialLnk: {},
       

    },
    reducers: {},
    extraReducers: {
        "socials/addSocialLnk/fulfilled": (state, action) => {
            const { data, status } = action.payload || {}
            console.log("from addSocialLnk slice ", data)
            if (status >= 200 && status < 300) {
                console.log(data)
                toast(data.message)
                state.addSocialLnk = data?.data
            }
            else if (status >= 400 && status < 500) {
                toast(data.error)
            }
        },
        // "projects/getProject/fulfilled": (state, action) => {
        //     const { data, status } = action.payload || {}
        //     console.log("from getProject slice ", data)
        //     if (status >= 200 && status < 300) {
        //         toast(data.message)
        //         state.getProject = data?.data
        //     }
        //     else if (status >= 400 && status < 500) {

        //         toast(data.error)
        //     }
        // },



    },

})

export const { } = socialSlice.actions;

export default socialSlice.reducer;