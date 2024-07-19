import React from 'react'
import './../Login/login.css'
import { Link } from 'react-router-dom'

const Forgot = () => {
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

   <div className='text-center'>
   <Link type="submit" className="btn btn-primary" to="/resetpassword">Reset Password</Link>
   </div>

    {/* <div className="text-center">
         <button className='btn'>Forgot?</button>
         <Link className='btn text-primary' to="/register">Register</Link>
    </div> */}
</form>

                        </div>
                    </div>
                </div>
            </div>
      </section>
    </>
  )
}

export default Forgot;
