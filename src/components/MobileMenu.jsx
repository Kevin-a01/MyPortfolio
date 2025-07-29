import { useEffect, useState } from "react";

function MobileMenu({menuOpen, setMenuOpen}){

  useEffect(() => {

    document.body.style.overflow = menuOpen ? "hidden" : ""

  }, [menuOpen]);

  const language = navigator.language.startsWith('sv') ? 'sv' : 'en'

  const texts = {
    sv: {
      home: "Hem",
      about: "Om mig",
      projects: "Projekt",
      contact: "Kontakt",
      resume: "Mitt CV"
    },
    en: {
      home: "Home",
      about: "About me",
      projects: "Projects",
      contact: "Contact",
      resume: "My Resume"
    }
  };

  const t = texts[language]

  return(
    <div className={`fixed top-0 left-0 w-full bg-[10, 10, 10, 0.8] z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out ${menuOpen ? "h-screen opacity-100 pointer-events-auto" : "h-0 opacity-0 pointer-events-none"}`}>


      <button onClick={() => setMenuOpen(false)} className="absolute top-3 right-6 text-white text-3xl focus:outline-none cursor-pointer transition-transform duration-300 hover:scale-110" aria-label="Close Menu">
        &times;
      </button>

            <a href="#home" onClick={() => setMenuOpen(false)} className={`text-2xl font-semibold my-4 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent transform transition-transform duration-300 hover:scale-150 ease-in ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>{t.home}</a>

            <a href="#about" onClick={() => setMenuOpen(false)} className={`text-2xl font-semibold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent my-4 transform transition-transform duration-300 hover:scale-150 ease-in  ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>{t.about}</a>
            
            <a href="#projects" onClick={() => setMenuOpen(false)} className={`text-2xl font-semibold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent my-4 transform transition-transform duration-300 hover:scale-150 ease-in ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>{t.projects}</a>

            <a href="#contact" onClick={() => setMenuOpen(false)} className={`text-2xl font-semibold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent my-4 transform transition-transform duration-300 hover:scale-150 ease-in ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>{t.contact}</a>

            <a href="#resume" onClick={() => setMenuOpen(false)} className={`text-2xl font-semibold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent my-4 transform transition-transform duration-300 hover:scale-150 ease-in ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>{t.resume}</a>

    </div>
  )

}


export default MobileMenu;