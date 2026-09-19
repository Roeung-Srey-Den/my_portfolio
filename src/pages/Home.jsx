import React from 'react';
import Contact from '../components/Contact';
import Project from '../components/Project';
import About from '../components/About';
import Skill from '../components/Skill';
import Profile from '../assets/images/about/profile.jpg'
import { useLanguage } from '../context/LanguageContext';

function Home(props) {
    const { t } = useLanguage();

    const scrollToSection = (e, id) => {
        e.preventDefault();
        const section = document.getElementById(id);
        if (section) {
            const headerOffset = 80; // keep this in sync with Header.jsx's headerOffset
            const sectionTop = section.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({ top: sectionTop - headerOffset, behavior: 'smooth' });
        }
    };

    return (
        <div>
             <div className="relative h-137 overflow-hidden bg-white">
      {/* Diagonal yellow background panel */}
      <div
        className="absolute inset-y-0 right-0 w-full md:w-[100%]"
        style={{
          backgroundColor: '#F5DC5B',
          clipPath: 'polygon(100% 0, 0% 100%, 100% 100%)',
        }}
      />
 
      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center gap-12 px-6 py-16 md:flex-row md:gap-16 md:px-12 pb-200 sm:pt-19">
        {/* Left column: photo */}
        <div className="flex flex-shrink-0 flex-col items-center gap-4">
          <div
            className="flex h-52 w-52 items-center justify-center rounded-full border-[6px] bg-white p-2 md:h-60 md:w-60"
            style={{ borderColor: 'rgba(245, 220, 91, 0.7)' }}
          >
            <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-full bg-gray-100">
               <img src={Profile} className='w-53 pt-19' />
              <svg viewBox="0 0 200 200" className="h-full w-full text-gray-300" fill="currentColor">
                <circle cx="100" cy="75" r="40" />
                <path d="M30 190c0-45 31-75 70-75s70 30 70 75z" />
              </svg>
            </div>
          </div>
 
          {/* Social icons */}
          <div className="flex items-center gap-3">
            <a
              href="https://web.facebook.com/sreyden.roeung"
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1877F2] text-white transition-transform hover:scale-105"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/roeung-srey-den-609aaa413"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0A66C2] text-white transition-transform hover:scale-105"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
              </svg>
            </a>
            <a
              href="https://github.com/Roeung-Srey-Den/RoeungSreyDen"
              aria-label="GitHub"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-white transition-transform hover:scale-105"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.58 2 12.19c0 4.49 2.87 8.3 6.84 9.64.5.1.68-.22.68-.49 0-.24-.01-.88-.01-1.72-2.78.62-3.37-1.37-3.37-1.37-.46-1.2-1.11-1.52-1.11-1.52-.91-.64.07-.63.07-.63 1 .07 1.53 1.04 1.53 1.04.9 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.64-1.37-2.22-.26-4.56-1.13-4.56-5.02 0-1.11.39-2.02 1.03-2.73-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.04a9.4 9.4 0 0 1 2.5-.34c.85 0 1.7.11 2.5.34 1.91-1.31 2.75-1.04 2.75-1.04.55 1.41.2 2.45.1 2.71.64.71 1.03 1.62 1.03 2.73 0 3.9-2.34 4.76-4.57 5.01.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.02 10.02 0 0 0 22 12.19C22 6.58 17.52 2 12 2z" />
              </svg>
            </a>
          </div>
        </div>
 
        {/* Right column: text content */}
        <div className="flex max-w-lg flex-col items-center text-center md:items-start md:text-left ">
          <span className="mb-3 text-sm font-semibold tracking-wide" style={{ color: '#F0A93C' }}>
            {t.home.role}
          </span>
 
          <h1 className="font-serif text-2xl lg:text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
            {t.home.greeting}
            <br />
            {t.home.name}
          </h1>
 
          <p className="mt-5 md:text-[15px] hidden lg:block" style={{ color: '#8f8a6f' }}>
            {t.home.tagline}
          </p>
 
          <div className="mt-7 flex items-center gap-4">
            <a
              href="#project"
              onClick={(e) => scrollToSection(e, 'project')}
              className="rounded-md px-6 py-2.5 text-sm font-semibold text-gray-900 shadow-sm transition-colors hover:brightness-95"
              style={{ backgroundColor: '#F0A93C' }}
            >
              {t.home.projectsBtn}
            </a>
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, 'contact')}
              className="rounded-md border border-gray-900 px-6 py-2.5 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-900 hover:text-white"
            >
              {t.home.contactBtn}
            </a>
          </div>
        </div>
      </div>
    </div>
            <About id="about"/>
            <Skill />
            <Project id="project"/>
            <Contact id="contact"/>
        </div>
    );
}

export default Home;