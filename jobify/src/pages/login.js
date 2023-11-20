import React, {useState} from 'react';
import image from '../assets/hi.svg';
import '../Style.css';
import Axios from 'axios';
import Carousel from '../components/Carousel';
import { useNavigate } from 'react-router-dom';

export default function Form() {
  const mystyle = {
    color: '#2ba4e4',
    fontFamily: 'Montserrat',
    fontSize: '18px',
  };

  const imgstyle = {
    height: '35px',
    width: '35px',
  };
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const loginRecruitee=()=>{
        const data={username:username,password:password};
        Axios.post("http://localhost:4000/recruiteeRoute/login",data)
        .then((res)=>{
          if (res.status === 200 && res.data.message === 'Login successful') {
            alert("Login successful");
            navigate(`/recruiteePage/${res.data.recruitee._id}`,{ state: res.data.recruitee._id });
          } else {
            alert("login failed");
          }
        }).catch((err)=>alert("Invalid credentials"))
      }
  const loginRecruiter=()=>{
        const data={username:username,password:password};
        Axios.post("http://localhost:4000/recruiterRoute/login",data)
        .then((res)=>{
          console.log(res.status);
          console.log(res.data.message);
          if (res.status === 200 && res.data.message === 'Login successful') {
            alert("Login successful");
            navigate(`/recruiterPage/${res.data.recruiter._id}`,{state:res.data.recruiter._id});
          } else {
            alert("Invalid Credentials");
          }
        }).catch((err)=>alert("Invalid credentials"))
      }

  return (
    <section>
      <div className="register">
        <div className="col-md-6">
          <Carousel />
        </div>
        <div className="col-1 col-md-6">
          <form id="form" className="d-flex flex-column col-6 mx-auto gap-2 text-start">
            <img src={image} style={imgstyle} alt="Hello!!" />
            <h2>Welcome back!</h2>
            <span>Please login to access your account.</span>
          
            <div className="info d-flex flex-row justify-content-between">
              <label htmlFor="username">Username</label>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-info-circle"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
              </svg>
            </div>
            <input
              type="text"
              name="username"
              value={username} onChange={(e) => setUsername(e.target.value)}
              placeholder="Type your username"
            />
           
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              name="password"
              value={password} onChange={(e) => setPassword(e.target.value)}
              placeholder="Type your password"
            />
            <span style={mystyle}>Forgot Password?</span>
            <span style={mystyle}>Login as</span>
            <div className="d-flex flex-row justify-content-between">
              <button className="btn btn-primary btn col-5" onClick={(e) => { e.preventDefault(); loginRecruiter(); }}>Recruiter</button>
              <button className="btn btn-primary btn col-5" onClick={(e) => { e.preventDefault(); loginRecruitee(); }}>Recruitee</button>
            </div>
            <p>
              Don't have an account?<span style={mystyle}>SignUp</span>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
