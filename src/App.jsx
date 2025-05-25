import { useState } from "react"
import { LoadingScreen } from "./components/LoadingScreen"
import "./index.css"
import Navbar from "./components/Navbar"
import MobileMenu from "./components/MobileMenu"
import Home from "./components/sections/Home"
import About from "./components/sections/About"
import Projects from "./components/sections/Projects"
import Contact from "./components/sections/Contact"
import Footer from "./components/sections/Footer"
import { Resume } from "./components/sections/Resume"


function App() {
  const [isLoaded,setIsLoaded] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)


  return (
    <>
    {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)}/>}
      <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"} bg-black text-gray-100`}>

        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <About menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <Projects menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
         <Resume menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <Contact menuOpen={menuOpen} setMenuOpen={setMenuOpen}/> 
       
        <Footer/>
      </div>
      

    </>
  )
}

export default App
