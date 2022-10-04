import React from 'react'  
import {BrowserRouter as Router} from 'react-router-dom'
import { GlobalStyle } from './globalStyle';
import HeroSection from './components/HeroSection/HeroSection';
import Products from './components/Products/Products';
import {productData} from './components/Products/data'
import{Products2} from './components/Products2/data'
import Feature from './components/Feature/Feature';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Router>
        <GlobalStyle/>
        <HeroSection/>
        <Products heading='choose your favorite products' data={productData} />
        <Feature />
        <Products heading='Sweet Treats for you' data={Products2} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
