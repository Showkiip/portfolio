import { createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';

const userSlice = createSlice({
    name: "auth",
    initialState: {
        getUserByID: {},



    },

    reducers: {
        // ChangeLoginUser: (state, action) => {
        //     state.loginUser = action.payload;
        // },
    },
    extraReducers: {
        "auth/getUserByID/fulfilled": (state, action) => {
            const { data, status } = action.payload || {}
            console.log("from getUserByID slice ", data)
            if (status >= 200 && status < 300) {
                toast(data.message)

                state.getUserByID = data?.data
            }
            else if (status >= 400 && status < 500) {
                toast(data.error)
            }
            console.log(state.loginUser)
        },



    },

})



export const {
    // ChangeLoginUser,
} = userSlice.actions;

export default userSlice.reducer;