import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Footer from "./components/inc/Footer";
import Navbar from './components/inc/Navbar';
import Aboutus from './components/pages/About';
import Contactus from './components/pages/Contact';
import Home from './components/pages/Home';

function App() {
  return (
      <div> 
    <Router>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/about' element={<Aboutus/>}/>
          <Route exact path='/contact' element={<Contactus/>}/>
        </Routes>
        <Footer/>
   </Router>
      </div> 
  );
}

export default App;
