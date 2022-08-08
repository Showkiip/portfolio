import React, { useEffect, useState } from "react";
import styled from "styled-components";
import profileImage from "../../../assets/profile.jpeg";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { imageURL } from "../../../config/baseURL";
import { Button, Card, CardActions, CardContent, CardMedia, FormControl, InputLabel, Modal, Select, Stack, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import EditProfile from "./modal/EditProfile";
import { UpdateProfile } from "../../../reduxToolkit/auth/AuthApi";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Profile() {


  const Input = styled('input')({
    display: 'none',
  })

  const dispatch = useDispatch()
  const [image, setImage] = useState(null)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [phone, setPhone] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [country, setCountry] = useState('')
  const [zip, setZip] = useState('')
  const [description, setDescription] = useState('')
  const [cv, setCV] = useState(null)

const handleProfile = async () => {

  let formData = new FormData();
  formData.append('avatar', image)
  formData.append('name', name)
  formData.append('email', email)
  formData.append('address', address)
  formData.append('phone', phone)
  formData.append('city', city)
  formData.append('state', state)
  formData.append('country', country)
  formData.append('zip', zip)
  formData.append('description', description)
  formData.append('cv', cv)
    console.log(formData)

  dispatch(UpdateProfile( formData ));
}
  const { userProfile } = useSelector(state => state.auth);

  console.log(" userProfile ??????????", userProfile)

  useEffect(()=> {
      if(userProfile) {
          setImage(userProfile?.image)
          setName(userProfile?.name)
          setEmail(userProfile?.email)
          setAddress(userProfile?.address)
          setPhone(userProfile?.phone)
          setCity(userProfile?.city)
          setState(userProfile?.state)
          setCountry(userProfile?.country)
          setZip(userProfile?.zip)
          setDescription(userProfile?.description)
          setCV(userProfile?.cv)
      } else {
          setImage('')
          setName('')
          setEmail('')
          setAddress('')
          setPhone('')
          setCity('')
          setState('')
          setCountry('')
          setZip('')
          setDescription('')
          setCV('')
      }
  } , [userProfile])  

  const profile = userProfile?.avatar ? `${imageURL}${userProfile?.avatar}` : profileImage;

  return (

    <Card sx={{
      width: '100%',
      maxWidth: '80%',
      height: 'auto',
      margin: 'auto',
      marginTop: '20px',
      marginBottom: '20px',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.1)',
      backgroundColor: '#fff',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'scroll',
      overflowY: 'scroll',
      overflowX: 'hidden',
      WebkitOverflowScrolling: 'touch',
      
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

            }}>

            Edit Profile
          </Typography>
          <Box sx={{ minWidth: 300 }}>
            <Box>
              <img src={profile} alt="image" style={{ width: "140px", height: "140px", borderRadius: "70px" }} />
            </Box>
            <Stack direction="row" alignItems="center" >
              <label htmlFor="contained-button-file">
                <Input
                  accept="image/*"
                  id="contained-button-file"
                  type="file"
                  onChange={(e) => {
                    setImage(e.target.files[0]
                    )
                  }}
                />
                <Button variant="contained" component="span"
                  color="primary"  >
                  Upload Image
                </Button>
              </label>

            </Stack>
          </Box>
          <Stack gap="30px" direction="row">
            <Box sx={{ minWidth: 300 }}>
              <TextField
                label="name"
                type="text"
                placeholder='Enter Name'
                focused
                value={name}
                onChange={(e) => { setName(e.target.value) }}

              />
            </Box>
            <Box sx={{ minWidth: 300 }}>
              <TextField
                label="email "
                type="email"
                placeholder='Enter email '
                focused
                aria-readonly
                value={email}
                onChange={(e) => { setEmail(e.target.value) }}

              />
            </Box>
            <Box sx={{ minWidth: 300 }}>
              <TextField
                label="phone"
                type="number"
                placeholder='Enter phone'
                focused
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value
                  )
                }}
              />
            </Box>
          </Stack>
          <Stack gap="30px" direction="row">
            <Box sx={{ minWidth: 300 }}>
              <TextField
                label="address"
                type="text"
                placeholder='Enter address Here'
                focused
                value={address}
                onChange={(e) => {
                  setAddress(e.target.value
                  )
                }}
              />
            </Box>
            <Box sx={{ minWidth: 300 }}>
              <TextField
                label="city"
                type="text"
                placeholder='Enter city'
                focused
                value={city}
                onChange={(e) => {
                  setCity(e.target.value
                  )
                }}
              />
            </Box>
            <Box sx={{ minWidth: 300 }}>
              <TextField
                label="state"
                type="text"
                placeholder='Enter state'
                focused
                value={state}
                onChange={(e) => {
                  setState(e.target.value
                  )
                }}
              />
            </Box>

          </Stack>
          <Stack gap="30px" direction="row">
            <Box sx={{ minWidth: 300 }}>
              <TextField
                label="country"
                type="text"
                placeholder='Enter country Here'
                focused
                value={country}
                onChange={(e) => {
                  setCountry(e.target.value
                  )
                }}
              />
            </Box>
            <Box sx={{ minWidth: 300 }}>
              <TextField
                label="zip"
                type="text"
                placeholder='Enter zip'
                focused
                value={zip}
                onChange={(e) => {
                  setZip(e.target.value
                  )
                }}
              />
            </Box>
            <Box sx={{ minWidth: 300 }}>
              <TextField
                label="description"
                type="text"
                placeholder='Enter description'
                focused
                value={description}
                onChange={(e) => { setDescription(e.target.value) }}
              />
            </Box>

          </Stack>
          <Stack gap="30px" direction="row">
            <Box sx={{ minWidth: 300 }}>
              <TextField
                label="CV"
                type="file"
                placeholder='Upload CV Here'
                focused
                onChange={(e) => {
                  console.log(e.target.files[0])
                  setCV(e.target.files[0]
                  )
                }}
              />
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

                onClick={handleProfile}
              >
                Edit Profile
              </Button>
            </Box>
          </Stack>
        </Stack>
      </CardContent>
    </Card>

  );
}

