import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

function Header(props) {
    const [menuOpen, setMenuOpen] = useState(false);
    const { toggleLanguage, t } = useLanguage();

    // Sliding underline state (desktop nav only)
    const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0, opacity: 0 });
    const navRef = useRef(null);

    // Track whether the page has been scrolled, to toggle header background
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // set initial state in case page loads mid-scroll
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavEnter = (e) => {
        const target = e.currentTarget;
        const nav = navRef.current;
        if (!target || !nav) return;

        const targetRect = target.getBoundingClientRect();
        const navRect = nav.getBoundingClientRect();

        setUnderlineStyle({
            left: targetRect.left - navRect.left,
            width: targetRect.width,
            opacity: 1,
        });
    };

    const handleNavLeave = () => {
        setUnderlineStyle((prev) => ({ ...prev, opacity: 0 }));
    };

    const scrollToSection = (e, id) => {
        e.preventDefault();
        const section = document.getElementById(id);
        if (section) {
            const headerOffset = 80; // adjust to match your header's actual height in px
            const sectionTop = section.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({ top: sectionTop - headerOffset, behavior: 'smooth' });
        }
        setMenuOpen(false);
    };

    return (
        <div
            className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
                isScrolled ? 'bg-white shadow-sm' : 'bg-transparent shadow-none'
            }`}
        >
            <div className="flex items-center justify-between p-5">
                <h1 className="font-serif text-xl font-bold text-gray-800">Roeung Srey Den</h1>

                {/* Desktop nav */}
                <ul
                    ref={navRef}
                    onMouseLeave={handleNavLeave}
                    className="relative hidden flex-row items-center gap-10 md:flex"
                >
                    <li onMouseEnter={handleNavEnter}>
                        <a href="#about" onClick={(e) => scrollToSection(e, 'about')}>{t.nav.about}</a>
                    </li>
                    <li onMouseEnter={handleNavEnter}>
                        <a href="#project" onClick={(e) => scrollToSection(e, 'project')}>{t.nav.project}</a>
                    </li>
                    <li onMouseEnter={handleNavEnter}>
                        <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>{t.nav.contacts}</a>
                    </li>
                    <li>
                        <button
                            type="button"
                            onClick={toggleLanguage}
                            aria-label="Toggle language"
                            className="flex items-center justify-center"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-6 w-6 text-yellow-400"
                            >
                                <circle cx="12" cy="12" r="10" />
                                <line x1="2" y1="12" x2="22" y2="12" />
                                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                            </svg>
                        </button>
                    </li>

                    {/* Sliding underline indicator */}
                    <span
                        className="pointer-events-none absolute bottom-0 h-0.5 rounded-full transition-all duration-300 ease-out"
                        style={{
                            left: `${underlineStyle.left}px`,
                            width: `${underlineStyle.width}px`,
                            opacity: underlineStyle.opacity,
                            backgroundColor: '#FFF085',
                        }}
                    />
                </ul>

                {/* Mobile / tablet bar: language icon + hamburger */}
                <div className="flex items-center gap-4 md:hidden">
                    <button
                        type="button"
                        onClick={toggleLanguage}
                        aria-label="Toggle language"
                        className="flex items-center justify-center"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-6 w-6 text-yellow-400"
                        >
                            <circle cx="12" cy="12" r="10" />
                            <line x1="2" y1="12" x2="22" y2="12" />
                            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                        </svg>
                    </button>
                    <button
                        type="button"
                        onClick={() => setMenuOpen((prev) => !prev)}
                        aria-label="Toggle menu"
                        className="flex h-8 w-8 items-center justify-center"
                    >
                        {menuOpen ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-6 w-6 text-gray-800"
                            >
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-6 w-6 text-gray-800"
                            >
                                <line x1="3" y1="6" x2="21" y2="6" />
                                <line x1="3" y1="12" x2="21" y2="12" />
                                <line x1="3" y1="18" x2="21" y2="18" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile dropdown menu */}
            {menuOpen && (
                <ul className="absolute left-0 right-0 z-10 flex flex-col items-center gap-4 bg-white px-5 py-6 shadow-md md:hidden">
                    <li><a href="#about" onClick={(e) => scrollToSection(e, 'about')}>{t.nav.about}</a></li>
                    <li><a href="#project" onClick={(e) => scrollToSection(e, 'project')}>{t.nav.project}</a></li>
                    <li><a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>{t.nav.contacts}</a></li>
                </ul>
            )}
        </div>
    );
}

export default Header;