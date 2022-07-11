import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiInstance } from "../../config/AxiosInstances";

//sign up user
export const Login = createAsyncThunk("auth/loginUser", async (params, { dispatch, getState }) => {

    let result = await apiInstance.post(`sign-in`, params?.data).then(function (response) {
        return response
    }).catch(function (error) {
        return error.response
    })
    const { data, status } = result

    if(status >= 200 && status < 300){
       params?.navigate('/dashboard');
    }
    console.log(result)

    return { data, status }
});