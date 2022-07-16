import React, { useEffect } from 'react'

import './Portfolio.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import Sidebar from "../../img/sidebar.png"
import Ecommerce from '../../img/ecommerce.png'
import HOC from '../../img/hoc.png'
import MusicApp from '../../img/musicapp.png'
import 'swiper/css'
import { useDispatch, useSelector } from 'react-redux';
import { GetProject } from '../../reduxToolkit/projects/ProjectApi';
import { Box, Button, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import baseURL, { imageURL } from '../../config/baseURL';

const Portfolio = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetProject());
  }, [])
  const { getProject } = useSelector(state => state.projects)

  console.log(getProject);

  return (
    <div className='portfolio'>

      {/* heading */}
      <span>Recent Projects</span>
      <span>PortFolio</span>


      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        {getProject.map((item, index) => {

          console.log(`${imageURL}${item.image}`);
          return (
            <SwiperSlide key={index}>
              <Box className='portfolio-card'>
                {/* <img src={Sidebar} alt="" /> */}

                <Link to={`/portfolio/${item.id}`}>
                  <img src={`${imageURL}${item.image}`} alt="lazy" loading="lazy" style={{ marginBottom: '1rem' }} />
                </Link>
                <Stack direction="row">
                  <Typography
                    sx={{
                        ml: '1rem', color: "#000",
                      fontSize: '25px', borderRadius: '20px',
                      textTransform: 'capitalize',
                      gap: '20px',
                      texDecoration: 'none',
                      fontWeight: 'bold',
                    }}
                  >

                    {item.project_title == 10 && 'Laravel'}
                    {item.project_title == 20 && 'ReactJS'}
                    {item.project_title == 30 && 'Laravel and ReactJS'}

                  </Typography>
                  <Typography sx={{
                    ml: '21px',
                    fontSize: '14px', borderRadius: '20px',
                    textTransform: 'capitalize',
                  }}>

                    <Button variant='outlined' size='small' color='primary'>  <a href={item.github_link} target="_blank" style={{ textDecoration: 'none' }} rel="noreferrer" > Github </a></Button>
                  </Typography>

                  <Typography sx={{
                    ml: '21px', fontSize: '14px', borderRadius: '20px',
                    textTransform: 'capitalize', marginBottom: '1rem'
                  }}>

                    <Button variant='outlined' size='small' color='success'>  <a href={item.demo_link} target="_blank" style={{ textDecoration: 'none' }} rel="noreferrer" > Demo </a> </Button>
                  </Typography>


                </Stack>

              </Box>
            </SwiperSlide>
          )
        })}
        {/* <SwiperSlide>
          <img src={Ecommerce} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={MusicApp} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={HOC} alt="" />
        </SwiperSlide> */}

      </Swiper>
    </div>
  )
}

export default Portfolio