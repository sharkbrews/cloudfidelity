import React from 'react'
import Nav from './elements/Nav'
import main from './elements/images/home-four-main-img.png'

const Header = () => {
  return (
    <div className='header'>
      <Nav />

      <div className="home--main">

        <div className="home--main--content">
          <h1 className='heading'>Lorem, ipsum dolor sit amet consectetur?</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex velit in, facilis consectetur amet dolor doloribus, nulla veritatis aspernatur, deserunt animi libero expedita ad odit. Deserunt sequi ea delectus expedita?</p>
          <div className="main--btn">
            <button className='button '>Learn More</button>
            <button className='button btn--1'>How It Work</button>
          </div>
        </div>

        <div className="home--main--img">
          <div className="main-img"><img src={main} alt="mainImage" /></div>
        </div>

      </div>

    </div>
  )
}

export default Header