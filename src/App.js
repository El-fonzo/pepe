import Navbar from './component/Navbar/Navbar/Navbar';


import './App.css';
import Hero from './component/Hero1/Hero1'
import About from './component/About/About';
import Roadmap from './component/Roadmap/Roadmap';
import Tokenomics from './component/Tokenomics/Tokenomics';
import Footer from './component/Footer/Footer';
import Abtt from './component/Abtt/Abtt';


function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>

     <Abtt/>
     {/* <About/> */}
    
      {/* <Tokenomics/>  */}
     <Footer/>
    </div>
  );
}

export default App;
