import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import {publicRoute} from "./routes/publicRoute"

function App() {
  return (
    <div>
     <Navbar>
     <Routes>
       {/* <Route path='/' element={<Home/>}></Route>
       <Route path='/about' element={<About/>}></Route>
       <Route path='/services' element={<Services/>}></Route>
       <Route path='/contact' element={<Contact/>}></Route>
       <Route path='/login' element={<Login/>}></Route> */}
      {
        publicRoute.map(({path, Component}, index) => (
          <Route key={index} path={path} element={<Component/>}></Route>
        ))
      }
     </Routes>
     </Navbar>
     
    </div>
  );
}

export default App;
