import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiInstance } from "../../../config/AxiosInstances";

//get   user by url
export const GetUserByID = createAsyncThunk("user/getUserByID", async (params, { dispatch, getState }) => {
  

    console.log("params", params)
    let result = await apiInstance.get(`get-user/${params}`, params).then(function (response) {
        return response
    }).catch(function (error) {
        return error.response
    })
    const { data, status } = result


    return { data, status }
});

