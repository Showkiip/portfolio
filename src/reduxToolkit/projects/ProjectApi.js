import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiInstance } from "../../config/AxiosInstances";


// add project api
export const AddProject = createAsyncThunk("projects/createProject", async (params, { dispatch, getState }) => {

    const {
        project_title,
        demo_link,
        description,
        project_name,
        github_link,
        image,
    } = params

    let formData = new FormData()
    formData.append('project_title', project_title)
    formData.append('demo_link', demo_link)
    formData.append('github_link', github_link)
    formData.append('project_name', project_name)
    formData.append('description', description)
    formData.append('image', image)

    let result = await apiInstance.post(`create/recent-project`, formData).then(function (response) {
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
console.log('project >>>>>>>>>>>>>',projectID)
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
        console.log("status >>>>>>>>>>",status)
        if(status === 200){
            params?.navigate('/dashboard/project');
        }


    console.log(result)

    return { data, status }
});

// update project api
export const UpdateProject = createAsyncThunk("projects/updateProject", async (params, { dispatch, getState }) => {

    const {
        project_title,
        demo_link,
        description,
        project_name,
        github_link,
        image,
        projectID,
    } = params

    let formData = new FormData()
    formData.append('project_title', project_title)
    formData.append('demo_link', demo_link)
    formData.append('github_link', github_link)
    formData.append('project_name', project_name)
    formData.append('description', description)
    formData.append('image', image)

    let result = await apiInstance.post(`create/update-project/${projectID}`, formData).then(function (response) {
        return response
    }).catch(function (error) {
        return error.response
    })
    const { data, status } = result


    console.log(result)

    return { data, status }
});