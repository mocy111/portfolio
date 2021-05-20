import React from 'react'
import BannerImg from "../img/banner/banner-image.png"
import resume from '../CV/Moctar_Yonli.pdf'

const Banner = () => {
    return (
        <section className="site-banner" id="home">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 site-title">
                        <h3 className="title-text">Hey</h3>
                        <h2 className="title-text text-uppercase">I am Moctar Yonli</h2>
                        <h4 className="title-text text-uppercase">Full stack web Developer</h4>
                        <div className="site-buttons">
                            <div className="d-flex flex-row flex-wrap">
                                <button type="button" className="btn button primary-button mr-4 text-uppercase">hire
                                    me</button>
                                    <a href={resume} download="Moctar_Yonli.pdf">
                                         <button type="button" className="btn button secondary-button text-uppercase">Get cv</button>
                                    </a>
                               
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 banner-image">
                        <img src={BannerImg} alt="banner-img" className="img-fluid"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner
