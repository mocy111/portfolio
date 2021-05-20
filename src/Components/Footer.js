import React from 'react'
import logo from '../img/logo.png'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';



const Footer = () => {

    const year = new Date().getFullYear()

    return (
        <footer className="footer-area" id="contact">
        <div className="container">
            <div className="">
                <div className="site-logo text-center py-4">
                    <a href="!#"><img src={logo} alt="logo"/></a>
                </div>
                    <div className="social text-center">
                        <h5 className="text-uppercase">Follow me</h5>
                        <div className="row ">
                                        <div className="col" >
                                            <a href='https://www.facebook.com/moctar.yonli.5' target="_blank" rel="noopener noreferrer" >
                                                <FacebookIcon/>
                                            </a>  
                                        </div>
                                        
                                        <div className="col ">
                                            <a href='https://twitter.com/moctar_yonli' target="_blank" rel="noopener noreferrer" >
                                                <TwitterIcon />
                                            </a>
                                        </div>
                                        
                                        
                                            <div className="col">
                                            <a href='https://github.com/mocy111' target="_blank" rel="noopener noreferrer" >
                                                <GitHubIcon/>
                                            </a>
                                            </div>
                                            
                                            <div className="col">
                                            <a href='https://www.linkedin.com/in/moctar-yonli-b4955a203/' target="_blank" rel="noopener noreferrer" >
                                                <LinkedInIcon/>
                                            </a>
                                            </div>
                        </div>
                     
                    </div>
               
                <div className="copyrights text-center py-3">
                    <p className="para">
                        Copyright ©{year} All rights reserved - Moctar Yonli
                    </p>
                </div>
            </div>
        </div>
    </footer>
    )
}

export default Footer
