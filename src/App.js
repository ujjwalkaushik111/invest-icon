import logo from './logo.svg';
import './App.css';
import Investcoin from './components/Investcoin';
import "bootstrap/dist/css/bootstrap.min.css";
import Laptop from './components/Laptop';
import Hawn from './components/Hawn';
import Standard from './components/Standard';
import "animate.css"
import Button from './components/Button';
import Footer from './components/Footer';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Mynaveclass from './components/Mynaveclass';
import Preloader from './components/Preloader';
import { useEffect } from 'react';

function App() {

  useEffect (() => {
   
    const preloader = document.getElementById("preloader")
    setTimeout(() => {
      preloader.classList.add("d-none")
      preloader.classList.add("pointer-event-none")
      document.body.classList.remove("overflow-hidden")
    }, 3000)
    document.body.classList.add("overflow-hidden")
  }, [])
   document.body.classList.remove("overflow-hidden")
  return ( 
  <div>
    <Preloader/>
    <Mynaveclass/>
    <Investcoin/>
    <Laptop/>
    <Hawn/>
    <Standard/>
    <Button/>
    <Footer/>
  </div>
  )
}

export default App;