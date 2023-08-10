import './App.scss';
import {Routes, Route } from "react-router-dom";
import Nav from './component/Nav';
import Home from './component/Home';
import Destination from './component/Destination';
import Crew from './component/Crew';
import Technology from './component/Technology';
import Planet from './component/Planet';

function App() {
  return (
      <Routes>
        <Route path='/' element={<Nav />}>
          <Route index element={<Home/>} />
          <Route path='/destination/' element={<Destination/>}/>
          <Route path='/destination/:id' element={<Destination/>}/>
          <Route path='/crew' element={<Crew/>} />
          <Route path='/technology' element={<Technology/>} />
       </Route>
      </Routes>
  );
}

export default App;
