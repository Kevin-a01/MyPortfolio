import { useState } from "react";
import RevealOnScroll from "../RevealOnScroll";

export function Resume({ menuOpen }) {
  const [isZoomed, setIsZoomed] = useState(false);

  const language = navigator.language.startsWith("sv") ? "sv" : "en";

  const texts = {
    sv: {
      resumeTitle: "Kevin Andersson CV 💻",
      resumeDescription: "Här finns mitt CV att kolla genom och ladda ner! 🤝",
      resumeLink: "Länk till mitt CV 😊",
      scroll: "Dra åt sidan för att se mer!",
    },
    en: {
      resumeTitle: "Kevin Andersson Resume 💻",
      resumeDescription: "Here is my Resume for you to view and download! 🤝",
      resumeLink: "Link to my Resume (In Swedish) 😊",
      scroll: "Scroll to see more!",
    },
  };

  const t = texts[language];

  return (
    <section
      id="resume"
      className={`flex items-center justify-center py-20 transition-all duration-300 w-full shrink-0 ${menuOpen ? "opacity-10" : "opacity-100"}`}
    >
      <RevealOnScroll>
        <h2 className="text-center text-xl md:hidden mb-5">{t.scroll}</h2>
        <div className="mx-auto px-4 w-full md:w-xl">
          <div
            className={`p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-red-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition`}
          >
            <h1 className="text-2xl text-center md:text-3xl">
              {t.resumeTitle}
            </h1>
            <h2 className="text-lg mb-4 md:text-xl text-center mt-5 text-gray-400">
              {t.resumeDescription}
            </h2>
            <img
              onClick={() => setIsZoomed(!isZoomed)}
              src="/MyPortfolio/fullstack_cv.jpg"
              alt=""
              className={`w-full h-1/2 mx-auto transition-transform duration-300 rounded-2xl ${isZoomed ? "scale-120 md:scale-135 " : "scale-100"}`}
            />
            <a
              href="/MyPortfolio/Kevin_Andersson_cv.pdf"
              download
              className="flex justify-center mt-5 text-xl hover:text-red-400 text-gray-400 cursor-pointer w-fit mx-auto"
            >
              <button className="cursor-pointer w-fit">{t.resumeLink}</button>
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
