import React, { useState, useEffect } from 'react';

const NavLink = ({ text, id }) => {
  const handleClick = () => {
    const element = document.getElementById(id);
    const offset = 100;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition= elementPosition +window.pageYOffset - offset;
    window.scrollTo({
      top: offsetPosition, 
      behavior: "smooth" 
    });
  }

  return (
    <button className="group transition duration-300" onClick={handleClick}>
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
    <nav className={`sticky top-0 flex justify-center gap-4 lg:gap-10 lg:right-0 py-6 lg:pr-14 text-2xl text-[#DFFDFF] lg:justify-end border-black transition 
      ${scrollPosition > 0 ? 'bg-[#0d2636] shadow-md border-b' : ''}`
    }>
        <NavLink text="About" id="about"/>
        <NavLink text="Skills" id="skills"/>
        <NavLink text="Projects" id="projects"/>
        <NavLink text="Contact" id="contact"/>
    </nav>
  );
};

export default Header;
