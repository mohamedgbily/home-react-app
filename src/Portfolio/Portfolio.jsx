import React, { useEffect } from 'react'
import img1 from '../images/poert1.png'
import img2 from '../images/port2.png'
import img3 from '../images/port3.png'
import { logDOM } from '@testing-library/react'


export default function Portfolio() {
  
 
function getImg(){
 
}
useEffect(function(){
  let x = document.querySelectorAll('.card-body')
  for (let i = 0; i < x.length; i++) {
    x[i].addEventListener('click' , function(){
      let y = x[i].querySelector('.card-body img').getAttribute('src');
     console.log(y);
     document.querySelector('.inner img').setAttribute('src',`${y}`)
     document.querySelector('.inner').classList.remove('d-none')
    })
    document.querySelector('.inner').addEventListener('click' ,function(e){
      if( e.target == document.querySelector('.inner img') ){
        document.querySelector('.inner').classList.remove('d-none')
      
      }
      else{
        document.querySelector('.inner').classList.add('d-none')
      
      }
     
    })
  }
  return function(){
    let x = document.querySelectorAll('.card-body')
  for (let i = 0; i < x.length; i++) {
    x[i].removeEventListener('click' , function(){
      let y = x[i].querySelector('.card-body img').getAttribute('src');
     console.log(y);
     document.querySelector('.inner img').setAttribute('src',`${y}`)
     document.querySelector('.inner').classList.remove('d-none')
    })
  }
    
  }
},[])

  return <>
  <div className="portfolio p-5">

  <h2 className='text-center p-4'>PORTFOLIO COMPONENT</h2>
  <div className='d-flex justify-content-center align-content-center'>
         <div className="line1"></div>
         <i className='fa-solid fa-star'></i>
         <div className="line1"></div>
        </div>
        <div className="container">
          <div className="row g-4 p-5">
            <div className="col-md-4  ">
              <div className="card-body ">
              <img className='w-100 rounded-3' src={img1} alt="img" />
              <div className="layer">
                <i className='fa-solid fa-plus fa-6'></i>
              </div>
              </div>
            </div>
            <div className="col-md-4 ">
              <div className="card-body ">
              <img className='w-100 rounded-3' src={img2} alt="img" />
              <div className="layer">
                <i className='fa-solid fa-plus fa-6'></i>
              </div>
              </div>
            </div>
            <div className="col-md-4 ">
              <div className="card-body  rounded">
              <img className='w-100 rounded-3' src={img3} alt="img" />
              <div className="layer">
                <i className='fa-solid fa-plus fa-6'></i>
              </div>
              </div>
            </div>
            <div className="col-md-4 ">
              <div className="card-body ">
              <img className='w-100 rounded-3' src={img1} alt="img" />
              <div className="layer">
                <i className='fa-solid fa-plus fa-6'></i>
              </div>
              </div>
            </div>
            <div className="col-md-4 ">
              <div className="card-body ">
              <img className='w-100 rounded-3' src={img2} alt="img" />
              <div className="layer">
                <i className='fa-solid fa-plus fa-6'></i>
              </div>
              </div>
            </div>
            <div className="col-md-4 ">
              <div className="card-body  rounded">
              <img className='w-100 rounded-3' src={img3} alt="img" />
              <div className="layer">
                <i className='fa-solid fa-plus fa-6'></i>
              </div>
              </div>
            </div>
          </div>
         <div className="inner  start-0 top-0 bg-opacity-25 bg-primary h-100 w-100 d-none">
         <div className="innerimg-layer">
            
          </div>
          <img className=''  alt="" />
         </div>
        </div>
    
        











  </div>
  
  
  </>

}
