
import React, { useRef, useState } from 'react';

import './Contact.css'


import emailjs from '@emailjs/browser';

const Contact = () => {

    const form = useRef();

    const [done, setDone] = useState(false);
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_jysrul7', 'template_7tkyrrg', form.current, 'L_y94SCwlW6VvJcFL')
        .then((result) => {
            setDone(true);
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <div className='contact-form'>
            <div className='c-left'>
                <div className='awesome'>
                    <span>Get in Touch</span>
                    <span>Contact me</span>
                    <div
                        className='blur s-blur1'
                        style={{ background: "#ABF1FF94" }}
                    >

                    </div>
                </div>
                </div>
                {/* right */}
                <div className='c-right'>
                    <form ref={form} onSubmit={sendEmail} >
                        <input type="text" name='user_name' className='user' placeholder='Enter User Name' />
                        <input type="email" name='user_email' className='user' placeholder='Enter User Email' />
                        <textarea  name='message' className='user' placeholder='Message' />
                        <input type="submit" value='Send' className='button' />

                        <span>{done && "Thanks for contacting me "}</span>
                        <div className='blur c-blur1'
                            style={{background: "var(--purple)"}}
                        >

                        </div>
                    </form>
               
            </div>

        </div>
    )
}

export default Contact