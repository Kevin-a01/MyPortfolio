import { useEffect, useState } from "react";

function MobileMenu({menuOpen, setMenuOpen}){

  useEffect(() => {

    document.body.style.overflow = menuOpen ? "hidden" : ""

  }, [menuOpen]);

  return(
    <div className={`fixed top-0 left-0 w-full bg-[10, 10, 10, 0.8] z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out ${menuOpen ? "h-screen opacity-100 pointer-events-auto" : "h-0 opacity-0 pointer-events-none"}`}>


      <button onClick={() => setMenuOpen(false)} className="absolute top-3 right-6 text-white text-3xl focus:outline-none cursor-pointer transition-transform duration-300 hover:scale-110" aria-label="Close Menu">
        &times;
      </button>

            <a href="#home" onClick={() => setMenuOpen(false)} className={`text-2xl font-semibold text-purple-500 my-4 transform transition-transform duration-300 ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>Home</a>

            <a href="#about" onClick={() => setMenuOpen(false)} className={`text-2xl font-semibold text-purple-500 my-4 transform transition-transform duration-300 ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>About</a>
            
            <a href="#projects" onClick={() => setMenuOpen(false)} className={`text-2xl font-semibold text-purple-500 my-4 transform transition-transform duration-300 ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>Projects</a>

            <a href="#contact" onClick={() => setMenuOpen(false)} className={`text-2xl font-semibold text-purple-500 my-4 transform transition-transform duration-300 ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>Contact</a>

    </div>
  )

}


export default MobileMenu;