import React from 'react'
import Projects from './Components/Projects'
import Banner from './Components/Banner'
import About from './Components/About'
import Brand from './Components/Brand'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
const Home = () => {

    return (
        <> 
       <main className="site-main">
            <Navbar/>
            <Banner/>
            <About/>
            <Brand/>
            <Projects />
            <Footer/>
       </main>
        </>
      
    )
}

export default Home
