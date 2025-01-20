import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './Pages/Home';
import About from './Pages/About';
import Table from './Pages/Table';
import ToDo from './Pages/ToDo';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='' element={<Home/>}/>
        <Route exact path='/about' element={<About/>}/>
        <Route exact path='/table' element={<Table/>}/>
        <Route exact path='/todo' element={<ToDo/>}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
