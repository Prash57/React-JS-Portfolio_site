import React from 'react';
//Global Style
import GlobalStyle from './components/GlobalStyle';
//import pages
import AboutUs from './pages/AboutUs';
import ContactUS from './pages/ContactUs';
import OurWork from './pages/OurWork';
import Login from './pages/Login';
//navbar
import Nav from './components/Nav';
import Footer from './components/Footer';
//Router
import {Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Nav/>
      <Switch>
        <Route path="/" exact>
          <AboutUs/>
        </Route>
        <Route path="/work">
          <OurWork/>
        </Route>
        <Route path="/contact">
          <ContactUS/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
      </Switch>
      <Footer/>
    </div>
  );
};

export default App;
