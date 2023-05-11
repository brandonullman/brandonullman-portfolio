import React from 'react';
import { GithubIcon } from './platformicons';

const DemoButton = () => {
  return (
    <button className="inline-flex items-center px-3 py-2 text-base font-medium rounded-md text-[#D6D6D6] bg-[#05121a] hover:border-[#8FF6FF] border hover:text-[#8FF6FF]">
      <span>Demo</span>
      <span className="flex h-1 w-1 ml-2 rounded-full bg-red-400 animate-ping"></span>
    </button>
  );
};

const ProjectInfo = ({ title, info, demoUrl, repoUrl }) => {
  return (
    <div className="text-center h-full flex flex-col justify-between">
      <div>
        <div className="py-1 lg:py-4 text-lg lg:text-3xl font-semibold text-[#D6D6D6]">{title}</div>
        <div className="text-md text-[#D6D6D6]">{info}</div>
      </div>
      <div className="flex justify-center items-end gap-8 py-2 lg:mb-4">
        <a href="https://github.com/brandonullman" target="_blank" className="my-auto"><GithubIcon width="32px" height="32px"/></a>
        <DemoButton />
      </div>
    </div>
  );
};

const Project = ({ alignment, image, title, info, demoUrl, repoUrl }) => {

  return (
    <div className="h-[300px] lg:flex border border-black rounded-md">
      { alignment === 'left' && <div className="bg-[#0d2636] lg:w-1/3 rounded-l-md">
        <ProjectInfo title={title} info={info} />
      </div>
      }
      <div className={`bg-[#555555] lg:w-2/3 ${alignment === 'left' ? 'rounded-r-md' : 'rounded-l-md'}`}>
        <img />
      </div>
      { alignment === 'right' && <div className="bg-[#0d2636] lg:w-1/3 rounded-r-md">
        <ProjectInfo title={title} info={info} />
      </div>
      }
    </div>
  );
};

const Projects = () => {

  return (
    <div className="px-4 mt-12 lg:mt-32 lg:w-[70%] mx-auto space-y-8" id="projects">
      <Project alignment="left" title="Project 1" info="Test Text Whoop Whoop Whoop"/>
      <Project alignment="right" title="Project 2" info="Test Text Whoop Whoop Whoop"/>
      <Project alignment="left" title="Project 3" info="Test Text Whoop Whoop Whoop"/>
      <Project alignment="right" title="Project 4" info="Test Text Whoop Whoop Whoop"/>   
    </div>
  );
};

export default Projects;