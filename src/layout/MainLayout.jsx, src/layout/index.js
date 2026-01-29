import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export const MainLayout = ({ children }) => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className="min-h-screen flex flex-col relative w-full overflow-x-hidden">
            <Navbar />
            <main className="flex-grow pt-24">
                {children}
            </main>
            <Footer />
        </div>
    );
};
