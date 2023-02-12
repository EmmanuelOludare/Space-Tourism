import { useState, useEffect } from "react";
import Navbar from './Navbar';
import '../scss/Technology.scss';
import launchVehicleImgLS from "../assets/technology/image-launch-vehicle-landscape.jpg";
import spacePortImgLS from "../assets/technology/image-spaceport-landscape.jpg";
import spaceCapsuleImgLS from "../assets/technology/image-space-capsule-landscape.jpg";
import launchVehicleImgPT from "../assets/technology/image-launch-vehicle-portrait.jpg";
import spacePortImgPT from "../assets/technology/image-spaceport-portrait.jpg";
import spaceCapsuleImgPT from "../assets/technology/image-space-capsule-portrait.jpg";

const Technology = (props) => {
  const [dataIndex,setDataIndex] = useState(0);
  const [technologyImg,setTechnologyImg] = useState([launchVehicleImgLS,spacePortImgLS,spaceCapsuleImgLS]);
  useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth > 1000) {
       setTechnologyImg([launchVehicleImgPT,spacePortImgPT,spaceCapsuleImgPT]);
      } else {
       setTechnologyImg([launchVehicleImgLS,spacePortImgLS,spaceCapsuleImgLS]);
      }
    };

    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  const handleClick = (value) => {
    setDataIndex(value)
  }
  return (
    <div className='Technology'>
      <Navbar />
      <main>
        <h3 className="technology__header__text"><span className="technology__page__index">03</span>Space launch 101</h3>
        <div className="technology__container">
          <div className="technology__img__container">
              <img className="technology__img" src={technologyImg[dataIndex]}/>
          </div>
          <div className="technology__text__container">
            <ul className="technologies__container">
              <li className="technology" onClick={() => handleClick(0)} style={{backgroundColor: dataIndex === 0 ?'white':'',color: dataIndex === 0 ?'#0B0D17':''}}>1</li>
              <li className="technology" onClick={() => handleClick(1)} style={{backgroundColor: dataIndex === 1 ?'white':'',color: dataIndex === 1 ?'#0B0D17':''}}>2</li>
              <li className="technology" onClick={() => handleClick(2)} style={{backgroundColor: dataIndex === 2 ?'white':'',color: dataIndex === 2 ?'#0B0D17':''}}>3</li>
            </ul>
            <div className="technology__info">
              <p className="terminology">THE TERMINOLOGY…</p>
              <h1 className="technology__name">{props.techData[dataIndex].name}</h1>
              <p className="technology__description">{props.techData[dataIndex].description}</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Technology