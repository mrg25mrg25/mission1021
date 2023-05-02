import React from 'react'
import Image from 'next/image'
import drug from "./img/z.jpg"
import walter from"./img/ll.jpg"
const Details = () => {
  return (
     <div className="row container border mx-auto" >
      <div className="col-md-6">
         <p> 1. Methamphetamine is a man-made stimulant that's been around for a long time. During World War II, soldiers were given meth to keep them awake. People have also taken the drug to lose weight and ease depression. Today, the only legal meth product is a tablet for treating obesity and attention deficit hyperactivity disorder (ADHD). It's rarely used and is available only by prescription.  Find out the differences between Adderall and methamphetamines, as well as amphetamines vs. methamphetamines.</p>

         <p> 2. Meth can make a user's body temperature rise so high they could pass out or even die. Learn more about meth overdose deaths in the U.S.
         A user may feel anxious and confused, be unable to sleep, have mood swings, and become violent.  Read more on the physical signs of meth use.</p>
         <div className="meth mx-auto  ">
        <Image alt='' src={walter} className='take  border rounded'
        ></Image>
      </div>
      <p className='text-center'>walter white the chemest</p>
      </div>

      <div className="col-md-6">
        <div className="meth mx-auto  ">
        <Image alt='' src={drug} className='take  border rounded'
        ></Image>
        </div>
        <h5 className='fw-bold text-center '>How Does It Make You Feel?</h5>
        <p>The powerful rush people get from using meth causes many to get hooked right from the start. When it's used, a chemical called dopamine floods the parts of the brain that regulate feelings of pleasure. Users also feel confident and energetic.</p>
        <p>A user can become addicted quickly and soon finds they will do anything to have the rush again. As they continue to use the drug, they build up a tolerance. That means they need higher doses to get the same high. The higher the dose, the higher the risks. </p>
      </div>

     </div>
  )
}

export default Details