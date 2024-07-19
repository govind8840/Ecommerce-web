import React from 'react'
import './main.css'
import Productcard from '../Components/ProductCard/Productcard';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
const MainPage = () => {
  return (
    <div>
      <Header />
      <div className='Main_page'>
        <div className="container py-4">
          <div className="row">
            <Productcard />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default MainPage;

