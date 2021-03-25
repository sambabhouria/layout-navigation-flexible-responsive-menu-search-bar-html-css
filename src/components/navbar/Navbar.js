import React from "react";
import { NavLink} from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css';


import './nav.css';

export const Navbar = () => {
  return (
   <>
    <input type='checkbox' id='check'/>
    <nav>
      <div className='icon'><b style={{color: "red"}}>P</b>ro Design</div>
      <div className='search_box'>
        <input type='search' placeholder= 'Search here' />
        <span className='fa fa-search'></span>
      </div>
      <ol>
        <li><NavLink exact activeClassName="active" to='/home'>home</NavLink></li>
        <li><NavLink exact activeClassName="active" to='/contact'>contacts</NavLink></li>
        <li><NavLink exact activeClassName="active" to='/services'>services</NavLink></li>
        <li><NavLink exact activeClassName="active" to='/about'>about</NavLink></li>
        <li><NavLink exact activeClassName="active"to='/login'>login here</NavLink></li>
      </ol>
      <label htmlFor='check' className='bar'>
        <span className='fa fa-bars' id='bars'></span>
        <span className='fa fa-times' id='times'></span>

      </label>
    </nav>
    <section></section>
   </>
  )
}
