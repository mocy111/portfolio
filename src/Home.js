import React from 'react'
import Projects from './Components/Projects'
import Navbar from './Components/Navbar'
import Banner from './Components/Banner'
import About from './Components/About'
import Brand from './Components/Brand'
import Footer from './Components/Footer'
const Home = () => {

    return (
        <> 
         <Navbar/>
       <main className="site-main">
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
