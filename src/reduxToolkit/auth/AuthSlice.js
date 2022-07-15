import { createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';

const authSlice = createSlice({
    name: "auth",
    initialState: {
    loginUser: {},
    logoutUser:[]


    },
    reducers: {
        ChangeLoginUser: (state, action) => {
            state.loginUser = action.payload;
        },
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
        },
        "auth/logoutUser/fulfilled": (state, action) => {
            const { data, status } = action.payload || {}
            console.log("from logoutUser slice ", data)
            if (status >= 200 && status < 300) {
                console.log(data);
                toast(data.message)
                localStorage.removeItem('token');
                localStorage.removeItem('user');
                localStorage.setItem('isAuthenticate', false);
                state.logoutUser = data?.data
            }
            else if (status >= 400 && status < 500) {

                toast(data.error)
            }
        },



    },

})

export const {
    ChangeLoginUser,
} = authSlice.actions;

export default authSlice.reducer;