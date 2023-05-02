import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div className='topSection '>  
      <nav className=" navbar navbar-expand-lg navbar-light bg-light  row justify-content-between ">
  <div className="container-fluid" id='navigation'>
     <h1 className=' col-6 fw-bold container '>Heisenbrug</h1>
    <button className="navbar-toggler " id='icon' type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse
          row justify-content-between  col-6 mx-auto text-center" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 
      ">
        <li className="nav-item col-6 pt-3  ">
          <Link href="/nicola/Mr_white" className='text-decoration-none text-dark fs-3 '>
          <p className=' text-center btn btn-dark fw-bold 'id=''>Mr.white</p>
          </Link>
        </li>
        <li className="nav-item col-6 pt-3">
        <Link href="/nicola/Jesse"className='text-decoration-none text-dark
        fs-3  '>
        <p id='e_pd' className='btn btn-dark fw-bold'>Jesse</p>
       </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar