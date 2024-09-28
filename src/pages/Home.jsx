import React, { useState, Suspense, useEffect, useRef, useMemo } from "react";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { useSpring, animated, config } from "@react-spring/web";
import Loader from "../components/Home/Loader";
import Totem from "../models/totem";
import Navbar from "../components/Home/Navbar";
import { ChevronDown } from "lucide-react";
import { Sky } from "@react-three/drei";
import FloatingParticles from "../components/Home/FloatingParticles";
import * as THREE from "three";
import source from "../assets/loadvid.mp4";
import Footer from "../components/Home/Footer";
import AuroraSky from "../models/AuroraSky";
import ScrollableImageDescription from "../ScrollableImageDescription";
import ScrollAnimationComponent from "../ScrollableAnimationComponent";

const AnimatedTotem = ({ scrollProgress, ...props }) => {
  const { position, scale, rotation } = useSpring({
    position: [0, -1.5, 2],
    scale: [1.5, 1.5, 1.5],
    rotation: [0, 0, 0],
    config: { mass: 1, tension: 200, friction: 120 },
  });

  return (
    <Totem position={position} scale={scale} rotation={rotation} {...props} />
  );
};

const CameraController = ({ scrollProgress }) => {
  const { camera } = useThree();
  useFrame(() => {
    camera.position.z = 2;
    camera.position.x = 0;
    camera.position.y = 0;
    camera.lookAt(0, 0, 0);
  });
  return null;
};

const getSkyColor = (hour) => {
  const midnight = new THREE.Color("#1c1c2a");
  const dawn = new THREE.Color("#f0b07c");
  const noon = new THREE.Color("#87CEEB");
  const dusk = new THREE.Color("#FFA07A");

  if (hour >= 0 && hour < 6) {
    return midnight.lerp(dawn, hour / 6);
  } else if (hour >= 6 && hour < 12) {
    return dawn.lerp(noon, (hour - 6) / 6);
  } else if (hour >= 12 && hour < 18) {
    return noon.lerp(dusk, (hour - 12) / 6);
  } else {
    return dusk.lerp(midnight, (hour - 18) / 6);
  }
};

const FadeInText = ({ children, delay = 0 }) => {
  const props = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay,
    config: { duration: 2000 },
  });
  return <animated.div style={props}>{children}</animated.div>;
};

const ScrollFadeIn = ({ children, scrollProgress, threshold, delay = 0 }) => {
  const props = useSpring({
    opacity: scrollProgress > threshold ? 1 : 0,
    transform: `translateY(${scrollProgress > threshold ? 0 : 20}px)`,
    config: { duration: 1000 },
    delay: scrollProgress > threshold ? delay : 0,
  });
  return <animated.div style={props}>{children}</animated.div>;
};

const MobileOptimizedCanvas = React.memo(({ children }) => {
  return (
    <Canvas
      className="w-full h-full"
      camera={{ position: [0, 0, 5], fov: 75, near: 0.1, far: 1000 }}
      gl={{ powerPreference: "high-performance", antialias: false }}
    >
      {children}
    </Canvas>
  );
});

const Home = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [navOpen, setNavOpen] = useState(false);
  const [videoEnded, setVideoEnded] = useState(false);
  const containerRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [activeSection, setActiveSection] = useState(null);
  const [internalScrollActive, setInternalScrollActive] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const handleVideoEnd = () => {
    setVideoEnded(true);
  };

  const handleChevronClick = () => {
    setActiveSection("main");
    setNavOpen(true);
  };

  const handleInternalScrollEnd = () => {
    setInternalScrollActive(false);
  };

  const skyColor = useMemo(() => {
    const hour = currentTime.getHours() + currentTime.getMinutes() / 60;
    return getSkyColor(hour);
  }, [currentTime]);

  const VideoLoader = ({ onVideoEnd }) => {
    const videoRef = useRef(null);

    useEffect(() => {
      const video = videoRef.current;
      if (video) {
        video.addEventListener("ended", onVideoEnd);
      }
      return () => {
        if (video) {
          video.removeEventListener("ended", onVideoEnd);
        }
      };
    }, [onVideoEnd]);

    return (
      <div className="fixed top-0 left-0 w-full h-full z-50 bg-black">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay
          muted
        >
          <source src={source} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  };

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const scrollPosition = window.scrollY;
        const containerHeight = containerRef.current.offsetHeight;
        const windowHeight = window.innerHeight;
        let progress = Math.min(
          scrollPosition / (containerHeight - windowHeight),
          1
        );

        if (progress > 0.77 && !internalScrollActive) {
          setInternalScrollActive(true);
        }

        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [internalScrollActive]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const smoothScroll = (e) => {
      e.preventDefault();
      const targetId = e.currentTarget.getAttribute("href").slice(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => link.addEventListener("click", smoothScroll));

    return () =>
      links.forEach((link) => link.removeEventListener("click", smoothScroll));
  }, []);

  const animations = {
    content: useSpring({
      opacity: scrollProgress < 0.33 ? 1 : 0,
      transform: `translateX(${scrollProgress < 0.33 ? "0%" : "-100%"})`,
      config: config.slow,
    }),
    aboutContent: useSpring({
      opacity: scrollProgress > 0.33 && scrollProgress < 0.67 ? 1 : 0,
      transform: `translateX(${
        scrollProgress > 0.33 && scrollProgress < 0.67 ? "0%" : "100%"
      })`,
      config: config.slow,
    }),
    servicesContent: useSpring({
      opacity: scrollProgress > 0.77 ? 1 : 0,
      config: { duration: 500 },
    }),
  };

  if (!videoEnded) {
    return <VideoLoader onVideoEnd={handleVideoEnd} />;
  }

  return (
    <>
      <Navbar
        navOpen={navOpen}
        setNavOpen={setNavOpen}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <div
        ref={containerRef}
        className="relative w-full min-h-[300vh] bg-black"
      >
        <div
          className={`sticky top-0 w-full h-screen ${
            isMobile ? "flex flex-col" : ""
          } overflow-hidden`}
        >
          <div className={`w-full ${isMobile ? "h-1/2" : "h-full"} p-2 sm:p-4`}>
            <div className="w-full h-full rounded-xl sm:rounded-3xl overflow-hidden border border-[#000e00] sm:border-2">
              {isMobile ? (
                <MobileOptimizedCanvas>
                  <CameraController scrollProgress={scrollProgress} />
                  <Suspense fallback={<Loader />}>
                    <AuroraSky />
                    <AnimatedTotem scrollProgress={scrollProgress} />
                    <FloatingParticles
                      count={250}
                      color="#00a730"
                      size={0.02}
                    />
                  </Suspense>
                </MobileOptimizedCanvas>
              ) : (
                <Canvas
                  className="w-full h-full"
                  camera={{
                    position: [0, 0, 5],
                    fov: 75,
                    near: 0.1,
                    far: 1000,
                  }}
                >
                  <CameraController scrollProgress={scrollProgress} />
                  <Suspense fallback={<Loader />}>
                    <Sky
                      distance={500}
                      sunPosition={[
                        0,
                        Math.sin((currentTime.getHours() * Math.PI) / 12) * 100,
                        -100,
                      ]}
                      inclination={0.5}
                      azimuth={0.25}
                    />
                    <color
                      attach="background"
                      args={[skyColor.r, skyColor.g, skyColor.b]}
                    />
                    <AuroraSky />
                    <AnimatedTotem scrollProgress={scrollProgress} />
                    <FloatingParticles
                      count={500}
                      color="#00a730"
                      size={0.03}
                    />
                  </Suspense>
                </Canvas>
              )}
            </div>
          </div>

          <animated.div
            style={animations.content}
            className={`${
              isMobile ? "w-full h-1/2" : "absolute top-0 left-0 w-1/2 h-full"
            } flex flex-col justify-center items-start p-4 sm:p-8 md:p-16 z-20`}
          >
            <div className="w-full">
              <FadeInText delay={500}>
                <p className="text-xs sm:text-sm text-white mb-2">
                  Bringing the revolution by
                </p>
              </FadeInText>
              <FadeInText delay={1000}>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-2">
                  Crafting Innovation <br />
                  from
                  <br />
                  <span className="text-green-500">Inspiration</span>
                </h1>
              </FadeInText>
              <FadeInText delay={1500}>
                <p className="text-xs sm:text-sm md:text-base text-white mt-4 max-w-md">
                  We leverage our product-based thinking to craft service
                  solutions for Brands & businesses
                </p>
              </FadeInText>
            </div>
            <FadeInText delay={1500}>
              <a href="#open-nav" id="nav-trigger" aria-label="Open navigation">
                <button
                  onClick={handleChevronClick}
                  className="mt-8 sm:mt-16 md:mt-40 bg-white bg-opacity-20 hover:bg-opacity-30 text-white rounded-full p-2 transition-all duration-300 ease-in-out z-[30] pointer-events-auto relative"
                >
                  <ChevronDown size={20} className="sm:w-6 sm:h-6" />
                </button>
              </a>
            </FadeInText>
          </animated.div>

          <animated.div
            style={animations.aboutContent}
            className={`${
              isMobile ? "w-full h-1/2" : "absolute top-0 right-0 w-1/2 h-full"
            } flex flex-col justify-center items-center p-4 sm:p-8 md:p-16 z-20`}
          >
            <ScrollFadeIn
              scrollProgress={scrollProgress}
              threshold={0.5}
              delay={500}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-4 text-center">
                Who We Are?
              </h2>
            </ScrollFadeIn>
            <ScrollFadeIn
              scrollProgress={scrollProgress}
              threshold={0.5}
              delay={600}
            >
              <p className="text-base sm:text-lg md:text-xl text-white text-center px-4 sm:px-8">
                From gaming roots to a multi-faceted startup, we're ready to
                scale and drive innovation in software development.
              </p>
            </ScrollFadeIn>
          </animated.div>

          <animated.div
            style={animations.servicesContent}
            className="absolute w-full h-full z-20 bg-black"
          >
            <ScrollableImageDescription
              onScrollEnd={handleInternalScrollEnd}
              isActive={internalScrollActive}
            />
          </animated.div>
        </div>
      </div>
      <div className="relative w-full bg-black">
        {scrollProgress > 0.87 && <ScrollAnimationComponent />}
      </div>
      <Footer />
    </>
  );
};

export default Home;
