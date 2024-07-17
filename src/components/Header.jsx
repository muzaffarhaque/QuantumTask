import React from 'react'
import { FaBarsStaggered } from "react-icons/fa6";
export default function Header() {
  return (
    <div className="container">
    <header className='header '>
      <h4 className=' fs-24-16 fw-semibold text-primary'>Jillion Technologies</h4>
      <input type="checkbox" name="" id="so" className=' d-none'/>
      <label htmlFor="so">
      <FaBarsStaggered className='menu mb-show'/>
      </label>

      <ul className='nve-bar'>
        <li className=' fs-18-14 text-primary'>Home</li>
        <li className=' fs-18-14 text-primary'>Feature</li>
        <li className=' fs-18-14 text-primary'>Product</li>
        <li className=' fs-18-14 text-primary'>testimonials</li>
        <li className=' fs-18-14 text-primary '>Contact Us</li>
      </ul>
    </header>
    </div>
  )
}
