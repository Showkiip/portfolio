import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiInstance } from "../../config/AxiosInstances";

//Login  user
export const Login = createAsyncThunk("auth/loginUser", async (params, { dispatch, getState }) => {

    let result = await apiInstance.post(`sign-in`, params?.data).then(function (response) {
        return response
    }).catch(function (error) {
        return error.response
    })
    const { data, status } = result

    if (status >= 200 && status < 300) {
        params?.navigate('/dashboard');
    }
    console.log(result)

    return { data, status }
});
//Logout  user
export const Logout= createAsyncThunk("auth/logoutUser", async (params, { dispatch, getState }) => {

    let result = await apiInstance.get(`logout`,params).then(function (response) {
        return response
    }).catch(function (error) {
        return error.response
    })
    const { data, status } = result
    if (status >= 200 && status < 300) {
        params?.navigate('/');
    }
    console.log(result)

    return { data, status }
});
