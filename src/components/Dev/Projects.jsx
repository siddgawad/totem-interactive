import React from 'react';
import AnimatedHeader from './AnimatedHeader';
import BigText from './BigText';
import HorizontalCards from './HorizontalCards';

const Projects = () => {
    return (
      <div className="min-h-screen bg-black">
        {/* <AnimatedHeader /> */}
        <div className="pt-screen">
          <BigText />
          <HorizontalCards />
        </div>
      </div>
    );
  };
  
  export default Projects;