import React from 'react';
import brandonPicture from './brandon-picture.jpg';
import Header from './header';
import About from './about';
import MediaFooter from './mediafooter';
import Typewriter from 'typewriter-effect';
import Skills from './skills';

const AppContent = () => {
  return (
    <div className="bg-[#081a25] mx-auto h-[3000px]">
      <Header />
      <div className="pt-20 w-[70%] mx-auto">
        <img src={brandonPicture} alt="Brandon Headshot" className="rounded-full w-80 h-80 mx-auto" />
        <h1 className="text-7xl font-bold text-[#D6D6D6] text-center">Brandon Ullman</h1>
        <div className="text-center">
          <Typewriter
            options={{
              strings: ['Frontend Developer', 'Software Engineer'],
              autoStart: true,
              loop: true,
              wrapperClassName: "text-5xl text-[#D6D6D6]",
              cursorClassName: "text-5xl text-[#8FF6FF]"
            }}
          />
        </div>
        <About className="mx-auto mt-40 w-2/3"/>
        <Skills className="mx-auto mt-40 w-2/3" />
      </div>
      <MediaFooter />
    </div>
  );
};

export default AppContent;