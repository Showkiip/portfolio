import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import './Intro.css'
import Github from '../../img/github.png'
import Linkedin from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import boy from '../../img/boy.png'
import thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import glassesimoji from '../../img/glassesimoji.png'
import FloatingDev from '../FloatingDiv/FloatingDev'
import { getUserByID } from '../../reduxToolkit/socialLinks/SocialApi'
import { imageURL } from '../../config/baseURL'


const Intro = () => {

 
    const { getUserByID } = useSelector(state => state.user)
    console.log("intro ..........>>>>>>>>>>", getUserByID);

    const profile = getUserByID?.avatar ? `${imageURL}${getUserByID?.avatar}` : boy;

    return (
        <div className='intro'>
            <div className='i-left'>
                <div className='i-name'>
                    <span>Hello! I Am</span>
                    <span>{getUserByID?.name || 'John doe'}</span>
                    <span>
                        {getUserByID?.description || 'I am a web developer'}
                    </span>
                </div>
                <div>
                    <button className='button i-button'>
                        <a href={getUserByID?.fiverr} target="_blank" rel="noopener noreferrer">
                            Hire me
                        </a>
                    </button>
                    <div className='i-icons'>
                        <a href={getUserByID?.github} target="_blank" rel="noopener noreferrer">
                            <img src={Github} alt="" />
                        </a>
                        <a href={getUserByID?.linkedin} target="_blank" rel="noopener noreferrer">
                            <img src={Linkedin} alt="" />
                        </a>
                        <a href={getUserByID?.instagram} target="_blank" rel="noopener noreferrer">
                            <img src={Instagram} alt="" />
                        </a>

                    </div>
                </div>
            </div>
            <div className='i-right'>
                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img src={profile} alt=""  className='i-profile'
                    style={{
                        width: '250px',
                        height: '20rem',
                    }}
                 />
        
                <img src={glassesimoji} alt="" />
                <div style={{ top: '-4%', left: '68%' }}>
                    <FloatingDev image={Crown} text1='Web' text2='Developer' />
                </div>
                <div style={{ top: '18rem', left: '0rem' }}>
                    <FloatingDev image={thumbup} text1='Best Design' text2='Award' />
                </div>

                {/* blur divs */}
                <div className='blur' style={{ background: "rgb(238 210 255)" }}></div>
                <div className='blur'
                    style={{
                        background: '#C1F5FF',
                        top: '17rem',
                        width: '21rem',
                        height: '11rem',
                        left: '-9rem'
                    }}></div>
            </div>
        </div >
    )
}

export default Intro