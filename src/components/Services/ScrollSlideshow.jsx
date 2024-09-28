import React, { useState, useEffect, useRef } from "react";
import saas from "../../assets/service/saas.png";
import webd from "../../assets/service/webdesign.jpg";
import game from "../../assets/service/game.png";
import upbutton from "../../assets/upbutton.png"; // Ensure this path is correct

const slides = [
  {
    id: 1,
    title: "Software Development",
    buttonText: "View Our Work",
    imageUrl: saas,
  },
  {
    id: 2,
    title: "AR/VR Applications",
    buttonText: "Learn More",
    imageUrl: webd,
  },
  {
    id: 3,
    title: "iOS/Android App Development",
    buttonText: "Learn More",
    imageUrl: game,
  },
  {
    id: 4,
    title: "Web Development",
    buttonText: "View Our Work",
    imageUrl: saas,
  },
  {
    id: 5,
    title: "Game Development",
    buttonText: "Learn More",
    imageUrl: webd,
  },
  {
    id: 6,
    title: "3D Pipeline Services",
    buttonText: "Learn More",
    imageUrl: game,
  },
  {
    id: 7,
    title: "UI/UX Design",
    buttonText: "Learn More",
    imageUrl: webd,
  },
  {
    id: 8,
    title: "Creative Consulting",
    buttonText: "Learn More",
    imageUrl: game,
  },
];

const ScrollSlideshow = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef(null);
  const touchStartRef = useRef(0);

  useEffect(() => {
    const handleScroll = (event) => {
      event.preventDefault();
      const delta = event.deltaY;
      const newPosition = scrollPosition + delta;
      const maxScroll = (slides.length - 1) * window.innerHeight;
      setScrollPosition(Math.max(0, Math.min(newPosition, maxScroll)));
    };

    const handleTouchStart = (event) => {
      touchStartRef.current = event.touches[0].clientY;
    };

    const handleTouchMove = (event) => {
      const touchY = event.touches[0].clientY;
      const delta = touchStartRef.current - touchY; // Calculate the difference
      touchStartRef.current = touchY; // Update the start position for the next move
      const newPosition = scrollPosition + delta;
      const maxScroll = (slides.length - 1) * window.innerHeight;
      setScrollPosition(Math.max(0, Math.min(newPosition, maxScroll)));
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("wheel", handleScroll, { passive: false });
      container.addEventListener("touchstart", handleTouchStart, {
        passive: false,
      });
      container.addEventListener("touchmove", handleTouchMove, {
        passive: false,
      });
    }

    return () => {
      if (container) {
        container.removeEventListener("wheel", handleScroll);
        container.removeEventListener("touchstart", handleTouchStart);
        container.removeEventListener("touchmove", handleTouchMove);
      }
    };
  }, [scrollPosition]);

  const currentIndex = Math.floor(scrollPosition / window.innerHeight);
  const isLastSlide = currentIndex === slides.length - 1;

  const scrollToTop = () => {
    setScrollPosition(0);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div ref={containerRef} className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => {
        const offset = scrollPosition - index * window.innerHeight;
        const translateY = Math.max(0, offset);
        const opacity =
          1 - Math.min(1, Math.max(0, offset / window.innerHeight));

        return (
          <div
            key={slide.id}
            className="absolute inset-0 h-full w-full"
            style={{
              backgroundImage: `url(${slide.imageUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              transform: `translateY(${translateY}px)`,
              opacity: opacity,
              zIndex: slides.length - index,
              transition: "transform 0.1s ease-out, opacity 0.1s ease-out",
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center">
              <h2 className="text-white text-4xl md:text-6xl font-bold mb-4">
                {slide.title}
              </h2>
              <button className="bg-green-500 text-white px-6 py-3 rounded-full object-contain">
                {slide.buttonText}
              </button>
            </div>
          </div>
        );
      })}
      {isLastSlide && (
        <button
          onClick={scrollToTop}
          className="absolute bottom-4 left-8 transform -translate-x-1/2 z-50 transition-opacity duration-300 ease-in-out"
          style={{ opacity: isLastSlide ? 1 : 0 }}
        >
          <img src={upbutton} alt="Go to top" className="w-18 h-12" />
        </button>
      )}
    </div>
  );
};

export default ScrollSlideshow;
