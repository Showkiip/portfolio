import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiInstance } from "../../config/AxiosInstances";


// add project api
export const AddProject = createAsyncThunk("projects/createProject", async (params, { dispatch, getState }) => {

    console.log("params", params)
    let result = await apiInstance.post(`create/recent-project`, params).then(function (response) {
        return response
    }).catch(function (error) {
        return error.response
    })
    const { data, status } = result


    console.log(result)

    return { data, status }
});

// get project api
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
// delete project api
export const DeleteProject = createAsyncThunk("projects/deleteProject", async (params, { dispatch, getState }) => {

    const { projectID } = params
    console.log('project >>>>>>>>>>>>>', projectID)
    let result = await apiInstance.delete(`delete-project/${projectID}`, params).then(function (response) {
        return response
    }).catch(function (error) {
        return error.response
    })
    const { data, status } = result
    console.log(result)

    return { data, status }
});

// edit project api
export const EditProject = createAsyncThunk("projects/editProject", async (params, { dispatch, getState }) => {
    const { projectID } = params.data
    let result = await apiInstance.get(`edit-project/${projectID}`, params).then(function (response) {
        return response
    }).catch(function (error) {
        return error.response
    })
    const { data, status } = result
    console.log("edit project id >>>>>>>>>>", data)
    if (status === 200) {
        params?.navigate(`/dashboard/${data?.id}/project`);
    }
    console.log(result)

    return { data, status }
});

// update project api
export const UpdateProject = createAsyncThunk("projects/updateProject", async (params, { dispatch, getState }) => {

    let projectID = params?.projectID;

    console.log('projectIDasdasdasd >>>>>>>>>>>>>', projectID)
    let result = await apiInstance.post(`update-project/${projectID}`, params?.formData).then(function (response) {
        return response
    }).catch(function (error) {
        return error.response
    })
    const { data, status } = result
    console.log(result)

    return { data, status }
});