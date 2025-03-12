import RevealOnScroll from "../RevealOnScroll";

function Projects({menuOpen}){

    const language = navigator.language.startsWith('sv') ? 'sv' : 'en'

    const texts = {
    sv: {
        featuredProjects: "Utvalda Projekt",
        projectTitle: "FreakyFashion 1.0/E-handels hemsida",
        projectTitle2: "EliteJewelry/E-handels hemsida",
        projectDescription: "Det här är ett e-handelsprojekt som jag utvecklar för en av mina kurser, JavaScript 2, där vi lär oss React och bygger med det.",
        projectDescription2: "Det här är ett e-handelsgrupprojekt som jag arbetade med tillsammans med några klasskamrater, där vi byggde en smyckeswebbplats för en kurs som fokuserade på agila projektmetoder och UX/UI-design. Vi lärde oss hur man samarbetar i team och skapar wireframes för webbplatsen.",
        viewProject: "Se Projekt"
    },

    en: {
        featuredProjects: "Featured Projects",
        projectTitle: "FreakyFashion 1.0 / E-Commerce Website",
        projectTitle2: "EliteJewelry / E-Commerce Website",
        projectDescription: "This is a e-commerce project I'm developing for one of my courses, JavaScript2 where we are learning React and buildning with it.",
        projectDescription2: "This is an e-commerce group project I worked on with classmates, building a jewelry website for a course focused on Agile project methods and UX/UI design. We learned how to collaborate as a team and create wireframes for the website.",
        viewProject: "View Project"

    }
    };

    const t = texts[language]

    return(
        <section id="projects" className={`min-h-screen flex items-center justify-center py-20 transition-all duration-500 ${menuOpen ? "opacity-10" : "opacity-100"}`}>

      <RevealOnScroll>    
        <div className="max-w-5xl mx-auto px-4">

            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-l from-red-500 to-purple-600 bg-clip-text text-transparent  text-center">{t.featuredProjects}</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-red-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">

                    <h3 className="text-xl font-bold mb-2 text-gray-200">
                    {t.projectTitle}
                    </h3>

                    <p className="text-gray-400 pb-3">{t.projectDescription}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["React","Express.js","Node.js","TailwindCSS"].map((tech, key) => (
                            <span key={key} className="bg-red-500/10 text-red-500 py-1 px-3 rounded-full text-sm hover:bg-red-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                            {tech}
                          </span>
                        ))}
                    </div>

                    <div className="flex justify-between items-center">
                        <a href="https://github.com/Kevin-a01/freakyfashion1.0" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-400 pt-5">{t.viewProject}</a>
                    </div>

                </div>
                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-red-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">

                <h3 className="text-xl font-bold mb-2 text-gray-200">
                    {t.projectTitle2}
                </h3>

                    <p className="text-gray-400 pb-3">{t.projectDescription2}</p>
                    <div>
                        {["EJS","Express.js","Node.js","TailwindCSS"].map((tech, key) => (
                            <span key={key} className="bg-red-500/10 text-red-500 py-1 px-3 rounded-full text-sm hover:bg-red-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                            {tech}
                        </span>
                        ))}
                    </div>

                    <div className="flex justify-between items-center">
                        <a href="https://github.com/Dima-ja/EliteJewelry" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-400 pt-5">{t.viewProject}</a>
                    </div>
                </div>
            </div>
        </div>
    </RevealOnScroll>     
</section>
    )

}
export default Projects;