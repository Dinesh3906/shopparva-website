import React from 'react';
import { Hero } from '../components/Hero';
import { Features } from '../components/sections/Features';
import { Team } from '../components/sections/Team';
import { About } from '../components/sections/About';
import { WhyShopParva } from '../components/sections/WhyShopParva';
import { HowItWorks } from '../components/sections/HowItWorks';
import { Contact } from '../components/sections/Contact';

export const Home = () => {
    return (
        <div className="flex flex-col gap-0 pb-20">
            <Hero />
            <div id="about"><About /></div>
            <div id="features"><Features /></div>
            <div id="how-it-works"><HowItWorks /></div>
            <div id="why-shopparva"><WhyShopParva /></div>
            <div id="team"><Team /></div>
            <div id="contact"><Contact /></div>
        </div>
    );
};
