import React from 'react';
import Header from './header';
import MediaFooter from './mediafooter';
import Typewriter from 'typewriter-effect';
import Skills from './skills';
import Projects from './projects';
import ContactForm from './contact';
import Headshot from './headshot';

const AppContent = () => {

  return (
    <div className="h-full bg-[#141f25] pb-12" id="about">
      <Header />
      <div className="pt-16 mx-auto text-center">
        {/* <img src={brandonPicture} alt="Brandon Headshot" className="rounded-full w-100 h-100 mx-auto border-2 border-black" /> */}
        <div className="flex flex-col xl:flex-row justify-center items-center">
          <div>
            <h1 className="text-5xl lg:text-7xl font-bold text-[#D6D6D6]">Hi, I'm Brandon.</h1>
            <Typewriter
              options={{
                strings: ['Frontend Developer', 'Software Engineer', 'Application Developer'],
                autoStart: true,
                loop: true,
                wrapperClassName: "text-3xl lg:text-5xl text-[#D6D6D6]",
                cursorClassName: "text-3xl lg:text-5xl text-[#8FF6FF]"
              }}
            />
          </div>
          <Headshot />
        </div>
        <h1 className="lg:text-3xl text-2xl font-normal text-[#D6D6D6] w-[90%] lg:w-[70%] mx-auto mt-6 lg:mt-20">
        My journey into frontend development started self-taught, and I quickly discovered the satisfaction of 
        solving complex problems and continuously learning in this field. With over two years of professional experience under 
        my belt, I take pride in my ability to transform complex ideas into user-friendly and visually appealing designs. 
        My goal is to create impactful digital experiences that not only look great but also engage and inspire users. 
        I have a proven track record of developing high-quality web applications, with a focus on delivering maintainable, 
        readable, and scalable code.
        </h1>
      </div>
      <Skills />
      <Projects />
      <ContactForm />
      {/* <MediaFooter /> */}
    </div>
  );
};

export default AppContent;