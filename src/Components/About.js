import React from 'react'
import AboutUs from '../img/about-us.png'
import resume from '../CV/Moctar_Yonli.pdf'
const About = () => {
    return (
        <section className="about-area" id="about">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-6 col-md-12">
                    <div className="about-image">
                        <img src={AboutUs} alt="About us" className="img-fluid"/>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 about-title">
                    <h2 className="text-uppercase pt-5">
                        <span>Let me</span>
                        <span>introduce</span>
                        <span>myself</span>
                    </h2>
                    <div className="paragraph py-4 w-75">
                        <p className="para">
                        I am a young developer passionate about computer programming
                        and new technologies, I am constantly interested in learning
                        to learn new things.
                       

                        </p>
                        <p className="para">
                        I am specialized in front-end development and the creation of websites and mobile
                        website and mobile application creation even if I'm able to do web integration
                        integration and many other things because I am endowed with a great
                        great curiosity
                        </p>
                    </div>
                    <a href={resume} download="Moctar_Yonli.pdf">
                    <button type="button" className="btn button primary-button text-uppercase">Download cv</button>
                    </a>
                    
                </div>
            </div>
        </div>
    </section>
    )
}

export default About
