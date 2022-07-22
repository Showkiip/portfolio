import { Stack, Box, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

const Content = () => {
  const { loginUser } = useSelector(state => state.auth);

    console.log("auth user>>>>>>>>", loginUser)
  return (
    <Stack sx={{ height: '85vh' }}>
        <Outlet />
    </Stack>
  )
}

export default Content