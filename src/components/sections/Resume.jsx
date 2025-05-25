import RevealOnScroll from "../RevealOnScroll";

export function Resume({menuOpen}){

  const language = navigator.language.startsWith('sv') ? 'sv' : 'en'

  const texts = {

    sv: {
      resumeTitle: "Kevin Andersson CV 💻",
      resumeDescription: "Här finns mitt CV att kolla genom och ladda ner! 🤝",
      resumeLink: "Länk till mitt CV 😊"

    },
    en:{
      resumeTitle: "Kevin Andersson Resume 💻",
      resumeDescription: "Here is my Resume for you to view and download! 🤝",
      resumeLink: "Link to my Resume (In Swedish) 😊"

    }
  };

  const t = texts[language];

  return(

    <section id="resume" className={`flex items-center justify-center py-20 transition-all duration-500 ${menuOpen ? "opacity-10" : "opacity-100"}`}   >
      <RevealOnScroll>

      <div className="mx-auto px-4 w-full">
        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-red-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
          <h1 className="text-3xl text-center">{t.resumeTitle}</h1>
          <h2 className="text-2xl text-center mt-3 text-gray-200">{t.resumeDescription}</h2>
          <a href="https://drive.google.com/file/d/10a5fb5XJoKB8t3ThEOm30u7j4augj3UP/view?usp=drive_link" target="blank" className="flex justify-center mt-5 text-xl hover:text-gray-300" >{t.resumeLink}</a>
          
        </div>
        
      </div>
    </RevealOnScroll>
    </section>

  )

}