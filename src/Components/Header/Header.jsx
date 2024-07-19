import React from 'react'
 import './header.css'
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <>
<nav className="navbar navbar-expand-lg  cus-navbar">
  <div className="container">
    <a className="navbar-brand cus-brand" href="#"><h3>E-commerce</h3>

    </a>

    {/* <a className="nav-link cus-link" href="#"><i class="bi bi-cart"></i> Cart</a>
    <a className="nav-link cus-link" href="#"><i class="bi bi-person-circle"></i> Sign in</a> */}
    {/* <a className="nav-link cus-link" aria-current="page" href="#"><i class="bi bi-geo-alt"></i> Deliver to
Mumbai 400020

</a> */}

   <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <a className="nav-link cus-link" aria-current="page" href="#"><i class="bi bi-geo-alt"></i> Deliver to
Mumbai 400020

</a>
      </li>
      <li className="nav-item">
        <a className="nav-link cus-link" href="#"data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i class="bi bi-cart"></i> Cart</a>
      </li>
      <li className="nav-item">
        <Link className="nav-link cus-link" to="/login"><i class="bi bi-person-circle"></i> Sign in</Link>
      </li>
  
     
    </ul>
    <form className="d-flex">
 
      <input className="form-control me-2" type="search" placeholder="Search product" aria-label="Search" />
      <button className="btn btn-light" type="submit"><i class="bi bi-search"></i></button>
   
    </form>
  </div>
</div>

      


</nav>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container">
    {/* <a class="navbar-brand" href="#">Navbar</a> */}
    <a class="nav-item dropdown">
          <a class="nav-link cus-link2 dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Categories

          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Bags</a></li>
            <li><a class="dropdown-item" href="#">cloths</a></li>
            {/* <li><hr class="dropdown-divider"/></li> */}
            <li><a class="dropdown-item" href="#">shoes</a></li>
          </ul>
        </a>
  </div>
</nav>



{/* <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Toggle right offcanvas</button> */}

<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-header">
    <h5 id="offcanvasRightLabel">Offcanvas right</h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body cus-canvas-body">
   <div className="card offcancard-product">
      <div className="row align-items-center">
         <div className="col-4">
           <div className="product-img">
            <img src="https://www.jiomart.com/images/product/original/490001992/brooke-bond-red-label-strong-blend-tea-1-kg-product-images-o490001992-p490001992-0-202304281622.jpg?im=Resize=(420,420)" className="img-fluid"alt="" />
           </div>
         </div>
         <div className="col-8"
         >

   <div className="product-data">
     <p>Amul Butter 500 g (Carton)</p>
     <p>₹300</p>
       <div className="button_qnt py-2">
          <button className='btn btn-primary'>+</button>
            <span className='btn'>0</span>
            <button className='btn btn-primary'>-</button>
            <button className='btn btn-danger mx-1'><i class="bi bi-x-lg"></i></button>
       </div>
         
   </div>
         </div>
      </div>
   </div>
   <div className="card offcancard-product">
      <div className="row align-items-center">
         <div className="col-4">
           <div className="product-img">
            <img src="https://www.jiomart.com/images/product/original/490001992/brooke-bond-red-label-strong-blend-tea-1-kg-product-images-o490001992-p490001992-0-202304281622.jpg?im=Resize=(420,420)" className="img-fluid"alt="" />
           </div>
         </div>
         <div className="col-8"
         >

   <div className="product-data">
     <p>Amul Butter 500 g (Carton)</p>
     <p>₹300</p>
       <div className="button_qnt py-2">
          <button className='btn btn-primary'>+</button>
            <span className='btn'>0</span>
            <button className='btn btn-primary'>-</button>
            <button className='btn btn-danger mx-1'><i class="bi bi-x-lg"></i></button>
       </div>
         
   </div>
         </div>
      </div>
   </div>
   <div className="card offcancard-product">
      <div className="row align-items-center">
         <div className="col-4">
           <div className="product-img">
            <img src="https://www.jiomart.com/images/product/original/490001992/brooke-bond-red-label-strong-blend-tea-1-kg-product-images-o490001992-p490001992-0-202304281622.jpg?im=Resize=(420,420)" className="img-fluid"alt="" />
           </div>
         </div>
         <div className="col-8"
         >

   <div className="product-data">
     <p>Amul Butter 500 g (Carton)</p>
     <p>₹300</p>
       <div className="button_qnt py-2">
          <button className='btn btn-primary'>+</button>
            <span className='btn'>0</span>
            <button className='btn btn-primary'>-</button>
            <button className='btn btn-danger mx-1'><i class="bi bi-x-lg"></i></button>
       </div>
         
   </div>
         </div>
      </div>
   </div>
  </div>
   <div className="card-footer">
   <div className="bal-box">
      <p>Total Amount</p>
       <p>₹ 3400</p>
   </div>
   <div className="offcanvasbtn">
         <div className="row">
           <div className="col-6">
               <button className='btn btn-danger w-100'>Cancel</button>
           </div>
           <div className="col-6">
           <button className='btn btn-primary w-100'>Pay</button>
           </div>
         </div>
   </div>
   </div>
</div>

    </>
  )
}

export default Header;
