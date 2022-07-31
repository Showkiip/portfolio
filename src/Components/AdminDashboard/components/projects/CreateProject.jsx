import React, { useState } from 'react'
import { Box, Button, Stack, Typography, TextField, Select, FormControl, MenuItem, InputLabel, IconButton, Card, CardContent } from '@mui/material'

import { styled } from '@mui/material/styles'
import { PhotoCamera, SignalWifiStatusbarNull } from '@mui/icons-material'
import { useDispatch, useSelector } from 'react-redux'
// import { AddProject, EditProject, UpdateProject } from '../../../reduxToolkit/projects/ProjectApi'
import { useRef } from 'react'
import { useEffect } from 'react'
import { AddProject, UpdateProject } from '../../../../reduxToolkit/projects/ProjectApi'

const CreateProject = () => {
    const [projectTitle, setProjectTitle] = React.useState('')
    const [demoLink, setDemoLink] = useState('')
    const [githubLink, setGithubLink] = useState('')
    const [projectName, setProjectName] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('')

    const dispatch = useDispatch()

    // get single data of project when click on edit button
    const { editProject } = useSelector(state => state.projects);

    const Input = styled('input')({
        display: 'none',
    })

    const handleChange = (event) => {
        setProjectTitle(event.target.value)
    }

    const handleProject = async () => {

        let formData = new FormData()
        formData.append('project_title', projectTitle)
        formData.append('demo_link', demoLink)
        formData.append('github_link', githubLink)
        formData.append('project_name', projectName)
        formData.append('description', description)
        formData.append('image', image)
        console.log(formData)

        if (editProject?.id) {
            const editID = {
                id: editProject?.id
            }
            let projectID = editID?.id;
            dispatch(UpdateProject({ formData, projectID }))
        }
        else {
            dispatch(AddProject(formData))
        }

    }

    // for edit
    useEffect(() => {
        if (editProject?.id) {

            setProjectTitle(editProject.project_title)
            setDemoLink(editProject.demo_link)
            setProjectName(editProject.project_name)
            setDescription(editProject.description)
            setGithubLink(editProject.github_link)
            setImage(editProject.image)
        }
        else {
            setProjectTitle('')
            setDemoLink('')
            setProjectName('')
            setDescription('')
            setGithubLink('')
            setGithubLink('')
            setImage([])
        }

    }, [editProject?.id])


    return (

        <Card sx={{
            width: '100%',
            maxWidth: '800px',
            margin: 'auto',
            marginTop: '20px',
            marginBottom: '20px',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
            backgroundColor: '#fff',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
            border: '1px solid #e0e0e0',

        }}>
            <CardContent  >
                <Stack alignItems="center"
                    justifyContent="center" gap="30px" position="relative">
                    <Box
                        sx={{
                            color: "red",
                            position: 'absolute',
                            top: '-20px',
                            right: '0',
                            cursor: 'pointer',
                            fontWeight: 'bold',
                        }} >
                    </Box>
                    <Typography
                        variant="h4"
                        sx={{
                            fontWeight: 'bold',
                            color: '#ffc107',
                            textAlign: 'center',
                            marginBottom: '20px',
                        }}>

                        {editProject?.id ? 'Edit Project' : "Create Project"}
                    </Typography>
                    <Stack gap="30px" direction="row">
                        <Box sx={{ minWidth: 300 }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Project Title</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    focused
                                    id="demo-simple-select"
                                    value={projectTitle}
                                    label="Project Title"
                                    onChange={handleChange}
                                >
                                    <MenuItem value={10}>Laravel</MenuItem>
                                    <MenuItem value={20}>React Js</MenuItem>
                                    <MenuItem value={30}>Both</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                        <Box sx={{ minWidth: 300 }}>
                            <TextField
                                label="Project Name"
                                type="text"
                                placeholder='Enter Project Name Here'
                                focused
                                value={projectName}
                                onChange={(e) => { setProjectName(e.target.value) }}
                            />
                        </Box>

                    </Stack>
                    <Stack gap="30px" direction="row">
                        <Box sx={{ minWidth: 300 }}>
                            <TextField
                                label="demo_link"
                                type="text"
                                placeholder='Enter demo_link'
                                focused
                                value={demoLink}
                                onChange={(e) => { setDemoLink(e.target.value) }}
                            />
                        </Box>
                        <Box sx={{ minWidth: 300 }}>
                            <TextField
                                label="github_link"
                                type="text"
                                placeholder='Enter github link here'
                                focused
                                value={githubLink}
                                onChange={(e) => { setGithubLink(e.target.value) }}
                            />
                        </Box>
                    </Stack>
                    <Stack gap="30px" direction="row">
                        <Box sx={{ minWidth: 300 }}>
                            <TextField
                                label="Description"
                                type="text"
                                placeholder='Enter Project Description Here'
                                focused
                                value={description}
                                onChange={(e) => { setDescription(e.target.value) }}
                            />
                        </Box>
                        <Box sx={{ minWidth: 300 }}>
                            <Stack direction="row" alignItems="center" >
                                <label htmlFor="contained-button-file">
                                    <Input
                                        accept="image/*"
                                        id="contained-button-file"
                                        type="file"
                                        onChange={(e) => {
                                            console.log("e.target.files[0]===>", e.target.files[0])
                                            setImage(e.target.files[0])
                                        }}
                                    />
                                    <Button variant="contained" component="span"
                                        color="primary"  >
                                        Upload Image
                                    </Button>
                                </label>
                                <Box>
                                    <img src={image} alt="image" style={{ width: '100%' }} />
                                </Box>
                            </Stack>
                        </Box>
                    </Stack>
                    <Stack gap="30px" direction="row">
                        <Box sx={{ minWidth: 300 }}>
                            <Button variant="contained" component="span"
                                color="primary"
                                // startIcon={<CloudUploadIcon />}
                                style={{
                                    backgroundColor: '#ffc107',
                                    borderRadius: '10px',
                                    color: '#fff',
                                    fontWeight: 'bold',
                                    padding: '10px',
                                    marginLeft: '10px',
                                    marginTop: '10px',
                                    marginBottom: '10px',
                                    border: '1px solid #ffc107',
                                    cursor: 'pointer',
                                }}
                                onClick={handleProject}>
                                {editProject?.id ? 'Update Project' : "Create Project"}
                            </Button>
                        </Box>
                    </Stack>
                </Stack>
            </CardContent>
        </Card>
    )
}

export default CreateProject

