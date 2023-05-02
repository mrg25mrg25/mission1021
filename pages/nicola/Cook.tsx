import React from 'react'
const Cook = () => {
  return (
  <>

      <div className='mx-auto mb-5 mt-3 contact 'id='top' >
     <form
  action="https://formspree.io/f/xoqzpljk"
  method="POST" className='' id='bottom'>
    <div className="push d-flex flex-column text-center" >
  <label id='it' className='fw-bold  '>
    Your email:
    <input type="email" name="email"className='email' />
  </label>
  <label className='fw-bold'>
    Your message:
    <textarea name="message" className='message'></textarea>
  </label>
  <button type="submit" className='mx-auto fw-bold btn btn-dark col-md-1 mt-5'>Send</button>
  </div>
</form>
    </div>





</>

  )
}

export default Cook