import React from 'react'
import { Link } from 'react-router-dom'

import { Stack, Avatar, Box, Typography, Divider } from '@mui/material'
import AddBoxIcon from '@mui/icons-material/AddBox';
import { useDispatch } from 'react-redux';
import { GetProject } from '../../reduxToolkit/projects/ProjectApi';


const Sidebar = () => {
 
  const dispatch = useDispatch();

  // dispatch(GetProject());

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

      <Box mt="20px">
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', marginLeft: { lg: '20px' } }}>
          <AddBoxIcon />
          <Link to="/dashboard/project"> Add Project</Link>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', marginLeft: { lg: '20px' } }}>
          <AddBoxIcon />
          <Link to="/dashboard/project/list" onClick={() =>{ 
            dispatch(GetProject())
          }}> Project List</Link>
        </Box>
      </Box>
    </Stack>
  )
}

export default Sidebar