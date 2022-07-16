import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiInstance } from "../../config/AxiosInstances";


// add project api
export const AddSocialLnk = createAsyncThunk("socials/addSocialLnk", async (params, { dispatch, getState }) => {

    let result = await apiInstance.post(`create/social-link`, params).then(function (response) {
        return response
    }).catch(function (error) {
        return error.response
    })
    const { data, status } = result
    console.log("api", result)
    return { data, status }
});

// // add project api
// export const GetProject = createAsyncThunk("projects/getProject", async (params, { dispatch, getState }) => {

//     let result = await apiInstance.get(`get-project`, params).then(function (response) {
//         return response
//     }).catch(function (error) {
//         return error.response
//     })
//     const { data, status } = result
//     console.log(result)

//     return { data, status }
// });