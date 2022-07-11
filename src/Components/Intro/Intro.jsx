import React from 'react'
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


const Intro = () => {
  return (
   <div className='intro'>
       <div className='i-left'>
           <div className='i-name'>
                <span>Hello! I Am</span>
                <span>Showkat Ali</span>
                <span>Full Stack developer with high of experience 
                    in web development. I am a self-taught developer
                    and I am always looking for new challenges.
                </span>
           </div>
           <button className='button i-button'>Hire me</button>
           <div className='i-icons'>
               <img src={Github} alt="" />
               <img src={Linkedin} alt="" />
               <img src={Instagram} alt="" />

           </div>
       </div>
       <div className='i-right'>
              <img src={Vector1} alt="" />
               <img src={Vector2} alt="" />
               <img src={boy} alt="" />
               <img src={glassesimoji} alt="" />
               <div style={{top:'-4%',left:'68%'}}>
                   <FloatingDev image={Crown} text1='Web' text2='Developer' />
               </div>
               <div style={{top:'18rem',left:'0rem'}}>
                   <FloatingDev image={thumbup} text1='Best Design' text2='Award' />
               </div>

               {/* blur divs */}
                <div className='blur' style={{background: "rgb(238 210 255)"}}></div>
                <div className='blur' 
                style={{
                    background: '#C1F5FF',
                    top: '17rem',
                    width: '21rem',
                    height: '11rem',
                    left: '-9rem'
                }}></div>
       </div>
   </div>
  )
}

export default Intro