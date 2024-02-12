
import React from 'react'
import myimg from '../images/hero.svg'
export default function Home() {
  return <>
  <div className="home p-5">
<div className="home-app text-center">
<img className='img-sy p-3' src={ myimg } alt="hero"/>
    <h2 className='text-center text-white' >START FRAMEWORK</h2>
        <div className='d-flex justify-content-center align-content-center text-white'>
         <div className="line"></div>
         <i className='fa-solid fa-star'></i>
         <div className="line"></div>
  </div>
  <p className=' text-white pt-2'>Graphic Artist - Web Designer - Illustrator</p>

  </div>
</div>
  
  </>
}
