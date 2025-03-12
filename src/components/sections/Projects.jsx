import RevealOnScroll from "../RevealOnScroll";

function Projects({menuOpen}){

    return(
        <section id="projects" className={`min-h-screen flex items-center justify-center py-20 transition-all duration-500 ${menuOpen ? "opacity-10" : "opacity-100"}`}>

      <RevealOnScroll>    
        <div className="max-w-5xl mx-auto px-4">

            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-l from-red-500 to-purple-600 bg-clip-text text-transparent  text-center">Featured Projects</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-red-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">

                    <h3 className="text-xl font-bold mb-2 text-gray-200">
                    FreakyFashion 1.0 / E-Commerce Website
                    </h3>

                    <p className="text-gray-400 pb-3">This is a E-commerce project that i'm making for one of my courses called JavaScript2 and we are learning React and are also buildning with it.</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["React","Express.js","Node.js","TailwindCSS"].map((tech, key) => (
                            <span key={key} className="bg-red-500/10 text-red-500 py-1 px-3 rounded-full text-sm hover:bg-red-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                            {tech}
                          </span>
                        ))}
                    </div>

                    <div className="flex justify-between items-center">
                        <a href="https://github.com/Kevin-a01/freakyfashion1.0" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-400 pt-5">View Project</a>
                    </div>

                </div>
                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-red-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">

                <h3 className="text-xl font-bold mb-2 text-gray-200">
                    EliteJewelry / E-Commerce Website
                </h3>

                    <p className="text-gray-400 pb-3">This is a E-commerce group project i was in with some other classmates to build this jewelry site for one of the courses focusing on Agil Projectmethods and UX/UI design and we were learing how to work in a team and how to build wireframes for the website.</p>
                    <div>
                        {["EJS","Express.js","Node.js","TailwindCSS"].map((tech, key) => (
                            <span key={key} className="bg-red-500/10 text-red-500 py-1 px-3 rounded-full text-sm hover:bg-red-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                            {tech}
                        </span>
                        ))}
                    </div>

                    <div className="flex justify-between items-center">
                        <a href="https://github.com/Dima-ja/EliteJewelry" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-400 pt-5">View Project</a>
                    </div>
                </div>
            </div>
        </div>
    </RevealOnScroll>     
</section>
    )

}
export default Projects;