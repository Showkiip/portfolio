import React, { useEffect, useState } from 'react'
import { Box, Button, Stack, Typography, TextField, Select, FormControl, MenuItem, InputLabel, IconButton, CardContent, Card } from '@mui/material'

import { styled } from '@mui/material/styles'

import { useDispatch, useSelector } from 'react-redux'
import { AddSocialLink, UpdateSocialLink } from '../../../../reduxToolkit/socialLinks/SocialApi'
// import { AddSocialLnk } from '../../../reduxToolkit/socialLinks/SocialApi'


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


    const { editSocialLink } = useSelector(state => state.socials);

    console.log(" edit social link ??????????", editSocialLink)


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

        if (editSocialLink?.facebook) {
            dispatch(UpdateSocialLink({ data }))
        }
        else {
            dispatch(AddSocialLink(data))

        }

    }

    // for edit
    useEffect(() => {
        if (editSocialLink?.id) {
            setFacebook(editSocialLink.facebook)
            setTwitter(editSocialLink.twitter)
            setInstagram(editSocialLink.instagram)
            setYoutube(editSocialLink.youtube)
            setLinkedin(editSocialLink.linkedin)
            setGithub(editSocialLink.github)
            setWebsite(editSocialLink.website)
            setFiver(editSocialLink.fiverr)
            setUpwork(editSocialLink.upwork)

        }
        else {
            setFacebook('')
            setTwitter('')
            setInstagram('')
            setYoutube('')
            setLinkedin('')
            setGithub('')
            setWebsite('')
            setFiver('')
            setUpwork('')
        }

    }, [editSocialLink?.id])


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
            <CardContent>
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
                        {editSocialLink?.id ? 'Update Social Link' : 'Add Social Link'}
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
                        {editSocialLink?.id ? 'Update' : 'Create'}
                    </Button>
                </Stack>
            </CardContent>
        </Card>
    )
}

export default CreateSocialLink