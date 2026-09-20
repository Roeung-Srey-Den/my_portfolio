import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import word from '../assets/images/skill/word.png';
import bootstrap from '../assets/images/skill/bootstrap.png';
import c1 from '../assets/images/skill/c1.png';
import c2 from '../assets/images/skill/c2.png';
import chinese from '../assets/images/skill/chinese.png';
import css from '../assets/images/skill/css.png';
import english from '../assets/images/skill/english.png';
import excel from '../assets/images/skill/excel.png';
import figma from '../assets/images/skill/figma.png';
import flutter from '../assets/images/skill/flutter.png';
import git from '../assets/images/skill/git.png';
import html from '../assets/images/skill/html.png';
import java from '../assets/images/skill/java.png';
import vue from '../assets/images/skill/vue.png';
import tailwind from '../assets/images/skill/tailwind.png';
import sqlserver from '../assets/images/skill/sqlserver.png';
import sql from '../assets/images/skill/Sql.png';
import react from '../assets/images/skill/react.png';
import python from '../assets/images/skill/python.png';
import powerpoint from '../assets/images/skill/powerpoint.png';
import php from '../assets/images/skill/php.png';
import pg from '../assets/images/skill/pg.png';
import oracle from '../assets/images/skill/oracle.png';
import nuxt from '../assets/images/skill/nuxt.png';
import laravel from '../assets/images/skill/Laravel.png';
import khmer from '../assets/images/skill/khmer.png';
import javascript from '../assets/images/skill/javascript.png';

/* ---------- Reusable reveal-on-scroll wrapper (replays every scroll) ---------- */
function Reveal({ children, className = '', delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.15 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: visible ? `${delay}ms` : '0ms' }}
      className={`transition-all duration-700 ease-out ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      } ${className}`}
    >
      {children}
    </div>
  );
}

// Reusable icon item: logo image + label underneath
function SkillIcon({ src, label, size = 'h-12 w-12', delay = 0, visible }) {
  return (
    <div
      style={{ transitionDelay: visible ? `${delay}ms` : '0ms' }}
      className={`flex flex-col items-center gap-2 transition-all duration-500 ease-out hover:-translate-y-1 hover:scale-110 ${
        visible ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-4 scale-90 opacity-0'
      }`}
    >
      <img src={src} alt={label} className={`${size} object-contain`} />
      <span className="text-xs font-medium tracking-wide text-gray-600">
        {label}
      </span>
    </div>
  );
}

// Category heading + row of icons, reveals as a group with staggered icons
function SkillCategory({ title, children }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.15 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // clone icon children so each gets a staggered delay + the group's visible state
  const items = React.Children.map(children, (child, i) =>
    React.cloneElement(child, { delay: i * 90, visible })
  );

  return (
    <div
      ref={ref}
      className={`mb-10 transition-all duration-700 ease-out ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}
    >
      <h3 className="mb-5 text-sm font-bold uppercase tracking-wide text-gray-900">
        {title}
      </h3>
      <div className="flex flex-wrap items-start gap-8">{items}</div>
    </div>
  );
}

function Skill() {
  const { t } = useLanguage();
  const c = t.skill.categories;

  return (
    <section className="mx-auto max-w-4xl px-6 py-16">
      {/* Section title */}
      <Reveal className="mb-14 text-center">
        <h2 className="inline-block border-b-4 pb-1 text-2xl font-bold text-gray-900" style={{ borderColor: '#F5DC5B' }}>
          {t.skill.heading}
        </h2>
      </Reveal>

      {/* Microsoft Office */}
      <SkillCategory title={c.office}>
        <SkillIcon
          src={word}
          label="WORD"
        />
        <SkillIcon
          src={excel}
          label="Excel"
        />
        <SkillIcon
          src={powerpoint}
          label="Power Point"
        />
      </SkillCategory>

      {/* Coding Language */}
      <SkillCategory title={c.coding}>
        <SkillIcon
          src={html}
          label="HTML5"
        />
        <SkillIcon
          src={css}
          label="CSS3"
        />
        <SkillIcon
          src={javascript}
          label="JavaScript"
        />
        <SkillIcon
          src={php}
          label="PHP"
        />
        <SkillIcon
          src={c1}
          label="C#"
        />
        <SkillIcon
          src={python}
          label="Python"
        />
         <SkillIcon
          src={c2}
          label="C++"
        />
      </SkillCategory>

      {/* Framework */}
      <SkillCategory title={c.framework}>
        <SkillIcon
          src={laravel}
          label="Laravel"
        />
        <SkillIcon
          src={react}
          label="React"
        />
        <SkillIcon
          src={nuxt}
          label="Nuxt"
        />
        <SkillIcon
          src={vue}
          label="Vue"
        />
      </SkillCategory>

      {/* Library */}
      <SkillCategory title={c.library}>
        <SkillIcon
          src={bootstrap}
          label="Bootstrap"
        />
        <SkillIcon
          src={tailwind}
          label="Tailwind"
        />
      </SkillCategory>

      {/* Database */}
      <SkillCategory title={c.database}>
        <SkillIcon
          src={sql}
          label="MySQL"
        />
        <SkillIcon
          src={pg}
          label="PostgreSql"
        />
        <SkillIcon
          src={sqlserver}
          label="SQL Server"
        />
        <SkillIcon
          src={oracle}
          label="Oracle"
          size="h-8 w-auto mt-2"
        />
      </SkillCategory>

      {/* Learning */}
      <SkillCategory title={c.learning}>
        <SkillIcon src={chinese} label="Chinese" />
        <SkillIcon
          src={flutter}
          label="Flutter"
        />
        <SkillIcon
          src={java}
          label="Java"
        />
      </SkillCategory>

      {/* Other Skills */}
      <SkillCategory title={c.other}>
        <SkillIcon src={english} label="English" />
        <SkillIcon src={khmer} label="Khmer" />
        <SkillIcon
          src={git}
          label="GIT"
        />
        <SkillIcon
          src={figma}
          label="Figma"
        />
      </SkillCategory>
    </section>
  );
}

export default Skill;