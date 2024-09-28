import React, { useRef, useEffect } from "react";
import { ArrowUpCircle } from "lucide-react";

const TotemSquad = ({ cards }) => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const handleWheel = (e) => {
      const container = scrollContainerRef.current;
      if (container) {
        if (
          (container.scrollTop === 0 && e.deltaY < 0) ||
          (container.scrollHeight - container.clientHeight <=
            container.scrollTop &&
            e.deltaY > 0)
        ) {
          e.preventDefault();
        }
      }
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("wheel", handleWheel, { passive: false });
    }

    return () => {
      if (container) {
        container.removeEventListener("wheel", handleWheel);
      }
    };
  }, []);

  return (
    <div className="max-w-full flex flex-col lg:flex-row bg-[#000e00] text-white">
      {/* Description Section */}
      <div className="w-full lg:w-1/2 mb-8 lg:mb-0 px-4">
        <h1 className="text-4xl sm:text-5xl font-bold mt-8 lg:mt-20 text-center lg:text-left">
          TOTEM'S SQUAD
        </h1>
        <p className="mt-8 text-xl sm:text-2xl text-center lg:text-left">
          At Totem Interactive, our culture is built on innovation and
          execution. We're not just creators; we're a collective that turns
          visionary ideas into reality, constantly pushing the limits of what
          can be achieved.
        </p>
      </div>

      {/* Card Section */}
      <div className="w-full lg:w-1/2">
        <div
          ref={scrollContainerRef}
          className="w-full h-[400px] lg:h-[500px] overflow-y-auto grid grid-cols-1 sm:grid-cols-2 gap-8 px-4"
        >
          {cards.map((card, index) => (
            <div key={index} className="bg-[#000e00] rounded-lg shadow-lg">
              <img
                src={card.image}
                alt={card.name}
                className="w-full h-full object-cover rounded"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TotemSquad;
