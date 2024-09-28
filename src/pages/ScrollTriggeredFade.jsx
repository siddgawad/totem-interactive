import React, { useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";

const ScrollTriggeredFade = ({
  children,
  triggerPoint,
  delay = 0,
  duration = 1000,
}) => {
  const [isTriggered, setIsTriggered] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollProgress = scrollPosition / (documentHeight - windowHeight);

      if (scrollProgress >= triggerPoint && !isTriggered) {
        setIsTriggered(true);
      }
    };

    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Check initial scroll position

    return () => window.removeEventListener("scroll", checkScroll);
  }, [triggerPoint, isTriggered]);

  const props = useSpring({
    opacity: isTriggered ? 1 : 0,
    transform: isTriggered ? "translateY(0)" : "translateY(50px)",
    delay: isTriggered ? delay : 0,
    config: { duration: duration },
  });

  return <animated.div style={props}>{children}</animated.div>;
};

export default ScrollTriggeredFade;
