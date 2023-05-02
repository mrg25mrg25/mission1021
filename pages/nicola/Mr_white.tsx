import React from 'react'
import Image from 'next/image'
import dr from "./img/a.jpg"
import Details from './Details'
import Navbar from './Navbar'
import Cook from './Cook'
const Mr_white = () => {
  return (
 <>
 <Navbar/>
 <div className="walter_white row justify-content-crnter border ">
  <div className="left col-md-8 border ">
    <h1 className=''>What is Crystal Meth?</h1>
    <h2 className=''>What You Should know about crystal meth?</h2>
    <div className="about">
      <p>Medically Reviewed by Dany Paul Baby, MD on April 19, 2022 </p>
      <span>written by nicola goodman</span>
    </div>
    <div className="articcle">
      <h5 className='fw-bold'>in this article</h5>
      <div className="articles d-md-flex justify-content-center gap-5 ">
        <p className='col-md-3 bg-dark text-white p-2 text-center rounded-3'>this is not safe</p>
        <p className='col-md-4 bg-dark text-white p-2 text-center rounded-3'>that effects your brain</p>
      </div>
      <div className="other2 d-md-flex justify-content-center gap-2 
      mx-auto text-center">
        <p className='col-md-5  bg-dark text-white p-2 text-center rounded-3'>that's an thread to human nation</p>
        <p className='col-md-5 bg-dark text-white p-2 text-center rounded-3'>
          you lose control over yourself</p>
        </div>
    </div>
  </div>
  <div className="right col-md-4 border ">
    <h2 className=''>do you want meth? better call jesse</h2>
    <div className="dr">
    <Image src={dr} alt='' className='img-fluid thumbline rounded' />
    </div>
  </div>
 </div>
 <Details/>
 <Cook/>





 </> 
   
  )
}

export default Mr_white