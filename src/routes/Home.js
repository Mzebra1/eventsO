import React from 'react'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Events from '../components/Events';
import Recent from '../components/Recent';
import Footer from '../components/Footer';

function Home() {
  return (
  <>
  <Navbar/>
  <Hero
  cName="hero"
  heroImg="https://images.unsplash.com/photo-1522158637959-30385a09e0da?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGV2ZW50fGVufDB8fDB8fHww"
  title="Events at Your Disposal"
  text="Choose Your Event."
  buttonText="Events"
  url="/"
  btnClass="show"
  />
  <Events/>
  <Recent/> 
  <Footer/>
  </>
  );
}

export default Home;
