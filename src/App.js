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
import AdminRoute from './Authentication/AdminRoute';
import Dashboard from './Pages/Dashboard/Dashboard';
import AddAdmin from './Pages/Dashboard/AddAdmin'
import AddService from './Pages/Dashboard/AddService'


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
          <Route element={<AdminRoute></AdminRoute>}>
            <Route path='/dashboard' element={<Dashboard></Dashboard>}>
              <Route path='add-admin' element={<AddAdmin />} />
              <Route path='add-service' element={<AddService />} />
            </Route>
          </Route>
        </Routes>
      </Navbar>

    </div>
  );
}

export default App;
