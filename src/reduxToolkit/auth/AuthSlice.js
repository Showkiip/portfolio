import { createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';

const authSlice = createSlice({
    name: "auth",
    initialState: {
        loginUser: {},
       

    },
    reducers: {},
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
      


    },

})

export const { } = authSlice.actions;

export default authSlice.reducer;