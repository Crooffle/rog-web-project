import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Specifications from './components/Specifications';
import Performance from './components/Performance';
import Flexibility from './components/Flexibility';
import Footer from './components/Footer';
import './ResponsiveUtils.css';
import './App.css';

// Add viewport meta tag to index.html
// <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">

function App() {
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