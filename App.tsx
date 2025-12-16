import React, { useState } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import { Page } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.HOME);

  const renderPage = () => {
    switch (currentPage) {
      case Page.HOME:
        return <Home onNavigate={setCurrentPage} />;
      case Page.PROJECTS:
        return <Projects />;
      case Page.ABOUT:
        return <About />;
      case Page.CONTACT:
        return <Contact />;
      case Page.BLOG:
        return <Blog />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <Layout currentPage={currentPage} onNavigate={setCurrentPage}>
      <div className="animate-fade-in">
        {renderPage()}
      </div>
    </Layout>
  );
};

export default App;
