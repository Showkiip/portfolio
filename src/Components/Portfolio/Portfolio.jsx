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
          return (
            <SwiperSlide key={index}>
              <Link to={``} className='portfolio-card'>
                {/* <img src={Sidebar} alt="" /> */}
                <img src={Sidebar} alt="lazy" loading="lazy" />
                <Stack direction="row">
                  <Typography
                  sx={{
                    ml: '21px', color: "#fff"
                    , background: '#ffa9a9',
                    fontSize: '14px', borderRadius: '20px',
                    textTransform: 'capitalize'
                }}
                >
                    {item.project_title}
                  </Typography>
                  <Typography color="black" >
                    <Button ><Link to={item.github_link}> Github</Link></Button>
                  </Typography>
                </Stack>
                <Typography color="black">
                  Demo : {item.demo_link}
                </Typography>

              </Link>
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