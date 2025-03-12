import RevealOnScroll from "../RevealOnScroll";

function About({menuOpen}){

  const frontendSkills =[
    "HTML",
    "JavaScript",
    "CSS",
    "TailwindCSS",
    "React",
    "Still learning"
  ]

  const backendSkills =[
    "ExpressJS",
    "Sqlite3",
    "Node.js",
    "REST API-development",
    "Still learning"
    
  ]
  
  return(
    <section id="about" className={`min-h-screen flex items-center justify-center py-20 transition-all duration-500 ${menuOpen ? "opacity-10" : "opacity-100"}`}>
  <RevealOnScroll>
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-l from-red-500 to-purple-600 bg-clip-text text-transparent  text-center">About Me</h2>

        <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
          <p className="text-gray-300 mb-6">
            I'm a passionate learner that loves to keep learning and keep buildning up my knowledge  in Fullstack-Development. I love to explore and learn new technologies and improving my skills is a big motivation for me as a student and a developer.
          </p>
          </div>

          

        
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
          <div className="rounded-lg p-6 hover:translate-y-1 transition-all ">
            <h3 className="text-xl font-bold mb-4">
              Frontend
            </h3>
            <div className="flex flex-wrap gap-2">
              {frontendSkills.map((tech, key) => (
                <span key={key} className="bg-red-500/10 text-red-500 py-1 px-3 rounded-full text-sm hover:bg-red-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        
          <div className="rounded-lg p-6 hover:translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4">
              Backend
            </h3>
            <div className="flex flex-wrap gap-2">
              {backendSkills.map((tech, key) => (
                <span key={key} className="bg-red-500/10 text-red-500 py-1 px-3 rounded-full text-sm hover:bg-red-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:w-full gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-2xl font-bold mb-4 text-center"> 🎓 Education</h3>
                <ul className="text-center">
                  <li>
                     <strong>Frontend-Developer-Student - EC Utbildning </strong> 
                    (2024-Present)
                  </li>
                </ul>
              </div>
          </div>
      </div>
  </RevealOnScroll>

      
    </section>
  )

}
export default About;