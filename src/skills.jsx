import React from 'react';
import { SkillsIcon, ResumeIcon } from './platformicons';

const Skills = ({ className }) => {
  return (
    <div className={className}>
      <div className="flex mb-10">
        <h1 className='text-[#D6D6D6] text-3xl mr-3 mt-auto font-semibold ml-auto'>Skills</h1>
        <SkillsIcon color="#8FF6FF" />
      </div>
      <div className="flex">
      </div>
    </div>
  );
};

export default Skills;