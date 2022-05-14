import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Services from './Pages/Services';

const publicRoute = [
  {path:'/', name: 'Home', Component: Home},
  {path:'/about', name: 'About', Component: About},
  {path:'/services', name: 'Services', Component: Services},
  {path:'/contact', name: 'Contact', Component: Contact},
  {path:'/login', name: 'Login', Component: Login},
];

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
        publicRoute.map(({path, Component}) => (
          <Route path={path} element={<Component/>}></Route>
        ))
      }
     </Routes>
     </Navbar>
     
    </div>
  );
}

export default App;
