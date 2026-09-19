import React from 'react';
import { useLanguage } from '../context/LanguageContext';

function Contact(props) {
    const { t } = useLanguage();

    return (
        <section id="contact" className="px-4 sm:px-6">
        <div className="flex flex-col items-center py-10 sm:py-14 md:py-16">
            <div className="flex flex-col items-center text-center">
                <h1 className="font-serif text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl">{t.contact.heading}</h1>
                <div className="mt-3 h-1 w-16 bg-yellow-200 sm:w-20 md:w-24"></div>
            </div>

            <form action="" className="mt-8 flex w-full max-w-md flex-col gap-1 sm:mt-10">
                <label htmlFor="name" className="text-sm text-gray-800">
                    {t.contact.name}
                </label>
                <input
                    type="text"
                    id="name"
                    name="Name"
                    className="mb-4 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-yellow-300"
                />

                <label htmlFor="email" className="text-sm text-gray-800">
                    {t.contact.email}
                </label>
                <input
                    type="text"
                    id="email"
                    name="Email"
                    className="mb-4 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-yellow-300"
                />

                <label htmlFor="message" className="text-sm text-gray-800">
                    {t.contact.message}
                </label>
                <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="mb-4 w-full resize-none rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-yellow-300"
                ></textarea>

                <div className="flex justify-center sm:justify-end">
                    <button
                        type="submit"
                        className="w-full rounded-md bg-yellow-200 px-6 py-2 text-sm font-semibold text-gray-900 transition-colors hover:bg-yellow-300 sm:w-auto"
                    >
                        {t.contact.send}
                    </button>
                </div>
            </form>
        </div>
        </section>
    );
}

export default Contact;