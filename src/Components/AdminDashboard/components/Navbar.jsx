import React from "react";
import styled from "styled-components";
import { BiSearch } from "react-icons/bi";
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import { Box,Grid, Stack } from "@mui/material";

export default function Navbar() {
  return (
    <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        

    }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={10} sm={12} md={10} >
          <Stack gap={2}>
            <Paper
              component="form"
              sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
            >
              <IconButton sx={{ p: '10px' }} aria-label="menu">
                <MenuIcon />
              </IconButton>
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search Google Maps"
                inputProps={{ 'aria-label': 'search google maps' }}
              />
              <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
              </IconButton>
              <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
              <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
                <DirectionsIcon />
              </IconButton>
            </Paper>
          </Stack>
        </Grid>

      </Grid>
    </Box>
  );
}
// const Nav = styled.nav`
// margin-left: 18vw;
// padding: 2rem;
//   display: flex;
//   justify-content: space-between;
//   color: white;
//   .title {
//     h1 {
//       span {
//         margin-left: 0.5rem;
//         color: #ffc107;
//         font-family: "Permanent Marker", cursive;
//         letter-spacing: 0.2rem;
//       }
//     }
//   }
//   .search {
//     background-color: #212121;
//     display: flex;
//     align-items: center;
//     gap: 1rem;
//     padding: 1rem 8rem 1rem 1rem;
//     border-radius: 1rem;
//     svg {
//       color: #ffc107;
//     }
//     input {
//       background-color: transparent;
//       border: none;
//       color: #ffc107;
//       font-family: "Permanent Marker", cursive;
//       letter-spacing: 0.3rem;
//       &:focus {
//         outline: none;
//       }
//       &::placeholder {
//         color: #ffc107;
//         font-family: "Permanent Marker", cursive;
//       }
//     }
//   }
//   @media screen and (min-width: 280px) and (max-width: 1080px) {
//     flex-direction: column;
//     .title {
//       h1 {
//         span {
//           display: block;

//           margin: 1rem 0;
//           /* letter-spacing: 0; */
//         }
//       }
//     }
//   }
// `;
