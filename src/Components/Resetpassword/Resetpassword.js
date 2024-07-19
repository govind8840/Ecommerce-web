import React from 'react'
import { Link } from 'react-router-dom';

const Resetpassword = () => {
  return (
    <div>
         <section className="log-bg">
      <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="login-box">
<form>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Enter OTP</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    <div id="emailHelp" className="form-text">Enter your Email</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" />
    <div id="emailHelp" className="form-text">Enter your Password</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label"> Confirm Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" />
    <div id="emailHelp" className="form-text">Enter your Password</div>
  </div>
 
   <div className='text-center'>
   <button type="submit" className="btn btn-primary">Set Password</button>
   </div>

    {/* <div className="text-center">
         <button className='btn'>Forgot?</button>
         <Link className='btn text-primary'to="//resetpassword">Register</Link>
    </div> */}
</form>

                        </div>
                    </div>
                </div>
            </div>
      </section>
    </div>
  )
}

export default Resetpassword;
