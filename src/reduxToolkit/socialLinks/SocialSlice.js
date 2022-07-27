import { createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';

const socialSlice = createSlice({
    name: "socials",
    initialState: {
        addSocialLnk: {},
        editSocialLink: {},
        updateSocialLnk: {},
       

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
        "socials/updateSocialLnk/fulfilled": (state, action) => {
            const { data, status } = action.payload || {}
            console.log("from updateSocialLnk slice ", data)
            if (status >= 200 && status < 300) {
                console.log(data)
                toast(data.message)
                state.updateSocialLnk = data?.data
            }
            else if (status >= 400 && status < 500) {
                toast(data.error)
            }
        },
    
        // public 
        "socials/editSocialLink/fulfilled": (state, action) => {
            const { data, status } = action.payload || {}
            console.log("from editSocialLink slice ", data)
            if (status >= 200 && status < 300) {
                console.log(" editSocialLink............ ",data)
                toast(data.message)
                state.editSocialLink = data?.data
            }
            else if (status >= 400 && status < 500) {
                toast(data.error)
            }
        },
    

    },

})

export const { } = socialSlice.actions;

export default socialSlice.reducer;