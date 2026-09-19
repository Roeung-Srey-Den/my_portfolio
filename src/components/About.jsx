import React, { useEffect, useRef, useState } from 'react';
import Angkor from '../assets/images/about/angkor.png';
import CV from '../assets/images/about/QA_INTERN_ROEUNGSREYDEN.pdf'
import { useLanguage } from '../context/LanguageContext';

const AUTO_ROTATE_MS = 3500;

/* ---------- Single stacked card ---------- */
function StackCard({ title, rows, position }) {
    // position: 0 = front (visible/active), 1 = middle, 2 = back
    const styles = [
        {
            transform: 'translateY(0px) scale(1)',
            zIndex: 30,
            opacity: 1,
            filter: 'blur(0px)',
        },
        {
            transform: 'translateY(-18px) scale(0.94)',
            zIndex: 20,
            opacity: 0.75,
            filter: 'blur(0.5px)',
        },
        {
            transform: 'translateY(-34px) scale(0.88)',
            zIndex: 10,
            opacity: 0.45,
            filter: 'blur(1px)',
        },
    ];

    return (
        <div
            style={{ ...styles[position], transitionDuration: '700ms' }}
            className="absolute inset-0 rounded-xl bg-gradient-to-br from-yellow-200/70 to-white p-5 shadow-md transition-all ease-out sm:p-6"
        >
            <h3 className="mb-3 text-sm font-bold uppercase tracking-wide text-gray-900 sm:mb-4">
                {title}
            </h3>
            <ul className="space-y-1.5 text-xs text-gray-700 sm:text-sm">
                {rows.map((row, i) => (
                    <li key={i}>{row}</li>
                ))}
            </ul>
        </div>
    );
}

/* ---------- Carousel that cycles the three cards ---------- */
function StackedCarousel({ cards }) {
    const [active, setActive] = useState(0);
    const [paused, setPaused] = useState(false);
    const containerRef = useRef(null);
    const [visible, setVisible] = useState(false);

    // reveal on scroll (same behaviour as before)
    useEffect(() => {
        const node = containerRef.current;
        if (!node) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.unobserve(node);
                }
            },
            { threshold: 0.2 }
        );
        observer.observe(node);
        return () => observer.disconnect();
    }, []);

    // reset to the first card whenever the card set changes (e.g. language switch)
    useEffect(() => {
        setActive(0);
    }, [cards]);

    // auto-rotate the stack (paused while hovered)
    useEffect(() => {
        if (paused) return;
        const timer = setInterval(() => {
            setActive((prev) => (prev + 1) % cards.length);
        }, AUTO_ROTATE_MS);
        return () => clearInterval(timer);
    }, [cards.length, paused]);

    return (
        <div
            ref={containerRef}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            className={`relative mx-auto h-80 w-full max-w-4xl transition-all duration-700 ease-out md:mx-0 ${
                visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
        >
            {cards.map((card, i) => {
                // distance from the active card, wrapped, gives stack position 0/1/2
                const position = (i - active + cards.length) % cards.length;
                return (
                    <StackCard
                        key={card.title}
                        title={card.title}
                        rows={card.rows}
                        position={position}
                    />
                );
            })}
        </div>
    );
}

/* ---------- Page ---------- */
function About(props) {
    const { t } = useLanguage();

    return (
        <section id="about">
        <div className="flex flex-col items-center px-4 py-8 sm:px-6 sm:py-10">
            <div className="flex flex-col items-center">
                <div className="font-serif text-2xl font-bold text-gray-800 sm:text-3xl md:text-4xl">
                    {t.about.heading}
                </div>
                <div className="mt-3 h-1 w-16 bg-yellow-200 sm:w-20 md:w-24"></div>
            </div>

            <div
                style={{ backgroundImage: `url(${Angkor})` }}
                className="mt-6 w-full max-w-5xl bg-cover bg-center bg-no-repeat px-3 py-6 text-center sm:mt-8 sm:px-6 sm:py-10"
            >
                <p className="mx-auto max-w-4xl text-xs leading-relaxed text-gray-800 sm:text-sm">
                    {t.about.bio}
                </p>
            </div>

          <div className="mt-5 flex justify-center sm:mt-6">
    <a
        href={CV}
        download="Roeung_Srey_Den_CV.pdf"
        className="rounded-full bg-yellow-300 px-6 py-2 text-sm font-semibold text-gray-900 shadow-sm transition-colors hover:bg-yellow-400 sm:px-8 sm:py-2.5 sm:text-base"
    >
        {t.about.downloadCv}
    </a>
</div>

            <div className="mt-8 flex w-full max-w-5xl justify-center sm:mt-10 md:mt-12">
                <StackedCarousel cards={t.about.cards} />
            </div>
        </div>
        </section>
    );
}

export default About;