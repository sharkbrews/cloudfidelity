import React from 'react'
import AboutUs from './elements/AboutUs'
import Services from './elements/Services'
import Wcu1 from './elements/Wcu1'
import Wcu2 from './elements/Wcu2'
import corner_r from './elements/images/corner-r.png'
import corner_l from './elements/images/corner-l.png'

const MainContainer = () => {
  return (
    <div className='maincontainer'>

      <div className="cont1">
        <AboutUs />
      </div>
      <div className="cont2">
        <img src={corner_r} className="corner-img-r" />
        <img src={corner_l} className="corner-img-l" />
        <Services />
      </div>
      <div className='cont3'>
        <div className="why-choose-us">
          <Wcu1 />
          <Wcu2 />
        </div>
      </div>

    </div>
  )
}

export default MainContainer