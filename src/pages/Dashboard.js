import React from 'react'
import { Box, Stack, Grid, Paper, styled } from '@mui/material';
import Sidebar from '../Components/Admin/Sidebar';
import Content from '../Components/Admin/Content';
import Navbar from '../Components/Admin/Navbar';
import { useSelector } from 'react-redux';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  // textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const Dashboard = () => {

  const {loginUser} = useSelector(state => state.auth);
  return (
    <Box sx={{ flexGrow: 1 , backgroundColor: 'darkgray' }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={2} sm={0} md={2} >
          <Item>
            <Sidebar />
          </Item>
        </Grid>
        <Grid item xs={10} sm={12} md={10} >
          <Stack gap={2}>
            <Item>
              <Navbar />
            </Item>
            <Item>
              <Content />
            </Item>
          </Stack>
        </Grid>

      </Grid>
    </Box>
  )
}

export default Dashboard