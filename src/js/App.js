import React, { Component } from 'react';
import { HashRouter, Route, Link } from "react-router-dom";

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import OurWork from './pages/OurWork';


class App extends Component {
  render() {
    return (
      <HashRouter >
        <div>
          <Navbar/>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/our-work" component={OurWork} />
          <Route path="/contact" component={Contact} />
          <Footer/>
        </div>
      </HashRouter>
    );
  }
}

export default App;
