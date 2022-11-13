import React from 'react'
import cont1Img from './images/about-img-three.png';
import { FaRegCheckCircle } from "react-icons/fa";

const AboutUs = () => {
    return (
        <div className="cont1--main">
            <div className="corsel1"></div>
            <div className="cont1--content">
                <img src={cont1Img} alt="cont1-image" />
                <div className="cont1--text">
                    <p style={{ color: "#1dd3f8" }}>About Us</p>
                    <h1 className='heading'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad qui neque perferendis asperiores fuga eaque obcaecati. Id, voluptatibus repellendus natus maxime quasi temporibus alias autem quibusdam placeat ipsa adipisci sed?</p>
                    <ul>
                        <div>
                            <li><div className="icontick"><FaRegCheckCircle /></div><p>Lorem, ipsum.</p></li>
                            <li><div className="icontick"><FaRegCheckCircle /></div><p>Lorem, ipsum.</p></li>
                            <li><div className="icontick"><FaRegCheckCircle /></div><p>Lorem, ipsum.</p></li>
                        </div>
                        <div>
                            <li><div className="icontick"><FaRegCheckCircle /></div><p>Lorem, ipsum.</p></li>
                            <li><div className="icontick"><FaRegCheckCircle /></div><p>Lorem, ipsum.</p></li>
                            <li><div className="icontick"><FaRegCheckCircle /></div><p>Lorem, ipsum.</p></li>
                        </div>
                    </ul>
                    <button className='button '>Learn more</button>
                </div>
            </div>
        </div>
    )
}

export default AboutUs