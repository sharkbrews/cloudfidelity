import React from 'react'
import chooseUs from './images/choose-img.png'
import { BiAnalyse } from "react-icons/bi";

const Wcu1 = () => {
  return (
    <div className='wcu1'>
        <p style={{color: "aqua"}}>Why Choose US</p>
        <h1 className="heading">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h1>
        <div className="wcu1--content">
            <div className="wcu1--cards">
                <div className="wcu1-card">
                    <div className="wcu1-card-content">
                        <span><h2>1</h2><div><BiAnalyse /></div></span>
                        <div>
                            <h3>Lorem, ipsum.</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet cumque quisquam perspiciatis. Accusantium molestias accusamus minus.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="wcu1-card">
                    <div className="wcu1-card-content">
                        <span><h2>2</h2><div><BiAnalyse /></div></span>
                        <div>
                            <h3>Lorem, ipsum.</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet cumque quisquam perspiciatis. Accusantium molestias accusamus minus.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="wcu1-card">
                    <div className="wcu1-card-content">
                        <span><h2>3</h2><div><BiAnalyse /></div></span>
                        <div>
                            <h3>Lorem, ipsum.</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet cumque quisquam perspiciatis. Accusantium molestias accusamus minus.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <img src={chooseUs} alt="Chooseus" />
        </div>
    </div>
  )
}

export default Wcu1