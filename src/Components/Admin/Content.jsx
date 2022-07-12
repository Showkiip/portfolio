import { Stack, Box, Typography } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom';

const Content = () => {
  return (
    <Stack sx={{ height: '85vh' }}>

   
        <Outlet />

    </Stack>
  )
}

export default Content