import React from 'react'
import Image from 'next/image'
import client from "./img/mark1.jpg"
const Top_docu = () => {
  return (
    <div className="top_docu d-flex justify-content-center align-item-center flex-wrap ">
        <div className="** left border col-md-8">
            <h1>Everything you need to know about crystal meth</h1>
            <h2>Crystal meth, or methamphetamine, is a stimulant drug that carries a high risk for physical dependence. In the United States, a different formulation of methamphetamine called Desoxyn is available by prescription to treat attention deficit hyperactivity disorder (ADHD). </h2>
        </div>
        <div className="** right border col-md-4">
            <div className="circle border rounded-3 ">
            <Image alt='client' src={client} className='img-fluid'></Image>
            </div>
            <p className=''>
            Medically reviewed by Alyssa Peckham, PharmD, BCPP — By Yvette Brazier and Zawn Villines — Updated on August 22, 2022
            </p>
        </div>
    </div>
  )
}

export default Top_docu