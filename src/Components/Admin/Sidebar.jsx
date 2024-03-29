import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { Stack, Avatar, Box, Typography, Divider, Button } from '@mui/material'
import AddBoxIcon from '@mui/icons-material/AddBox';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useDispatch, useSelector } from 'react-redux';
import { GetProject } from '../../reduxToolkit/projects/ProjectApi';
import { Login, Logout } from '../../reduxToolkit/auth/AuthApi';
import { clearProjectEdit } from '../../reduxToolkit/projects/ProjectSlice';
import { EditSocialLink } from '../../reduxToolkit/socialLinks/SocialApi';


const Sidebar = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logout = () => {
    dispatch(Logout({ navigate }));
  };

  const [getLoginUser, setGetLoginUser] = useState({})


  useEffect(() => {
    const data = localStorage.getItem('user');
    const loginUser = JSON.parse(data);
    setGetLoginUser(loginUser);
    // console.log("local storage ........>>>>>>>>", data);
  }, [])

  console.log("getLoginUser ........>>>>>>>>", getLoginUser.id);




  return (
    <Stack sx={{ height: '97vh' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'center' }} mb="13px" mt="10px">
        <Avatar alt='user profile' />
        <Typography variant="h6"
          sx={{
            fontSize: {
              lg: '18px',
              sm: '12px'
            }
          }}>
          User Name
        </Typography>
      </Box>
      <Divider />

      <Box mt="20px"

      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', marginLeft: { lg: '20px' } }}>
          <AddBoxIcon />
          <Link to={"/dashboard/" + getLoginUser.id + "/project"} onClick={() => dispatch(clearProjectEdit())}> Add Project</Link>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', marginLeft: { lg: '20px' } }}>
          <AddBoxIcon />
          <Link to={"/dashboard/" + getLoginUser.id + "/project/list"} onClick={() => {
            dispatch(GetProject())
          }}> Project List</Link>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', marginLeft: { lg: '20px' } }}>
          <AddBoxIcon />
          <Link to={"/dashboard/" + getLoginUser.id + "/socialLink"}
            onClick={() => {
              dispatch(EditSocialLink())
            }}
          > Add Social Links</Link>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: { lg: '30px' }, marginTop: { lg: '20px' } }}>
          <ExitToAppIcon variant="contained" />
          <Link to={''} variant="contained" color="primary" size="small" onClick={logout}> Logout</Link>
        </Box>
      </Box>
    </Stack >
  )
}

export default Sidebar