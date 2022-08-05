import React, { useEffect } from "react";
import styled from "styled-components";
import image from "../../../assets/profile.jpeg";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { useSelector } from "react-redux";
import { imageURL } from "../../../config/baseURL";
import { Button, Card, CardActions, CardContent, CardMedia, Modal, Typography } from "@mui/material";
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



  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { userProfile } = useSelector(state => state.auth);

  console.log(" userProfile ??????????", userProfile)

  const imageURL = userProfile?.avatar ? `${imageURL}${userProfile.avatar}` : image;

  return (

    <Card sx={{
      maxWidth: 345,
      margin: 'auto',
      marginTop: '10px',
      marginBottom: '10px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      borderRadius: '10px',
      backgroundColor: '#fff',
      padding: '10px',
      border: '2px solid #000',
      position: 'relative',
      overflow: 'hidden',
      cursor: 'pointer',
      '&:hover': {
        boxShadow: '10px 10px 10px #000',
        border: '2px solid #000',
        backgroundColor: '#fff',
        cursor: 'pointer',
      }

    }}>
      <CardMedia
        component="img"
        height="300"
        image={imageURL}
        alt="green iguana"
         />
      
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {userProfile?.name}
        </Typography>
        <CardActions>
          <Typography size="small">{userProfile?.email}</Typography>
        </CardActions>
        <CardActions>
          <Typography size="small">{userProfile?.profile_url}</Typography>
        </CardActions>
      </CardContent>
      <CardActions>

        <Button size="small" onClick={() => { setOpen(true) }}>Learn More</Button>
      </CardActions>

      <EditProfile open={open} setOpen={setOpen} />

    </Card>



  );
}

