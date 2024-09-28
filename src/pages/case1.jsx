import banner from '../assets/case/banner.png'
import ss1 from '../assets/case/ss1.png'
import ss2 from '../assets/case/ss2.png'
import ss3 from '../assets/case/ss3.png'
import diverseMaps from '../assets/case/map.png'
import JoinOurTribeBanner from '../components/About/AboutBanner';
import fullWidthImage from '../assets/case/ban2.png'; // Assuming this is the correct path
import Footer from '../components/Home/Footer';
import React, { useRef, useEffect,useState } from 'react';
import Navbar from '../components/Home/Navbar';


const CaseStudyPage = () => {
 
  const [navOpen, setNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);


    const sideListRef = useRef(null);
    const fullWidthImageRef = useRef(null);
  
    useEffect(() => {
      const sideList = sideListRef.current;
      const fullWidthImg = fullWidthImageRef.current;
  
      const handleScroll = () => {
        if (sideList && fullWidthImg) {
          const sideListRect = sideList.getBoundingClientRect();
          const fullWidthImgRect = fullWidthImg.getBoundingClientRect();
  
          if (fullWidthImgRect.top <= sideListRect.bottom) {
            sideList.style.position = 'absolute';
            sideList.style.top = `${fullWidthImgRect.top - sideListRect.height}px`;
          } else {
            sideList.style.position = 'sticky';
            sideList.style.top = '0';
          }
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);


  return (

    <div className="min-h-screen bg-black text-white">
    {/* Navbar at the top */}
    <Navbar
      navOpen={navOpen}
      setNavOpen={setNavOpen}
      activeSection={activeSection}
      setActiveSection={setActiveSection}
    />
    <div className="bg-[#001800] text-white min-h-screen p-4 md:p-8">
      <header className="mb-8">
        <h1 className="text-4xl md:text-6xl font-bold text-center">CRAKK: THE RUN</h1>
      </header>

      <main className="container mx-auto">
        {/* Banner Image */}
        <div className="mb-8 lg:mb-12 overflow-hidden">
          <img 
            src={banner} 
            alt="CRAKK: THE RUN characters and items" 
            className="w-full h-auto object-cover rounded-lg transform lg:translate-x-1/4"
          />
        </div>

        {/* Description and Side List */}
        <div className="flex flex-col lg:flex-row lg:space-x-8 mb-12">
          <div className="lg:w-3/4 mb-8 lg:mb-0">
            <p className="text-sm md:text-base">
              Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
            </p>
            </div>
          <div ref={sideListRef} className="lg:w-1/4 lg:sticky lg:top-0 self-start">
            <div className="mb-8">
              <h2 className="text-lg font-semibold mb-2">INDUSTRY</h2>
              <ul className="space-y-2">
                <li>GAME DEVELOPMENT</li>
                <li>USER EXPERIENCE</li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-2">SERVICES</h2>
              <ul className="space-y-2">
                <li>GAME DEVELOPMENT</li>
                <li>USER EXPERIENCE</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Screenshots */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1 mb-16 w-full md:w-2/3 pl-4 md:pl-8">
  <img src={ss1} alt="Game screenshot 1" className="w-full h-48 object-cover rounded-lg" />
  <img src={ss2} alt="Game screenshot 2" className="w-full h-48 object-cover rounded-lg" />
  <img src={ss3} alt="Game screenshot 3" className="w-full h-48 object-cover rounded-lg" />
</div>

        {/* Centered content starts here */}
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <section className="mb-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Introduction</h2>
            <p className="text-sm md:text-base">
              Forem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
            </p>
          </section>

          {/* Diverse Maps Image */}
          <div className="mb-12 relative">
            <img src={diverseMaps} alt="Diverse Maps to Explore" className="w-full h-auto rounded-lg" />
            <div className="absolute bottom-0 left-0 right-0 bg-[#4a5d23] bg-opacity-90 p-2 rounded-b-lg">
              <p className="text-xl font-bold text-center">DIVERSE MAPS TO EXPLORE</p>
            </div>
          </div>

          {/* Outcomes */}
          <section className="mb-12 text-center">
            <h2 className="text-3xl font-bold mb-4">OUTCOMES</h2>
            <p className="text-sm md:text-base">
              Forem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
            </p>
          </section>

          {/* The Impact */}
          <section className="mb-12 text-center">
            <h2 className="text-3xl font-bold mb-8">THE IMPACT</h2>
            <div className="flex justify-center space-x-12">
              {['Downloads', 'Active Users', 'Positive Reviews'].map((label, index) => (
                <div key={index} className="text-center">
                  <p className="text-3xl md:text-4xl font-bold text-green-500">50,000+</p>
                  <p className="text-sm md:text-base">{label}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

         {/* Full Width Image Component */}
         <div ref={fullWidthImageRef} className="w-full mt-12">
          <img src={fullWidthImage} alt="Full Width Image" className="w-full h-auto object-cover" />
        </div>


        {/* Join Our Tribe Banner */}
        <div className="mt-12">
          <JoinOurTribeBanner />
        </div>
        <Footer />
      </main>
  </div>
  </div>
  );
};

export default CaseStudyPage;
