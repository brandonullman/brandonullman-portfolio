import React from 'react';
import { GithubIcon, LinkedinIcon } from './platformicons';

const MediaFooter = () => {
  return (
    <div className="fixed bottom-0 ml-14 flex flex-col gap-4 items-center">
      <a href="https://github.com/brandonullman" target="_blank"><GithubIcon width="32px" height="32px" /></a>
      <a href="https://www.linkedin.com/in/brandonullman/" target="_blank"><LinkedinIcon width="32px" height="32px" /></a>
      <div className="h-40 w-px bg-[#8FF6FF]"></div>
    </div>
  );
};

export default MediaFooter;