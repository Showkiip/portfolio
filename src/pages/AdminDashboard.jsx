import React from "react";

import { Box, Stack, Grid, Paper, styled } from '@mui/material';

import Sidebar from "../Components/AdminDashboard/components/Sidebar";
import Content from "../Components/AdminDashboard/components/Content";
import Navbar from "../Components/AdminDashboard/components/Navbar";



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#EFF0F3',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  // textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function AdminDashboard() {
  return (
    <Box sx={{ flexGrow: 1, backgroundColor: 'darkgray' }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={2} sm={0} md={2} >
          <Item>
            <Sidebar />
          </Item>
        </Grid>
        <Grid item xs={10} sm={12} md={10} >
          <Stack gap={2}
            sx={{
              marginLeft: '18px',
            }}>

            <Item>
              <Navbar />
            </Item>
            <Item
                  backgroundColor={'#212121'}
                  >
              <Content />
            </Item>
          </Stack>
        </Grid>

      </Grid>
    </Box>
  );
}


