import React from 'react'
 import "../Login/login.css"
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <>

      <section className="log-bg">
      <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="login-box">
<form>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    <div id="emailHelp" className="form-text">Enter your Email</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" />
    <div id="emailHelp" className="form-text">Enter your Password</div>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
    <label className="form-check-label" htmlFor="exampleCheck1">Remember ?</label>
  </div>
   <div className='text-center'>
   <button type="submit" className="btn btn-primary"> Login</button>
   </div>

    <div className="text-center">
         <Link className='btn' to="/forgot">Forgot?</Link>
         <Link className='btn text-primary' to="/register">Register</Link>
    </div>
</form>

                        </div>
                    </div>
                </div>
            </div>
      </section>

        </>
    )
}

export default Login;
