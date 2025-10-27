import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CalculadoraIntegral from './components/CalculadoraIntegral';
import Banner from './components/Banner';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Navbar/>
        <Banner/>
        <CalculadoraIntegral/>


      </div>
    </div>
  );
}

export default App;
