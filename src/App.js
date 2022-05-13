import './App.css';
import Navbar from './components/Navbar';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Login from './Pages/Login';

function App() {
  return (
    <div>
     <Navbar>
     <Home/>
      <About/>
      <Contact/>
      <Login/>
     </Navbar>
     
    </div>
  );
}

export default App;
