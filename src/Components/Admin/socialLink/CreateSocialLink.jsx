import React, { useState } from 'react'
import { Box, Button, Stack, Typography, TextField, Select, FormControl, MenuItem, InputLabel, IconButton } from '@mui/material'

import { styled } from '@mui/material/styles'

import { useDispatch } from 'react-redux'
import { AddSocialLnk } from '../../../reduxToolkit/socialLinks/SocialApi'


const CreateSocialLink = () => {

    const dispatch = useDispatch()
    const [facebook, setFacebook] = useState('')
    const [twitter, setTwitter] = useState('')
    const [instagram, setInstagram] = useState('')
    const [youtube, setYoutube] = useState('')
    const [linkedin, setLinkedin] = useState('')
    const [github, setGithub] = useState('')
    const [website, setWebsite] = useState('')
    const [fiverr, setFiver] = useState('')
    const [upwork, setUpwork] = useState('')



    const handleCreateProject = async () => {
        const data = {
            facebook: facebook,
            twitter: twitter,
            instagram: instagram,
            youtube: youtube,
            github: github,
            linkedin: linkedin,
            website: website,
            fiverr: fiverr,
            upwork: upwork,


        }

            dispatch(AddSocialLnk(data))
       
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
                    Add Socail Link
                </Typography>
                <Stack gap="30px" direction="row">

                    <Box>
                        <TextField
                            label="Facebook"
                            type="text"
                            placeholder='Enter Facebook link Here'
                            focused
                            value={facebook}
                            onChange={(e) => { setFacebook(e.target.value) }}
                        />
                    </Box>
                    <Box>
                        <TextField
                            label="Twitter"
                            type="text"
                            placeholder='Enter Twitter link  Here'
                            focused
                            value={twitter}
                            onChange={(e) => { setTwitter(e.target.value) }}
                        />
                    </Box>
                    </Stack>
                    <Stack gap="30px" direction="row">
                    <Box>
                        <TextField
                            label="instagram"
                            type="text"
                            placeholder='Enter instagram link here'
                            focused
                            value={instagram}
                            onChange={(e) => { setInstagram(e.target.value) }}
                        />
                    </Box>
                
                
                    <Box>
                        <TextField
                            label="youtube"
                            type="text"
                            placeholder='Enter youtube link here'
                            focused
                            value={youtube}
                            onChange={(e) => { setYoutube(e.target.value) }}
                            />
                    </Box>
                </Stack>
                <Stack gap="30px" direction="row">
                    <Box>
                        <TextField
                            label="linkedin"
                            type="text"
                            placeholder='Enter Project Description Here'
                            focused
                            value={linkedin}
                            onChange={(e) => { setLinkedin(e.target.value) }}
                            />
                    </Box>
                    <Box>
                        <TextField
                            label="github"
                            type="text"
                            placeholder='Enter Project Name Here'
                            focused
                            value={github}
                            onChange={(e) => { setGithub(e.target.value) }}
                            />
                    </Box>
                            </Stack>
                            <Stack gap="30px" direction="row">
                    <Box>
                        <TextField
                            label="website"
                            type="text"
                            placeholder='Enter Project Name Here'
                            focused
                            value={website}
                            onChange={(e) => { setWebsite(e.target.value) }}
                        />

                    </Box>
                    <Box>
                        <TextField
                            label="fiver"
                            type="text"
                            placeholder='Enter Project Name Here'
                            focused
                            value={fiverr}
                            onChange={(e) => { setFiver(e.target.value) }}
                        />

                    </Box>
                    </Stack>
                    <Stack gap="30px" direction="row">
                    <Box>
                        <TextField
                            label="upwork"
                            type="text"
                            placeholder='Enter Project Name Here'
                            focused
                            value={upwork}
                            onChange={(e) => { setUpwork(e.target.value) }}
                        />
                    </Box>


                </Stack>


                <Button variant="contained" color="primary" onClick={() => handleCreateProject()}>
                    Create
                </Button>
            </Stack>
        )
    }

export default CreateSocialLink