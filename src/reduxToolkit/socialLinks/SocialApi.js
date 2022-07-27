import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiInstance } from "../../config/AxiosInstances";


// add socail api
export const AddSocialLink = createAsyncThunk("socials/addSocialLnk", async (params, { dispatch, getState }) => {

    let result = await apiInstance.post(`create/social-link`, params).then(function (response) {
        return response
    }).catch(function (error) {
        return error.response
    })
    const { data, status } = result
    console.log("api", result)
    return { data, status }
});
// update socail api
export const UpdateSocialLink = createAsyncThunk("socials/updateSocialLnk", async (params, { dispatch, getState }) => {

    let result = await apiInstance.post(`update/social-link`, params).then(function (response) {
        return response
    }).catch(function (error) {
        return error.response
    })
    const { data, status } = result
    console.log("api", result)
    return { data, status }
});
// get social api
export const EditSocialLink = createAsyncThunk("socials/editSocialLink", async (params, { dispatch, getState }) => {

    let result = await apiInstance.get(`get-socials`, params).then(function (response) {
        return response
    }).catch(function (error) {
        return error.response
    })
    const { data, status } = result
    console.log("api", result)
    return { data, status }
});
