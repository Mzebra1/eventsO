import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutImg from '../images/4.jpg';
import Footer from '../components/Footer';
import Recent from '../components/Recent';

function Services() {
    return (
    <>
     <Navbar/>
  <Hero
  cName="hero-mid"
  heroImg={AboutImg}
  title="Services"
  btnClass="hide"
  />
  <Recent/>
  <Footer/>
    </>
    )
  }
  
  export default Services;
  