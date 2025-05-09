import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Specifications from './components/Spesifications';
import Performance from './components/Performance';
import Flexibility from './components/Flexibility';
import Footer from './components/Footer';
import './styles/global.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Specifications />
        <Performance />
        <Flexibility />
      </main>
      <Footer />
    </div>
  );
}

export default App;