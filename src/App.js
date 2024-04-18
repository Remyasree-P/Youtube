//import logo from './logo.svg';
import './App.css';
import LandingPage from './components/LandingPage';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import UserLogin from './components/UserLogin';
import AdminLogin from'./components/AdminLogin';
import AdminSignUp from './components/AdminSignUp';
import UserHomePage from './components/UserHomePage';
import AdminHomePage from './components/AdminHomePage';
import Error from './components/Error';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/*' element={<Error/>}/>
      <Route path='/userlogin' element={<UserLogin/>}/>
      <Route path='/adminlogin' element={<AdminLogin/>}/>
      <Route path='/adminsignup' element={<AdminSignUp/>}/>
      <Route path='/adminhomepage/*' element={<AdminHomePage/>}/>
      <Route path='/userhomepage/*' element={<UserHomePage/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;