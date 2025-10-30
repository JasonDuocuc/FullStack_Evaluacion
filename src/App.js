import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import CalculadoraIntegral from './components/CalculadoraIntegral';
import Servicios from './components/Servicios';
import Soluciones from './components/Soluciones';
import Planes from './components/Planes';
import Testimonios from './components/Testimonios';
import FAQPrincipal from './components/FAQ';


function App() {
  return (
    <div className="App" style={{
    backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/assets/fondo_web.gif')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
    color: 'white',
    textShadow: '1px 1px 6px rgba(0,0,0,0.8)',
  }}>
      <div className="container">
        <Navbar/>
        <Hero/>
        <Servicios/>
        <Soluciones/>
        <CalculadoraIntegral/>
        <Planes/>
        <Testimonios/>
        <FAQPrincipal/>
        <Footer/>

      </div>
    </div>
  );
}

export default App;
