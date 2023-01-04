
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import {Home}  from "./components/home"
import {About} from "./components/about"
import {Contact} from "./components/contact"

function App() {
  return (
    <>
    <nav>
      <div className='container'>
        <div className= 'home'>
        <Link className='links' to='/'>Kalvium ❤️</Link>
        </div>
        <div className='about'>
        <Link className='link' to='/contact'>Contacts</Link>
        <Link className='link' to='/about'>About</Link>
        </div>
      </div>
      
    </nav>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </>
    
  
  );
}

export default App;
