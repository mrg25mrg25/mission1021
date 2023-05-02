import React from 'react'
import Navbar from './Navbar'
import Cook from './Cook'
import Image from 'next/image'
import lung from "./img/lung.jpg"
import linda from "./img/doctor.jpg"
import Jump from './Jump'
const Jesse = () => {
  return (
    <div>
      <Navbar/>
      <div className="jesse container d-flex justify-content-between align-items-center pt-5 pb-5
      flex-wrap ">
        <div className="leftside  col-md-6 my-auto mx-auto">
          <h2 className='  text-center fw-bold '>What's Normal, What's Not? </h2>
        </div>
        <div className="rightside col-md-6 mx-auto
       ">
           <div className="under">
           <Image alt='img' src={lung} id='lung'className='  float-md-end' />
           </div>
        </div>

       <div className="linda d-flex justify-content-between align-items-center
       flex-wrap">
        <div className="figure col-md-4 rounded thumbline border ">
          <Image alt='' src={linda} className='img-fluid'></Image>
          <p className='my-auto text-center'>dr.Linda, kazirpagla deperment</p>
        </div>
        <div className="healthy col-md-6">
          <p className='text-purple fs-1 fw-bolder'>Living Healthy</p>
          <h6> to live an inspiring life through natural beauty, nutrition and diet, an active lifestyle, and better relationships. </h6>
        </div>
       
       </div>

      </div>
      <Jump/>
      <Cook/>
    </div>
  )
}

export default Jesse