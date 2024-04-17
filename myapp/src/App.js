import logo from './logo.svg';
import './App.css';
import Comp from './comp/company';
import View from './comp/viewcompany';
import Update from './comp/update';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Edited from './comp/update';
import File from './comp/file';
import Nav from './comp/nav';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Nav/>}/>
      <Route path='/v' element={<View/>}/>
      <Route path='/u/:id' element={<Update/>}/>
      {/* <Route path='/e' element={<Edited/>}/> */}

    </Routes>
    
    </BrowserRouter>
    </>
      
    
  );
}

export default App;
