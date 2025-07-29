import RevealOnScroll from "../RevealOnScroll";

function Home({menuOpen}) {

  const language = navigator.language.startsWith('sv') ? 'sv' : 'en';

  const texts = {

    sv: {
      greeting: "Hej!, Mitt namn är Kevin Andersson",
      description: "Jag är en Frontend-utvecklingsstudent på EC Utbildning, passionerad över att skapa vackra och funktionella webbupplevelser. Jag tycker om att utforska både frontend- och backend-utveckling, men mitt huvudfokus ligger på frontend-teknologier.",
      viewProject: "Se Projekt",
      contactMe: "Kontakta Mig!"
      

    },
    en:{
      greeting: "Hi! , I'm Kevin Andersson!",
      description: "I'm a Frontend-Developer student at EC Utbildning, passionate about creating beautiful and functional web experiences. While I enjoy exploring both Frontend and Backend, my main focus is on the frontend technologies.",
      viewProject: "View Projects",
      contactMe: "Contact Me!"


    }

  };

  const t = texts[language];

  return(
    <section id="home" className={`min-h-screen flex items-center justify-center relative transition-all duration-500 ${menuOpen ? "opacity-10" : "opacity-100"} px-4 md:px-0`}>
    <RevealOnScroll>
      <div className={`text-center z-10 px-4`}>
        <h1 className="text-4xl md:text-6xl font-bold mb-6
        bg-gradient-to-r from-red-500 to bg-purple-600  leading-right bg-clip-text text-transparent pb-3">{t.greeting}</h1>

        <p className={`text-gray-400 text-lg mb-8 max-w-lg mx-auto md:text-xl`}>
          {t.description}
        </p>
        

        <div className="flex justify-center space-x-6">
            <a href="#projects" className="bg-red-500 text-white py-3 px-6 rounded-lg font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]">
              {t.viewProject}
            </a>

            <a href="#contact" className=" border border-red-500/50 py-3 px-6 rounded-lg font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-red-500/10">
              {t.contactMe}
            </a>
        </div>


      </div>
    </RevealOnScroll>
    </section>
  )

}

export default Home;