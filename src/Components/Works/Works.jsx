import React, { useEffect } from 'react'

import './Works.css'
import Upwork from '../../img/Upwork.png'
import Fiverr from '../../img/fiverr.png'
import Facebook from '../../img/Facebook.png'
import LinkedLin from '../../img/linkedin.png'
import Github from '../../img/github.png'

import { useDispatch, useSelector } from 'react-redux';

const Works = () => {


    const { getUserByID } = useSelector(state => state.user)

    console.log("get social linkk >>>>>.",getUserByID);
    
    return (

        <div className='works'>
            <div className='awesome'>
                <span>Works for All these</span>
                <span>Brands & Clients</span>
                <spane>
                    Dicta quasi fugit esse deleniti aperiam harum explicabo distinctio commodi incidunt,
                    <br />
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    <br />
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    <br />
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </spane>
                <button className='button s-button '>Hire Me</button>
                <div className='blur s-blur' style={{ background: "#ABF1FF94" }}></div>
            </div>
            {/* right side */}
            <div className='w-right'>
                <div className='w-mainCircle'>
                    <div className='w-secCircle'>
                        <a href={getUserByID?.upwork} target="_blank" rel="noopener noreferrer">
                            <img src={Upwork} alt="" />

                        </a>
                    </div>
                    <div className='w-secCircle'>
                        <a href={getUserByID?.fiverr} target="_blank" rel="noopener noreferrer">
                            <img src={Fiverr} alt="" />
                        </a>
                    </div>
                    <div className='w-secCircle'>
                        <a href={getUserByID?.linkedin} target="_blank" rel="noopener noreferrer">
                            <img src={LinkedLin} alt="" />
                        </a>
                    </div>
                    <div className='w-secCircle'>
                        <a href={getUserByID?.github} target="_blank" rel="noopener noreferrer">
                            <img src={Github} alt="" />
                        </a>
                    </div>
                    <div className='w-secCircle'>
                        <a href={getUserByID?.facebook} target="_blank" rel="noopener noreferrer" >
                            <img src={Facebook} alt="" />
                        </a>
                    </div>

                    {/* background circle */}
                    {/* <div className='w-backCircle blueCircle'>
                    </div>
                    <div className='w-backCircle yellowCircle'></div> */}


                </div>
            </div>
        </div>
    )
}

export default Works