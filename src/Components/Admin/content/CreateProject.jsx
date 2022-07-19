import React, { useState } from 'react'
import { Box, Button, Stack, Typography, TextField, Select, FormControl, MenuItem, InputLabel, IconButton } from '@mui/material'

import { styled } from '@mui/material/styles'
import { PhotoCamera, SignalWifiStatusbarNull } from '@mui/icons-material'
import { useDispatch, useSelector } from 'react-redux'
import { AddProject, EditProject, UpdateProject } from '../../../reduxToolkit/projects/ProjectApi'
import { useRef } from 'react'
import { useEffect } from 'react'

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
      <Typography variant="h4">
        {editProject?.id ? 'Edit Project' : "Create Project"}
      </Typography>
      <Stack gap="30px" direction="row">
        <Box sx={{ minWidth: 200 }}>
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
        <Box>
          <TextField
            label="Project Name"
            type="text"
            placeholder='Enter Project Name Here'
            focused
            value={projectName}
            onChange={(e) => { setProjectName(e.target.value) }}
          />
        </Box>
        <Box>
          <TextField
            label="demo_link"
            type="text"
            placeholder='Enter demo_link'
            focused
            value={demoLink}
            onChange={(e) => { setDemoLink(e.target.value) }}
          />
        </Box>
      </Stack>
      <Stack gap="30px" direction="row">
        <Box>
          <TextField
            label="github_link"
            type="text"
            placeholder='Enter github link here'
            focused
            value={githubLink}
            onChange={(e) => { setGithubLink(e.target.value) }}
          />
        </Box>
        <Box>
          <TextField
            label="Description"
            type="text"
            placeholder='Enter Project Description Here'
            focused
            value={description}
            onChange={(e) => { setDescription(e.target.value) }}
          />
        </Box>
        <Box>
          <Stack direction="row" alignItems="center" spacing={2}>
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
              <Button variant="contained" component="span">
                Upload
              </Button>
            </label>
            <Typography>
              {image ? image.name : 'No file selected'}
            </Typography>
          </Stack>
        </Box>
      </Stack>
      <Button variant="contained" color="primary" onClick={() => handleProject()}>
        {editProject?.id ? "Update" : "Create"}
      </Button>
    </Stack>

  )
}

export default CreateProject