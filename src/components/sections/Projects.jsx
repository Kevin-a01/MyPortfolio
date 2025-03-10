function Projects(){

    return(
        <section id="projects" className="min-h-screen flex items-center justify-center py-20">
        <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-l from-red-500 to-purple-600 bg-clip-text text-transparent  text-center">Featured Projects</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-red-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">

                    <h3 className="text-xl font-bold mb-2">
                        E-Commerce Website
                    </h3>

                    <p className="text-gray-400 pb-3">This is a E-commerce project that i'm making for one of my courses called JavaScript2 and we are learning and buildning with React.  </p>
                    <div>
                        {["React","Express.js","Node.js","TailwindCSS"].map((tech, key) => (
                            <span key={key} className="bg-red-500/10 text-red-500 py-1 px-3 rounded-full text-sm hover:bg-red-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                            {tech}
                          </span>
                        ))}
                    </div>

                    <div className="flex justify-between items-center">
                        <a href="#" className="text-red-500 hover:text-red-400 pt-5">View Project</a>
                    </div>
                </div>
            </div>
        </div>
        </section>
    )

}
export default Projects;