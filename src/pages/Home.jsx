import React from 'react';
import { Hero } from '../components/Hero';
import { Features } from '../components/sections/Features';
import { Team } from '../components/sections/Team';
import { TechStack } from '../components/sections/TechStack';
import { Roadmap } from '../components/sections/Roadmap';
import { Contact } from '../components/sections/Contact';

export const Home = () => {
    return (
        <div className="flex flex-col gap-0 pb-20">
            <Hero />
            <div id="features"><Features /></div>
            <div id="stack"><TechStack /></div>
            <div id="team"><Team /></div>
            <div id="roadmap"><Roadmap /></div>
            <div id="contact"><Contact /></div>
        </div>
    );
};
