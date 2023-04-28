import React, { useState, useEffect } from 'react';

const NavLink = ({ text }) => {
  
  return (
    <button className="group transition duration-300">
      {text}
      <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#8FF6FF] mt-0.5"></span>
    </button>
  );
};

const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener('scroll', updatePosition);

    updatePosition();

    return () => window.removeEventListener('scroll', updatePosition);
  }, []);

  return scrollPosition
};

const Header = () => {

  const scrollPosition = useScrollPosition();

  return (
    <div className={`sticky top-0 flex gap-10 right-0 py-6 pr-14 text-2xl text-[#DFFDFF] justify-end border-black transition 
      ${scrollPosition > 0 ? 'bg-[#0d2636] shadow-md border-b' : ''}`
    }>
        <NavLink text="About"/>
        <NavLink text="Skills"/>
        <NavLink text="Projects"/>
        <NavLink text="Contact"/>
    </div>
  );
};

export default Header;
