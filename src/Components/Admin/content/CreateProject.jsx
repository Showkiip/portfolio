import React, { useState } from 'react'
import { Box, Button, Stack, Typography, TextField, Select, FormControl, MenuItem, InputLabel, IconButton } from '@mui/material'

import { styled } from '@mui/material/styles'
import { PhotoCamera, SignalWifiStatusbarNull } from '@mui/icons-material'
import { useDispatch } from 'react-redux'
import { AddProject } from '../../../reduxToolkit/projects/ProjectApi'
import { useRef } from 'react'

const CreateProject = () => {

  const [projectTitle, setProjectTitle] = React.useState('')
  const [demoLink, setDemoLink] = useState('')
  const [githubLink, setGithubLink] = useState('')
  const [image, setImage] = useState(null)

  const dispatch = useDispatch()
  const inputRef = useRef()

  const Input = styled('input')({
    display: 'none',
  })

  const handleChange = (event) => {
    setProjectTitle(event.target.value)
  }

  const handleCreateProject = async () => {
    const data = {
      project_title: projectTitle,
      demo_link: demoLink,
      github_link: githubLink,
      image,
    }

    console.log(data)
    let action = await dispatch(AddProject(data))
    if (action?.payload?.status >= 200 && action?.payload?.status >= 200) {
      setProjectTitle('')
      setDemoLink('')
      setGithubLink('')
      setImage(null)
    }
  }

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
        Create Project
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
            placeholder='Enter github_link'
            focused
            value={githubLink}
            onChange={(e) => { setGithubLink(e.target.value) }}
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


      <Button variant="contained" color="primary" onClick={() => handleCreateProject()}>
        Create
      </Button>
    </Stack>

  )
}

export default CreateProject