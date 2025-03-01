function Home({menuOpen, setMenuOpen}) {

  return(
    <section id="home" className={`min-h-screen flex items-center justify-center relative transition-all duration-500 ${menuOpen ? "opacity-10" : "opacity-100"}`}>

      <div className={`text-center z-10 px-4`}>
        <h1 className="text-4xl md:text-6xl font-bold mb-6
        bg-gradient-to-r from-red-500 to bg-purple-600  leading-right bg-clip-text text-transparent">Hi! , I'm Kevin Andersson!</h1>

        <p className={`text-gray-400 text-lg mb-8 max-w-lg mx-auto md:text-xl`}>
          I'm a Frontend-Developer student at EC Utbildning, passionate about crafting beautiful and functional web experiences. While I enjoy learning about both Frontend and Backend, the main focus is on the Frontend-Development.
        </p>
        

        <div className="flex justify-center space-x-6">
            <a href="#projects" className="bg-red-500 text-white py-3 px-6 rounded-lg font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]">
              View Projects
            </a>

            <a href="#contact" className=" border border-red-500/50 py-3 px-6 rounded-lg font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-red-500/10">
              Contact Me!
            </a>
        </div>


      </div>

    </section>
  )

}

export default Home;