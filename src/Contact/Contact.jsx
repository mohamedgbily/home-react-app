import React from 'react'

export default function Contact() {
  return <>
  <div className="contact p-5">
    <div className="container">
      <div className="head text-center">
        <h2 >CONATCT SECTION</h2>
        <div className='d-flex justify-content-center align-content-center'>
         <div className="line1"></div>
         <i className='fa-solid fa-star'></i>
         <div className="line1"></div>
        </div>
  
        <form action="" className='w-50 mx-auto p-3 mt-5'>
          <input type="text" placeholder='userName' className='form-control py-3 border-0 border-bottom mb-4'/>
          <input type="text" placeholder='userAge' className='form-control py-3 border-0 border-bottom my-4'/>
          <input type="text" placeholder='userEmail' className='form-control py-3 border-0 border-bottom '/>
          <input type="text" placeholder='userPassword' className='form-control py-3 border-0 border-bottom my-4
          '/>
          <button className='btn  mt-3  text-white '>send Message</button>
        </form>



      </div>
    </div>
  </div>
  
  </>
 
}
