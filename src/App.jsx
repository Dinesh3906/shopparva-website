import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MainLayout } from './layout/MainLayout';
import { Home } from './pages/Home';

// Placeholder pages for routes that don't have implementations yet
const Placeholder = ({ title }) => (
  <div className="min-h-[50vh] flex items-center justify-center text-center">
    <div>
      <h1 className="text-4xl font-bold text-white mb-4">{title}</h1>
      <p className="text-gray-400">Coming Soon</p>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Placeholder title="About Us" />} />
          <Route path="/features" element={<Placeholder title="Features" />} />
          <Route path="/team" element={<Placeholder title="Our Team" />} />
          <Route path="/roadmap" element={<Placeholder title="Roadmap" />} />
          <Route path="/contact" element={<Placeholder title="Contact Us" />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
