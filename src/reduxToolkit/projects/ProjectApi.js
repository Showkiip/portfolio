import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiInstance } from "../../config/AxiosInstances";


// add project api
export const AddProject = createAsyncThunk("projects/createProject", async (params, { dispatch, getState }) => {
  
    let result = await apiInstance.post(`create/recent-project`, params).then(function (response) {
        return response
    }).catch(function (error) {
        return error.response
    })
    const { data, status } = result


    console.log(result)

    return { data, status }
});

// add project api
export const GetProject = createAsyncThunk("projects/getProject", async (params, { dispatch, getState }) => {
  
    let result = await apiInstance.get(`get-project`, params).then(function (response) {
        return response
    }).catch(function (error) {
        return error.response
    })
    const { data, status } = result


    console.log(result)

    return { data, status }
});