import React from 'react'
import html from "../img/brands/html.png"
import css from "../img/brands/css.svg"
import node from "../img/brands/node.png"
import bootstrap from "../img/brands/bootstrap.png"
import materialize from "../img/brands/materialize.png"
import js from "../img/brands/js.png"
import wordpress from "../img/brands/wordpress.png"
import reactImg from "../img/brands/react.png"
import firebase from "../img/brands/firebase.png"
import CallIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Email';
const Brand = () => {
    return (
        <section className="brand-area">
        <div className="container-fluid">
            <div className="row">
                <div className="col-xl-6 col-lg-12 col-md-12">
                    <div className="first-row row">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-brand">
                                <img src={html} alt="Brand-1 " style={{width:'60px'}}/>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-brand">
                                <img src={css} alt="Brand-2 " style={{width:'45px'}} />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-brand">
                                <img src={bootstrap} alt="Brand-3 " style={{width:'75px'}}/>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-brand">
                                <img src={materialize} alt="Brand-4"/>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-brand">
                                <img src={wordpress} alt="Brand-5 "/>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-brand">
                                <img src={js} alt="Brand-6" style={{width:'60px'}}/>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-brand">
                                <img src={node} alt="Brand-7 "/>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-brand">
                                <img src={reactImg} alt="Brand-8 "/>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-brand">
                                <img src={firebase} alt="Brand-9"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-12 col-md-12">
                    <div className="experience-area">
                        <div className="d-flex flex-row years-area">
                            {/* <h2 className="p-3 years">10</h2> */}
                            <h1>
                                <span className='text-uppercase'>Some technologies i work with</span>
                               
                            </h1>
                        </div>
                        <div className="d-flex flex-row flex-wrap call-area">
                            <span><EmailIcon fontSize="large"/> </span>
                            <div className="call-now">
                                <a href="mailto:moctaryonli@gmail.com" className="text-uppercase h4 font-roboto">Contact me</a>
                                <span className="font-roboto py-2">moctaryonli@gmail.com</span>
                            </div>
                        </div>
                        <div className="d-flex flex-row flex-wrap call-area">
                            <span><CallIcon fontSize="large"/> </span>
                            <div className="call-now">
                                <a  href="tel:+22790653311" className="text-uppercase h4 font-roboto">Call Now</a>
                                <span className="font-roboto py-2">(+227) 90653311</span>
                            </div>
                        </div>
                        
                        <div className="bg-panel"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Brand
