import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiInstance } from "../../config/AxiosInstances";


// add socail api
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
// get social api
export const GetSocialLinks = createAsyncThunk("socials/getSocialLinks", async (params, { dispatch, getState }) => {

    let result = await apiInstance.get(`get-socials`, params).then(function (response) {
        return response
    }).catch(function (error) {
        return error.response
    })
    const { data, status } = result
    console.log("api", result)
    return { data, status }
});
