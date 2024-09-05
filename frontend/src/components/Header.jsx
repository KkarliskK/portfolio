import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';
import { FacebookLogo, GithubLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react";

function Header() {
  const [darkTheme, setDarkTheme] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home'); 

  useEffect(() => {
    document.body.classList.toggle('dark', darkTheme);
  }, [darkTheme]);

  useEffect(() => {
    window.addEventListener("scroll", handleScrollToSection);
    return () => {
      window.removeEventListener("scroll", handleScrollToSection);
    };
  }, []);

  function handleScrollToSection() {
    const sections = [
      { id: 'home', offsetTop: 0 },
      { id: 'about', offsetTop: document.getElementById('about')?.offsetTop - 100 },
      { id: 'achievements', offsetTop: document.getElementById('achievements')?.offsetTop - 100 },
      { id: 'experiences', offsetTop: document.getElementById('experiences')?.offsetTop - 100 },
      { id: 'contact', offsetTop: document.getElementById('contact')?.offsetTop - 100 },
    ];

    const scrollPosition = window.scrollY + 200;

    let active = 'home';

    for (let i = 0; i < sections.length; i++) {
      const section = sections[i];
      if (section.offsetTop !== undefined && scrollPosition >= section.offsetTop) {
        active = section.id;
      }
    }

    setActiveSection(active);
  }

  function changeTheme() {
    setDarkTheme(!darkTheme);
  }

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800`}>
      <div className="flex justify-between items-center mx-auto max-w-screen-xl flex-col">
        <a href="/" className="flex items-center">
          <img className="rounded-full h-16 w-16 mx-2" src={logo} alt="Logo" />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">KkarliskK</span>
        </a>
          <button
            onClick={toggleMenu}
            data-collapse-toggle="mobile-menu-2"
            type="button"
            className="inline-flex items-center absolute top-6 right-2 p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu-2"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg className={`${isMenuOpen ? 'hidden' : 'block'} w-6 h-6`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
            <svg className={`${isMenuOpen ? 'block' : 'hidden'} w-6 h-6`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        <div className={`lg:flex lg:w-auto lg:order-1 p-4 ${isMenuOpen ? 'block' : 'hidden'}`} id="mobile-menu-2">
          <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            <li>
              <a
                href="#"
                className={`block py-2 pr-4 pl-3 ${activeSection === 'home' ? 'font-semibold text-primary-700' : 'text-gray-700'} lg:text-black lg:text-lg dark:text-white lg:p-0`}
                aria-current={activeSection === 'home' ? 'page' : undefined}
              >
                Home
              </a>
            </li>
            <li>
              <button
                className={`block py-2 pr-4 pl-3 ${darkTheme ? 'font-semibold text-black' : 'text-gray-700'} lg:text-black lg:text-lg dark:text-white lg:p-0`}
                onClick={changeTheme}
              >
                {darkTheme ? 'Go light' : 'Go dark'}
              </button>
            </li>
            <li>
              <a
                href="#about"
                className={`block py-2 pr-4 pl-3 ${activeSection === 'about' ? 'font-semibold text-primary-700' : 'text-gray-700'} lg:text-black lg:text-lg dark:text-white lg:p-0`}
              >
                About Me
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={`block py-2 pr-4 pl-3 ${activeSection === 'contact' ? 'font-semibold text-primary-700' : 'text-gray-700'} lg:text-black lg:text-lg dark:text-white lg:p-0`}
              >
                Contact Me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
