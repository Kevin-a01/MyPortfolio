import { useRef } from "react";
import DegreeCertificate from "./sections/Degree_Certificate";
import { Resume } from "./sections/Resume";
import { ArrowLeft, ArrowRight } from "lucide-react";

function SideScroller({ menuOpen }) {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = window.innerWidth;
      if (direction === "left") {
        scrollContainerRef.current.scrollLeft -= scrollAmount;
      } else {
        scrollContainerRef.current.scrollLeft += scrollAmount;
      }
    }
  };

  return (
    <>
      <div
        className={`flex items-center justify-center py-20 transition-all duration-300 w-full shrink-0 ${menuOpen ? "opacity-10" : "opacity-100"}`}
      >
        <div className="relative w-full group sm:hidden md:block">
          <button
            onClick={() => scroll("left")}
            className="absolute left-150 top-150 -translate-y-1/2 z-10"
          >
            <ArrowLeft size={30} />
          </button>
          <div
            ref={scrollContainerRef}
            className=" scrollbar-none flex snap-x snap-mandatory scroll-smooth overflow-x-auto w-full scrollbar-none "
          >
            <Resume />

            <DegreeCertificate />
          </div>
          <button
            onClick={() => scroll("right")}
            className="absolute right-150 top-150 -translate-y-1/2 z-10"
          >
            <ArrowRight size={30} />
          </button>
        </div>
      </div>
    </>
  );
}

export default SideScroller;
