import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Signin from '../Modal/Signin'
import Signup from '../Modal/Signup'
import Toggle from '../Toggle/Toggle'

import './Navbar.css'

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const [register, setRegister] = useState(false)

    
  
    return (
        <div className='n-wrapper'>
            <div className='n-left'>
                <div className='n-name'>Showkat</div>
                {/* <Toggle /> */}
            </div>
            <div className='n-right'>
                <div className='n-list'>
                    <ul style={{ listStyleType: 'none' }}>
                        <li>Home</li>
                        <li>Services</li>
                        <li>Experience</li>
                        <li>Portfolio</li>
                        <li>Testimonials</li>
                        <li> <a href="#" onClick={() => { setOpen(true) }}>  login</a></li>
                        /
                        <li><a href='#' onClick={() => { setRegister(true) }}>Signup</a></li>

                    </ul>
                </div>
                <button className='button n-button'>
                    Contact
                </button>
            </div>

            <Signin open={open} setOpen={setOpen} />
            <Signup register={register} setRegister={setRegister} />
        </div>

    )
}

export default Navbar