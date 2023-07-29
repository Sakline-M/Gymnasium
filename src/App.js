import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Facilities from './pages/Facilities/Facilities';
import Services from './pages/Services/Services';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/facilities' element={<Facilities/>}/>
      <Route path='/services' element={<Services/>}/>
    </Routes>
    </>
  );
}

export default App;
