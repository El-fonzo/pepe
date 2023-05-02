import Navbar from './component/Navbar/Navbar/Navbar';

import Hero from './component/Hero/Hero';
import './App.css';
import About from './component/About/About';
import Roadmap from './component/Roadmap/Roadmap';
import Tokenomics from './component/Tokenomics/Tokenomics';
import Footer from './component/Footer/Footer';

function App() {
  return (
    <div>
     <Navbar/>
     <Hero/>
     <About/>
     {/* <Roadmap/> */}
     {/* <Tokenomics/> */}
     <Footer/>
    </div>
  );
}

export default App;
