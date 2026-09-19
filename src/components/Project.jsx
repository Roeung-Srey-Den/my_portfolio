import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

// real screenshots per project
import conLaptop from '../assets/images/project/construction/con_laptop.png';
import conPhone from '../assets/images/project/construction/con_phone.png';
import conTablet from '../assets/images/project/construction/con_teblet.png';

import sLaptop from '../assets/images/project/school/s_laptop.png';
import sPhone from '../assets/images/project/school/s_phone.png';
import sTablet from '../assets/images/project/school/s_teblet.png';

import skinLaptop from '../assets/images/project/skincare/skin_laptop.png';
import skinPhone from '../assets/images/project/skincare/Skin_phone.png';
import skinTablet from '../assets/images/project/skincare/skin_tablet.png';

// images matched by project title
const projectImages = {
  Skincare: [skinLaptop, skinPhone, skinTablet],
  'School Website': [sLaptop, sPhone, sTablet],
  Construction: [conLaptop, conPhone, conTablet],
};

// live links for each project, matched by title
const projectLinks = {
  Skincare: 'https://roeung-srey-den.github.io/Skincare/',
  'School Website': 'https://roeung-srey-den.github.io/biu_website/',
  Construction: 'https://roeung-srey-den.github.io/construction_project/',
};

function ProjectCard({ project, viewMoreLabel }) {
  const [active, setActive] = useState(0);

  return (
    <section id="project">
    <div className="flex w-full flex-col overflow-hidden rounded-2xl bg-white shadow-lg md:flex-row">
      {/* Text side */}
      <div className="flex flex-1 flex-col justify-center gap-4 p-8 md:p-10">
        <h3 className="font-serif text-2xl font-bold text-gray-800">{project.title}</h3>
        <p className="text-sm leading-relaxed text-gray-500">{project.description}</p>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-fit rounded-full border border-gray-800 px-6 py-2 text-sm font-medium text-gray-800 transition-colors hover:bg-gray-800 hover:text-white"
        >
          {viewMoreLabel}
        </a>
      </div>

      {/* Image accordion side - 3 pictures for THIS project */}
      <div className="flex h-64 flex-1 gap-2 p-4 md:h-auto md:p-6">
        {project.images.map((image, index) => {
          const isActive = index === active;
          return (
            <button
              key={index}
              type="button"
              onClick={() => setActive(index)}
              aria-label={`${project.title} screenshot ${index + 1}`}
              style={{
                flexGrow: isActive ? 4 : 1,
                backgroundImage: `url(${image})`,
              }}
              className="group relative h-full overflow-hidden rounded-xl bg-gray-100 bg-contain bg-center bg-no-repeat transition-all duration-500 ease-in-out focus:outline-none"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />
              <div
                className={`absolute bottom-3 left-3 right-3 text-left text-white transition-opacity duration-300 ${
                  isActive ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <p className="truncate text-sm font-semibold">{project.title}</p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
    </section>
  );
}

function Project() {
  const { t } = useLanguage();

  // attach real images and the live link to each project
  const projects = t.project.items.map((item) => ({
    ...item,
    images: projectImages[item.title] || [],
    url: projectLinks[item.title] || '#',
  }));

  return (
    <div className="flex flex-col items-center py-10">
      <div className="flex flex-col items-center">
        <div className="font-serif text-5xl font-bold text-gray-800">{t.project.heading}</div>
        <div className="mt-3 h-1 w-24 bg-yellow-200"></div>
      </div>

      <div className="mt-10 flex w-full max-w-4xl flex-col gap-8 px-6 md:px-0">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} viewMoreLabel={t.project.viewMore} />
        ))}
      </div>

      <p className="mt-8 text-sm text-gray-500">
         {t.project.github}
      </p>
    </div>
  );
}

export default Project;