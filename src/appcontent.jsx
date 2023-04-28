import React from 'react';
import brandonPicture from './media/brandon-picture.jpg';
import Header from './header';
import MediaFooter from './mediafooter';
import Typewriter from 'typewriter-effect';
import Skills from './skills';
import ContactForm from './contact';

const AppContent = () => {

  return (
    <div className="h-[3000px] bg-[#081a25]">
      <Header />
      <div className="pt-28 mx-auto text-center">
        <img src={brandonPicture} alt="Brandon Headshot" className="rounded-full w-100 h-100 mx-auto border-2 border-black" />
        <h1 className="text-7xl font-bold text-[#D6D6D6] mt-10">Hi, I'm Brandon.</h1>
        <Typewriter
          options={{
            strings: ['Frontend Developer', 'Software Engineer', 'Application Developer'],
            autoStart: true,
            loop: true,
            wrapperClassName: "text-5xl text-[#D6D6D6]",
            cursorClassName: "text-5xl text-[#8FF6FF]"
          }}
        />
        <h1 className="text-3xl font-normal text-[#D6D6D6] w-[50%] mx-auto mt-40">
        My journey into frontend development started self-taught, and I quickly discovered the satisfaction of 
        solving complex problems and continuously learning in this field. With over two years of professional experience under 
        my belt, I take pride in my ability to transform complex ideas into user-friendly and visually appealing designs. 
        My goal is to create impactful digital experiences that not only look great but also engage and inspire users. 
        I have a proven track record of developing high-quality web applications, with a focus on delivering maintainable, 
        readable, and scalable code.
        </h1>
      </div>
      <Skills />
      <ContactForm />
      <MediaFooter />
    </div>
  );
};

export default AppContent;