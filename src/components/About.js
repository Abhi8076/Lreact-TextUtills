import React from 'react'

export default function About() {
    return (
        <div className='container-m'>
            <div className="about-section">
                <h1>About Us Page</h1>
                <p>This project is just to learn something.</p>
                <p>Resize the browser window to see that this page is responsive by the way.</p>
            </div>

            <h2 className='text-center'>ME</h2>
            
                    <div className="card mx-auto d-flex">
                        <img src='http://abhiatwork.com/images/profile.jpg' alt="Jane" className='w-100'/>
                            <div className="container">
                                <h2>Abhishek Meena</h2>
                                <p className="title">Web Developer</p>
                                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                                <p>abhi8076meena@gmail.com</p>
                                <p><button className="button">Contact</button></p>
                            </div>
                    </div>
                
                {/* <strong>Created by Abhishek Meena</strong> */}
           
        </div>
            );
}
