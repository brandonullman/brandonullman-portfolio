import React from 'react';

const NavLink = ({ href, text }) => {

  return (
    <a href={href} className="group transition duration-300">
      {text}
      <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#8FF6FF] mt-0.5"></span>
    </a>
  );
};

const Header = () => {

    return (
      <div className="flex gap-10 absolute right-0 pt-8 pr-14 text-2xl text-[#DFFDFF] justify-end">
          <NavLink href="#" text="About"/>
          <NavLink href="#" text="Skills"/>
          <NavLink href="#" text="Projects"/>
          <NavLink href="#" text="Contact"/>
      </div>
    );
};

export default Header;
