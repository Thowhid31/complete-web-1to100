import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import { publicRoute } from "./routes/publicRoute"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
// import Services from './Pages/Services'
import PrivetRoute from './Authentication/PrivetRoute';
// import About from './Pages/About';
import { privateRoutes } from './routes/privateRoutes'


function App() {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div>
      <Navbar>
        <Routes>
          {
            publicRoute.map(({ path, Component }, index) => (
              <Route key={index} path={path} element={<Component />}></Route>
            ))
          }
          <Route element={<PrivetRoute />}>
            {

              privateRoutes.map(({ path, Component }, index) => (
                <Route key={index} path={path} element={<Component />}></Route>
              ))
            }
          </Route>
        </Routes>
      </Navbar>

    </div>
  );
}

export default App;
