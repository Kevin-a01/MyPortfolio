import { useEffect } from "react";
import Home from "./sections/Home";

function Navbar({menuOpen, setMenuOpen}){

  useEffect(() => {

    document.body.style.overflow = menuOpen ? "hidden" : ""

  },[menuOpen])

  const language = navigator.language.startsWith('sv') ? 'sv' : 'en'

  const texts = {
    sv: {
      home: "Hem",
      about: "Om mig",
      projects: "Projekt",
      contact: "Kontakt"
    },
    en: {
      home: "Home",
      about: "About me",
      projects: "Projects",
      contact: "Contact"
    }
  };

  const t = texts[language]

  return(
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b-white/10 shadow-lg">

      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a className={`font-mono text-3xl font-bold md:text-4xl text-white transitionn-opacity duration-300 ${menuOpen ? "opacity-35" : "opacity-100"}`} href="/MyPortfolio">Port<span className="text-purple-500">Folio.</span></a>
          {!menuOpen && (
            <div className="w-7 h-7 relative cursor-pointer text-xl z-40 md:hidden" onClick={() => setMenuOpen((prev) => !prev)}>
            &#9776;
          </div>
          )}
          

          <div className="hidden md:flex items-center space-x-8 text-purple-500">
            <a href="#home" className="hover:text-white transition-colors">{t.home}</a>

            <a href="#about" className="hover:text-white transition-colors">{t.about}</a>
            
            <a href="#projects" className="hover:text-white transition-colors">{t.projects}</a>

            <a href="#contact" className="hover:text-white transition-colors">{t.contact}</a>

            

          </div>

        </div>
      </div>
    </nav>
  )

}


export default Navbar;