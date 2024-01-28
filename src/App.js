import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Card from './Components/Card';
import Bootcamp from './Components/Bootcamp';
import Course from './Components/Course';
import Workshop from './Components/Workshop';
import Logo from './Components/Logo';
import Banner from './Components/Banner';
import Footer from './Components/footer';

function App() {
  return (
    <div className='bg-dark'>
    <Navbar/>
    <Hero/>
    <Card/>
    <Bootcamp/>
    <Course/>
    <Workshop/>
    <Logo/>
   <Banner/>
   <Footer/>
    </div>
  );
}

export default App;
