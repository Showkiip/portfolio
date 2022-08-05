import React, { useEffect } from "react";
import styled from "styled-components";
import image from "../../../assets/profile.jpeg";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { useSelector } from "react-redux";
import { imageURL } from "../../../config/baseURL";
import { Button, Card, CardActions, CardContent, CardMedia, FormControl, InputLabel, Modal, Select, Stack, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import EditProfile from "./modal/EditProfile";

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


  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { userProfile } = useSelector(state => state.auth);

  console.log(" userProfile ??????????", userProfile)

  const imageURL = userProfile?.avatar ? `${imageURL}${userProfile.avatar}` : image;

  return (

    <Card sx={{
      width: '100%',
      maxWidth: '80%',
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
           
            }}>

            Edit Profile
          </Typography>
          <Box sx={{ minWidth: 300 }}>
            <Box>
              <img src={image} alt="image" style={{ width: "140px", height: "140px", borderRadius: "70px" }} />
            </Box>
            <Stack direction="row" alignItems="center" >
              <label htmlFor="contained-button-file">
                <Input
                  accept="image/*"
                  id="contained-button-file"
                  type="file"

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

              />
            </Box>
            <Box sx={{ minWidth: 300 }}>
              <TextField
                label="email "
                type="email "
                placeholder='Enter email '
                focused

              />
            </Box>
            <Box sx={{ minWidth: 300 }}>
              <TextField
                label="phone"
                type="number"
                placeholder='Enter phone'
                focused

              />
            </Box>
          </Stack>
          <Stack gap="30px" direction="row">
            <Box sx={{ minWidth: 300 }}>
              <TextField
                label="address"
                type="textarea"
                placeholder='Enter address Here'
                focused

              />
            </Box>
            <Box sx={{ minWidth: 300 }}>
              <TextField
                label="city"
                type="text"
                placeholder='Enter city'
                focused

              />
            </Box>
            <Box sx={{ minWidth: 300 }}>
              <TextField
                label="state"
                type="text"
                placeholder='Enter state'
                focused

              />
            </Box>

          </Stack>
          <Stack gap="30px" direction="row">
            <Box sx={{ minWidth: 300 }}>
              <TextField
                label="country"
                type="textarea"
                placeholder='Enter country Here'
                focused

              />
            </Box>
            <Box sx={{ minWidth: 300 }}>
              <TextField
                label="zip"
                type="text"
                placeholder='Enter zip'
                focused

              />
            </Box>
            <Box sx={{ minWidth: 300 }}>
              <TextField
                label="description"
                type="text"
                placeholder='Enter description'
                focused

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

