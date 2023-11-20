import './App.css';
import About from './pages/about';
import Home from './pages/home';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './pages/login';
import Signup from './pages/signup';
import SignupRecruitee from './pages/signupRecruitee';
import { RecruiterPage } from './pages/recruiterPage';
import { RecruiteePage } from './pages/recruiteePage';
import Profile from './pages/profile';
import Hrprofile from './pages/hrProfile';
import HrJobs from './pages/JobsHR';
import Jobs from './pages/jobs';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path='/recruiteeSignup' element={<SignupRecruitee/>}></Route>
          <Route path='/recruiterPage/:id' element={<RecruiterPage/>}></Route>
          <Route path='/recruiteePage/:id' element={<RecruiteePage/>}></Route>
          <Route path='/recruiteePage/profile/:id' element={<Profile/>}></Route>
          <Route path='/recruiterPage/hrProfile/:id' element={<Hrprofile/>}></Route>
          <Route path='/recruiterPage/jobs/:id' element={<HrJobs/>}></Route>
          <Route path='/recruiteePage/jobs/:id' element={<Jobs/>}></Route>
          <Route path='/recruiteePage/about/:id' element={<About/>}></Route>
        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
