import React from 'react';
import { AboutMeIcon, ResumeIcon } from './platformicons';

const About = ({ className }) => {
  return (
    <div className={className}>
      <div className="flex mb-10">
        <AboutMeIcon color="#8FF6FF" />
        <h1 className='text-[#D6D6D6] text-3xl ml-3 mt-auto font-semibold'>About Me</h1>
      </div>
      <div className="flex">
        <p className="mt-8 text-lg text-[#D6D6D6]">A highly skilled and evolving Frontend Software Engineer with expertise in modern frontend technologies such as 
          ReactJS. I have a proven track record of developing high-quality web applications, with a focus on delivering 
          maintainable, readable, and scalable code. I am excited to bring my technical expertise and collaborative mindset 
          to help deliver high quality solutions that drive business success.
        </p>
        <ResumeIcon color="#8FF6FF" className="ml-20 my-auto" />
      </div>
    </div>
  );
};

export default About;