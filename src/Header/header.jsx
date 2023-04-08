import React, { useState } from 'react';
import { HomeIcon, ResumeIcon, ProjectsIcon, ContactIcon, GithubIcon, LinkedinIcon, SunIcon, MoonIcon, MenuOpenIcon, MenuCloseIcon } from './../platformicons';

const NavItem = ({ icon, text }) => {
  return (
    <div className="flex items-center gap-3">
        {icon}
        <a href="#">{text}</a>
    </div>
  )
}

const Sidebar = () => {
  return (
    <div className="w-40 shadow-lg z-50 relative bg-[#3C665B]">
      <nav className="flex flex-col p-6 text-[#FFD3A7] text-lg gap-6">
        <NavItem icon={<HomeIcon color="#FFD3A7" />} text='Home' />
        <NavItem icon={<ResumeIcon color="#FFD3A7" />} text='Resume' />
        <NavItem icon={<ProjectsIcon color="#FFD3A7" />} text='Projects' />
        <NavItem icon={<ContactIcon color="#FFD3A7" />} text='Contact' />
      </nav>
      <div className="absolute bottom-0 w-full flex justify-center gap-8 py-2 bg-zinc-800">
        <a href="https://github.com/brandonullman" target="_blank"><GithubIcon color="#FFD3A7" /></a>
        <a href="https://www.linkedin.com/in/brandonullman/" target="_blank"><LinkedinIcon color="#FFD3A7" /></a>
      </div>
    </div>
  )
}

const Header = () => {

    const [showSidebar, setShowSidebar] = useState(false);

    const handleToggleSidebar = () => {
      setShowSidebar(!showSidebar);
    };
  
    return (
      <div className="relative min-h-screen flex flex-col">
        <header className="flex items-center bg-zinc-800 px-4 py-2">
          <button
            className="text-white mr-4"
            onClick={handleToggleSidebar}
          >
            {showSidebar ? <MenuCloseIcon color="#599787"  /> : <MenuOpenIcon color="#599787"  />}
          </button>
          <h1 className="text-[#FFD3A7] font-bold text-lg">Brandon Ullman</h1>
        </header>
        <div className="flex-1 flex">
          {showSidebar && <Sidebar />}
          <div className="flex-1 bg-gray-100 p-8">
            {"TEST"}
          </div>
        </div>
      </div>
    );
};

export default Header;
