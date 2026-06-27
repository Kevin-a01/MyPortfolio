import { useState } from "react";
import RevealOnScroll from "../RevealOnScroll";
function DegreeCertificate({ menuOpen }) {
  const language = navigator.language.startsWith("sv") ? "sv" : "en";
  const [isZoomed, setIsZoomed] = useState(false);

  const texts = {
    sv: {
      DegreeTitle: "Examens Bevis",
      DegreeDiscription:
        "Detta är mitt Examens bevis att jag har fått en godkänd examen!",
    },
    en: {
      DegreeTitle: "Degree Certificate",
      DegreeDiscription:
        "This is my degree certificate that proves that i have finished my education",
    },
  };

  const t = texts[language];

  return (
    <section
      id="degree"
      className={`flex items-center justify-center py-20 transition-all duration-300 w-full shrink-0 ${menuOpen ? "opacity-10" : "opacity-100"} `}
    >
      <RevealOnScroll>
        <div className="mx-auto px-4 w-full md:w-xl">
          <div
            className={`p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-red-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition`}
          >
            <h1 className="text-2xl text-center md:text-3xl">
              {t.DegreeTitle}
            </h1>

            <h2 className="text-lg mb-4 md:text-xl text-center mt-5 text-gray-400">
              {t.DegreeDiscription}
            </h2>

            <img
              onClick={() => setIsZoomed(!isZoomed)}
              src="/MyPortfolio/Examens_Bevis.png"
              alt=""
              className={`w-full h-1/2 mx-auto transition-transform duration-300 rounded-2xl ${isZoomed ? "scale-120 md:scale-135 " : "scale-100"}`}
            />
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
export default DegreeCertificate;
