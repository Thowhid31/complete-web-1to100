import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import { publicRoute } from "./routes/publicRoute"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Services from './Pages/Services'
import PrivetRoute from './Authentication/PrivetRoute';
import About from './Pages/About';


function App() {

  useEffect(() => {
    AOS.init();
  }, [])

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
            publicRoute.map(({ path, Component }, index) => (
              <Route key={index} path={path} element={<Component />}></Route>
            ))
          }
          {/* <Route path='/services' element={<PrivetRoute><Services/></PrivetRoute>}/> */}
          <Route element={ <PrivetRoute/> }>
            <Route path='/services' element={<Services/>}></Route>
            <Route path='/about' element={<About/>}></Route>
          </Route>
        </Routes>
      </Navbar>

    </div>
  );
}

export default App;
