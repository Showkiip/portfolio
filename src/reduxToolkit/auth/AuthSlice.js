import { createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';

const authSlice = createSlice({
    name: "auth",
    initialState: {
        loginUser: {},
        registerUser: {},
        logoutUser: [],
        userProfile: {},
        updateProfile: {},


    },
    
    reducers: {
        // ChangeLoginUser: (state, action) => {
        //     state.loginUser = action.payload;
        // },
    },
    extraReducers: {
        "auth/loginUser/fulfilled": (state, action) => {
            const { data, status } = action.payload || {}
            console.log("from loginUser slice ", data)
            if (status >= 200 && status < 300) {
                toast(data.message)
                localStorage.setItem('token', data.data.token);
                localStorage.setItem('user', JSON.stringify(data.data.user));
                localStorage.setItem('isAuthenticate', true);

             

                state.loginUser = data?.data
            }
            else if (status >= 400 && status < 500) {
                toast(data.error)
            }
            console.log(state.loginUser)
        },
        "auth/registerUser/fulfilled": (state, action) => {
            const { data, status } = action.payload || {}
            console.log("from registerUser slice ", data)
            if (status >= 200 && status < 300) {
                toast(data.message)
                localStorage.setItem('token', data.data.token);
                localStorage.setItem('user', JSON.stringify(data.data.user));
                localStorage.setItem('isAuthenticate', true);
                state.registerUser = data?.data
            }
            else if (status >= 400 && status < 500) {
                toast(data.error)
            }
        },
        "auth/logoutUser/fulfilled": (state, action) => {
            const { data, status } = action.payload || {}
            console.log("from logoutUser slice ", data)
            if (status >= 200 && status < 300) {
                console.log(data);
                toast(data.message)
                localStorage.removeItem('token');
                localStorage.removeItem('user');
                localStorage.removeItem('isAuthenticate');
                state.logoutUser = data?.data
            }
            else if (status >= 400 && status < 500) {

                toast(data.error)
            }
        },
        "auth/userProfile/fulfilled": (state, action) => {
            const { data, status } = action.payload || {}
            console.log("from userProfile slice ", data)
            if (status >= 200 && status < 300) {
                console.log(data);
                toast(data.message)
                state.userProfile = data?.data
            }
            else if (status >= 400 && status < 500) {
                toast(data.error)
            }
        },
        "auth/updateProfile/fulfilled": (state, action) => {
            const { data, status } = action.payload || {}
            console.log("from updateProfile slice ", data)
            if (status >= 200 && status < 300) {
                console.log(data);
                toast(data.message)
                state.updateProfile = data?.data
            }
            else if (status >= 400 && status < 500) {
                toast(data.error)
            }
        },



    },

})



export const {
    // ChangeLoginUser,
} = authSlice.actions;

export default authSlice.reducer;