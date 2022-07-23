import React, { useEffect } from 'react'
import Navbar from "../Components/Navbar/Navbar";
import Intro from "../Components/Intro/Intro";
import Services from "../Components/Service/Services";
import Experience from "../Components/Experience/Experience";
import Works from "../Components/Works/Works";
import Portfolio from "../Components/Portfolio/Portfolio";
import Testimonials from "../Components/Testimonials/Testimonials";
import Contact from "../Components/Contact/Contact";
import Footer from "../Components/Footer/Footer";

import { themeContext } from '../Context';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { GetUserByID } from '../reduxToolkit/publicUser/user/userApi';

const Home = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const { profileUrl } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        console.log(profileUrl)
        // const url = profileUrl ? `/${profileUrl}` : '/'
        // window.location.href = url
        dispatch(GetUserByID(profileUrl))

    }, [])



    return (
        <div className="App" style={{
            background: darkMode ? 'black' : '',
            color: darkMode ? 'white' : ''
        }}>
            <Navbar />
            <Intro />
            <Services />
            <Experience />
            <Works />
            <Portfolio />
            <Testimonials />
            <Contact />
            <Footer />

        </div>
    )
}

export default Home