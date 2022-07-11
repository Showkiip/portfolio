import React from 'react'
import './Testimonials.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import profilePic1 from '../../img/profile1.jpg'
import profilePic2 from '../../img/profile2.jpg'
import profilePic3 from '../../img/profile3.jpg'
import profilePic4 from '../../img/profile4.jpg'

import { Pagination } from 'swiper';
import 'swiper/css'

const Testimonials = () => {

    const clients = [
        {
            img: profilePic1,
            review:
                "looks like a great job, I'm very happy with the result",
        },
        {
            img: profilePic2,
            review:
                "looks like a great job, I'm very happy with the result",
        },
        {
            img: profilePic3,
            review:
                "looks like a great job, I'm very happy with the result",
        },
        {
            img: profilePic4,
            review:
                "looks like a great job, I'm very happy with the result",
        },
    ]
    return (
        <div className='t-wrapper'>
            <div className='t-heading'>
                <span>Clients always get</span>
                <span>Exceptional Work</span>
                <span>From me....</span>

                <div className='blur t-blur1' style={{ background: " var(--purple)" }}></div>
                <div className='blur t-blur2' style={{ background: " skyblue" }}></div>
            </div>

            {/* slider */}
            <Swiper
                modules={[Pagination]}
                slidesPerView={1}
                pagination={{ clickable: true }}

            >
                {clients.map((client, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <div className='testimonial'>
                                <img src={client.img} alt="" />
                                <span>{client.review}</span>
                            </div>

                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
}

export default Testimonials