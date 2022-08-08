import React from 'react'
import Card from '../Card/Card'

import './Services.css'

import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import { useSelector } from 'react-redux'
import { imageURL } from '../../config/baseURL'
import { Link } from '@mui/material'

const Services = () => {
    const { getUserByID } = useSelector(state => state.user)

    const cv = getUserByID?.cv ? `${imageURL}${getUserByID?.cv}` : '';
    return (
        <div className='services'>
            {/* left side */}
            <div className='awesome'>
                <span>My Awesome</span>
                <span>services</span>
                <span>
                    Dicta quasi fugit esse deleniti aperiam harum explicabo distinctio commodi incidunt,
                    <br />
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </span>
                <a href={cv} target="_blank" target="_blank" className='button btn-service' >Download CV</a>
                <div className='blur s-blur' style={{ background: "#ABF1FF94" }}></div>
            </div>
            {/* right side */}
            <div className='cards'>
                <div style={{ left: '14rem' }}>
                    <Card
                        emoji={HeartEmoji}
                        heading={'Design'}
                        details={"Figma, Sketch, Adobe XD"}
                    />
                </div>
                <div style={{ top: '12rem', left: '-4rem' }}>
                    <Card
                        emoji={Glasses}
                        heading={'Developer'}
                        details={"Html,Css,JavaScript,React"}
                    />
                </div>
                <div style={{ top: '19rem', left: '12rem' }}>
                    <Card
                        emoji={Humble}
                        heading={'UI/UX'}
                        details={"Photoshop,Illustrator"}
                    />
                </div>
            </div>
            <div className='blur s-blur2' style={{ backrgound: "var(--purple)" }}></div>
        </div>
    )
}

export default Services