import './App.css';
import About from './pages/about';
import Home from './pages/home';
import {HashRouter,Routes,Route} from 'react-router-dom';
import Login from './pages/login';
import Signup from './pages/signup';
import SignupRecruitee from './pages/signupRecruitee';
import { RecruiterPage } from './pages/recruiterPage';
import { RecruiteePage } from './pages/recruiteePage';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path='/recruiteeSignup' element={<SignupRecruitee/>}></Route>
          <Route path='/recruiterPage' element={<RecruiterPage/>}></Route>
          <Route path='/recruiteePage' element={<RecruiteePage/>}></Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
