import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import CalculadoraIntegral from './components/CalculadoraIntegral';
import Servicios from './components/Servicios';
import Soluciones from './components/Soluciones';
import Planes from './components/Planes';
import Testimonios from './components/Testimonios';



function App() {
  return (
    <div className="App">
      <div className="container">
        <Navbar/>
        <Hero/>
        <Servicios/>
        <Soluciones/>
        <CalculadoraIntegral/>
        <Planes/>
        <Testimonios/>

        <Footer/>

      </div>
    </div>
  );
}

export default App;
