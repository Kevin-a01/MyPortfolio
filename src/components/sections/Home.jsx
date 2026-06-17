import RevealOnScroll from "../RevealOnScroll";

function Home({ menuOpen }) {
  const language = navigator.language.startsWith("sv") ? "sv" : "en";

  const texts = {
    sv: {
      greeting: "Hej!, Mitt namn är Kevin Andersson",
      description:
        "Jag är en nyexeminerad Frontend/Fullstackutvecklare. Jag är passionerad över att skapa vackra och funktionella webbupplevelser. Jag tycker om att utforska både frontend- och backend-utveckling och alltid utveckla mina kundskaper ännu mer!",
      viewProject: "Se Projekt",
      contactMe: "Kontakta Mig!",
    },
    en: {
      greeting: "Hi! , My name is Kevin Andersson!",
      description:
        "I am a recent graduate in Frontend/Fullstack Development with a passion for creating beautiful and functional web experiences. I enjoy exploring both frontend and backend development, and I am always looking to expand my skillset!",
      viewProject: "View Projects",
      contactMe: "Contact Me!",
    },
  };

  const t = texts[language];

  return (
    <section
      id="home"
      className={`min-h-screen flex items-center justify-center relative transition-all duration-500 ${menuOpen ? "opacity-10" : "opacity-100"} px-4 md:px-0`}
    >
      <RevealOnScroll>
        <div className={`text-center z-10 px-4`}>
          <h1
            className="text-4xl md:text-6xl font-bold mb-6
        bg-gradient-to-r from-red-500 to bg-purple-600  leading-right bg-clip-text text-transparent pb-3"
          >
            {t.greeting}
          </h1>

          <p
            className={`text-gray-400 text-lg mb-8 max-w-lg mx-auto md:text-xl`}
          >
            {t.description}
          </p>

          <div className="flex justify-center space-x-6">
            <a
              href="#projects"
              className="bg-red-500 text-white py-3 px-6 rounded-lg font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
            >
              {t.viewProject}
            </a>

            <a
              href="#contact"
              className=" border border-red-500/50 py-3 px-6 rounded-lg font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-red-500/10"
            >
              {t.contactMe}
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}

export default Home;
