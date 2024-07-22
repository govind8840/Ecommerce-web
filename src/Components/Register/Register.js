import React, { useState } from 'react'
import './register.css'
import { Link } from 'react-router-dom';
const Register = () => {
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [cpassword, setcpassword] = useState("")

  const senddata = () => {
    debugger
    let getRegisterData = localStorage.getItem("localRegisterData");
    console.log("getRegisterData", getRegisterData);
    getRegisterData = JSON.parse(getRegisterData)
    const ajax = {
      "email": email, "password": password, "cpassword": cpassword
    }
    if (password == cpassword) {
      getRegisterData = [...getRegisterData, ajax];
      getRegisterData = JSON.stringify(getRegisterData);
      localStorage.setItem("localRegisterData", getRegisterData);
      alert("User Rgister Successfully")
    } else {
      alert("Enter Correct password and confirm passwoard")
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
                    <input type="email" className="form-control" value={email} onChange={(e) => setemail(e.target.value)} />
                    <div className="form-text">Enter your Email</div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" value={password} onChange={(e) => setpassword(e.target.value)} />
                    <div className="form-text">Enter your Password</div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" value={cpassword} onChange={(e) => setcpassword(e.target.value)} />
                    <div className="form-text">Enter your Password</div>
                  </div>

                  <div className='text-center'>
                    <button className="btn btn-primary" onClick={() => senddata()}>Register</button>
                  </div>

                  <div className="text-center">
                    <button className='btn'>Already have a account</button>
                    <Link className='btn text-primary' to="/login"> Login</Link>
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

export default Register;
