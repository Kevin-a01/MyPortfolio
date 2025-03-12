import { useEffect } from "react";

function Navbar({menuOpen, setMenuOpen}){

  useEffect(() => {

    document.body.style.overflow = menuOpen ? "hidden" : ""

  },[menuOpen])

  return(
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b-white/10 shadow-lg">

      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a className={`font-mono text-3xl font-bold md:text-4xl text-white transitionn-opacity duration-300 ${menuOpen ? "opacity-35" : "opacity-100"}`} href="/">Port<span className="text-purple-500">Folio.</span></a>
          {!menuOpen && (
            <div className="w-7 h-7 relative cursor-pointer text-xl z-40 md:hidden" onClick={() => setMenuOpen((prev) => !prev)}>
            &#9776;
          </div>
          )}
          

          <div className="hidden md:flex items-center space-x-8 text-purple-500">
            <a href="#home" className="hover:text-white transition-colors">Home</a>

            <a href="#about" className="hover:text-white transition-colors">About</a>
            
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>

            <a href="#contact" className="hover:text-white transition-colors">Contact</a>

            

          </div>

        </div>
      </div>
    </nav>
  )

}


export default Navbar;