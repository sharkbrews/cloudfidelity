import React from 'react'
import { FaCodepen } from "react-icons/fa";
import { FaAudible } from "react-icons/fa";

const Wcu2 = () => {
  return (
    <div className='wcu2'>
        <div className="wcu2--content">
            <div className="wcu2--text">
                <h1 className="heading">Lorem ipsum dolor sit amet consectetur.</h1>
                <ul className="wcu2--ul">
                  <li className="wcu2--li">
                    <FaAudible />
                    <div className='wcu2-li-text'>
                      <h3>Lorem ipsum dolor sit amet</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus repellat assumenda natus esse ipsam nulla molestiae eaque iusto </p>
                    </div>
                  </li>
                  <li className="wcu2--li">
                    <FaCodepen />
                    <div className='wcu2-li-text'>
                      <h3>Lorem ipsum dolor sit amet</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus repellat assumenda natus esse ipsam nulla molestiae eaque iusto </p>
                    </div>
                  </li>
                </ul>
                <button className='button'>Know Details</button>
            </div>
            <div className="wcu2--cards">
              <div className="wcu2-card"><h1>90%</h1><p>lorem fsdb</p></div>
              <div className="wcu2-card"><h1>95%</h1><p>lorem jbi</p></div>
              <div className="wcu2-card"><h1>80%</h1><p>lorem hbiajbkd</p></div>
              <div className="wcu2-card"><h1>85%</h1><p>lorem jkb</p></div>
            </div>
            <div className="wcu2--cards"></div>
        </div>
    </div>
  )
}

export default Wcu2