import React, { useEffect } from 'react'
import './productcard.css'
// import data from '../jsonData/Data.json';

import  { useState } from 'react';
import axios from 'axios';



const Productcard = () => {
  const [productdata, setproductdata]=useState([])
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
   const  fetchdata = async ()=>{
    const res = await axios("https://dummyjson.com/products") 
      setproductdata(res.data.products) 
      console.log(res.data.products) 
   }
   useEffect(()=>{
      fetchdata()
   },[])

  return (
    <>

    
            
                {
                    productdata?.map((item)=>{
                        return(
                              <div className="col-md-3">
                                <div className="card cus-card">
                            <img src={item.images} alt="" />
                             <div className="card-body cus-body">
                              <p>{item.title}</p>
                              <p>₹{item.price}</p>
                               <p>₹600.00  <del>22% OFF</del></p> 
                             </div>
                             <div className="footer">
                               <button className='btn btn-primary w-100'>Add To Cart</button>
                             </div>
                           </div>
                              </div>
                        )
                    })
                }


             
              
    </>
  )
}

export default Productcard;
