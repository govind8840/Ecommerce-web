import React, { useState ,} from 'react'
import "../Login/login.css"
import { Link ,useNavigate} from 'react-router-dom';

const Login = () => {
  const navigation=useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email && password) {
      let getLocalData = localStorage.getItem("localRegisterData");
      getLocalData = JSON.parse(getLocalData);
      const filterData = getLocalData.filter((value) => value.email === email && value.password === password);
      if (filterData.length>0) {
        localStorage.setItem("userLoginData",JSON.stringify(filterData))
        navigation("/")
      } else {
        alert("User is not found plase register first")
      }

    } else {
      alert("Enter Email and Password")
    }
  }

  return (
    <>
      <section className="log-bg">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="login-box">
                <div>
                  <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <div className="form-text">Enter your Email</div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Password</label>

                    <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <div id="emailHelp" className="form-text">Enter your Password</div>
                  </div>
                  <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Remember ?</label>
                  </div>
                  <div className='text-center'>
                    <button className="btn btn-primary" onClick={() => handleLogin()}> Login</button>
                  </div>

                  <div className="text-center">
                    <Link className='btn' to="/forgot">Forgot?</Link>
                    <Link className='btn text-primary' to="/register">Register</Link>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default Login;
