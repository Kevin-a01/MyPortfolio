import RevealOnScroll from "../RevealOnScroll";

function About({menuOpen}){
  const language = navigator.language.startsWith('sv') ? 'sv' : 'en'

  const texts = {
    sv: {
      aboutMeText: "Om mig",
      aboutMe: "Jag är en passionerad lärande individ som älskar att ständigt utöka mina kunskaper inom fullstack-utveckling. Jag gillar att utforska nya teknologier, och att förbättra mina färdigheter är en stark drivkraft för mig både som student och utvecklare.",
      education: "Utbildning",
      school: "Front-end utveckling - EC Utbildning (2024-Nuvarande)",
      api: "REST API-utveckling"
    },
    en: {
      aboutMeText: "About me",
      aboutMe: "I'm a passionate learner that loves to continuosly expand my knowledge in full-stack development. I enjoy exploring new technologies, and improving my skills is a strong motivation for me as both a student and a developer.",
      education: "Education",
      school: "Front-end development - EC Utbildning (2024-Present)",
      api: "REST API-development"
    }
  }

  const t = texts[language]

  const frontendSkills =[
    "HTML",
    "JavaScript",
    "CSS",
    "TailwindCSS",
    "React",
    "Angular"
  ]

  const backendSkills =[
    "ExpressJS",
    "Sqlite3",
    "Node.js",
    `${t.api}`
  ]
  
  return(
    <section id="about" className={`min-h-screen flex items-center justify-center py-20 transition-all duration-500 ${menuOpen ? "opacity-10" : "opacity-100"}`}>
  <RevealOnScroll>
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-l from-red-500 to-purple-600 bg-clip-text text-transparent  text-center">{t.aboutMeText}</h2>

        <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
          <p className="text-gray-300 mb-6">
            {t.aboutMe}
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
              <h3 className="text-2xl font-bold mb-4 text-center"> 🎓 {t.education}</h3>
                <ul className="text-center">
                  <li>
                     <strong>{t.school}</strong> 
                    
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