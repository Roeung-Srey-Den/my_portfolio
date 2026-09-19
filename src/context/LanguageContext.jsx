import React, { createContext, useContext, useState } from 'react';
import { translations } from '../data/translations';

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
    const [language, setLanguage] = useState('en'); // 'en' | 'kh'

    const toggleLanguage = () => {
        setLanguage((prev) => (prev === 'en' ? 'kh' : 'en'));
    };

    const t = translations[language];

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used inside a LanguageProvider');
    }
    return context;
}