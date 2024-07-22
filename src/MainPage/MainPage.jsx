import React, { useEffect, useState } from 'react'
import './main.css'
import Productcard from '../Components/ProductCard/Productcard';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import { register } from '../Components/jsonData/user';
const MainPage = () => {
  const [data, setdata] = useState(register);
  let getUserData = localStorage.getItem("userLoginData");
  getUserData = JSON.parse(getUserData);
  console.log("userLoginData",getUserData)

  return (
    <div>
      <Header />
      <div className='Main_page'>
        <div className="container py-4">
          <div className="row">
            {/* <Productcard /> */}
            <div className="col-4">
              {
                getUserData.map((user) => {
                  return (
                    <div className="card bg-dark text-lite">
                      <p>{user?.email}</p>
                      <p>{user?.password}</p>
              
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default MainPage;

