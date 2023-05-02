import React from 'react'
import Image from 'next/image'
import jesse from "./img/a.jpg"
const Jump = () => {
  return (
    <div className="jump">
    <div className='d-flex justify-content-center align-items-center mb-5 flex-wrap'>
        <div className="col-md-4 container">
            <hr className=''/>
        </div>
        <div className="col-md-4 mx-auto">
          <h1 className='text-center'>jump&start by jesse pinkman</h1>
        </div>
        <div className="col-md-4 container">
            <hr className=''/>
        </div>
    </div>
    <div className="pinkman d-flex justify-content-between align-items-center flex-wrap container
     ">
      <div className=" col-md-6 ">
      <h1 className='fw-bolder'>take care of your health</h1>
      <p>The first step is to learn the days when you're most fertile. Most women have a 28-day menstrual cycle. That means you have about 6 days each month when you can get pregnant. That includes the day that one of your ovaries releases an egg, called ovulation, and the 5 days before. Having sex within that window is key. You can’t get pregnant without ovulation, and tracking your monthly periods is one way to get familiar with your body’s fertility.</p>
      </div>
      <div className=" col-md-4 ">
        <div className="figure border  text-end">
          <Image className='img-fluid  border ' alt='img' src={jesse}></Image>
          <p className='text-center align-items-center border my-auto'>dr. jesee pinkman</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Jump