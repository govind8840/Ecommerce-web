import React from 'react'
import './register.css'
import { Link } from 'react-router-dom';
const Register = () => {
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
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Confirm Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" />
    <div id="emailHelp" className="form-text">Enter your Password</div>
  </div>
  
   <div className='text-center'>
   <button type="submit" className="btn btn-primary">Register</button>
   </div>

    <div className="text-center">
         <button className='btn'>Already have a account</button>
         <Link className='btn text-primary' to="/login"> Login</Link>
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

export default Register;
