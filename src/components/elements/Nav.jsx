import React from 'react';
import logo from '../elements/images/logo192.png';
import {FaRegArrowAltCircleRight} from "react-icons/fa";
import {IoIosArrowForward} from "react-icons/io";

const Nav = () => {
  return (
    <div className='nav'>
        <div className="logo">
            <img src={logo} alt="logo" />
            <p>Logo</p>
        </div>

        <ul className='navEle'>
            <a href="#"><li><p>Home</p> <IoIosArrowForward /></li></a>
            <a href="#"><li><p>About</p> <IoIosArrowForward /></li></a>
            <a href="#"><li><p>Pages</p> <IoIosArrowForward /></li></a>
            <a href="#"><li><p>Services</p> <IoIosArrowForward /></li></a>
            <a href="#"><li><p>Shop</p> <IoIosArrowForward /></li></a>
            <a href="#"><li><p>News</p> <IoIosArrowForward /></li></a>
            <a href="#"><li><p>Contact</p> <IoIosArrowForward /></li></a>
        </ul>

        <div className="button login">
            <p>Log In</p>
            <FaRegArrowAltCircleRight />
        </div>
    </div>
  )
}

export default Nav