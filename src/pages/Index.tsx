
import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import About from '../components/About';
import Journey from '../components/Journey';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Certifications from '../components/Certifications';
import Languages from '../components/Languages';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Abdelouahed Akabbab | Junior Software Engineer Portfolio</title>
        <meta name="description" content="Portfolio of Abdelouahed Akabbab, a junior software engineer skilled in web development, mobile apps, and AI." />
        <meta name="keywords" content="software engineer, web development, mobile development, AI, portfolio, Abdelouahed Akabbab" />
        <meta name="author" content="Abdelouahed Akabbab" />
      </Helmet>

      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow">
          <About />
          <Journey />
          <Skills />
          <Projects />
          <Experience />
          <Certifications />
          <Languages />
          <Contact />
        </main>
        
        <Footer />
        <BackToTop />
      </div>
    </>
  );
};

export default Index;
