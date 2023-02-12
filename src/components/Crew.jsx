import { useState } from 'react';
import Navbar from './Navbar';
import '../scss/Crew.scss';
import commanderImg from"../assets/crew/image-douglas-hurley.png";
import missionSpecialistImg from"../assets/crew/image-mark-shuttleworth.png";
import pilotImg from"../assets/crew/image-victor-glover.png";
import flightEngineerImg from"../assets/crew/image-anousheh-ansari.png";

const Crew = (props) => {
  const [dataIndex,setDataIndex] = useState(0);
  const [crewImg] = useState([commanderImg,missionSpecialistImg,pilotImg,flightEngineerImg]);
  const handleClick = (value) => {
    setDataIndex(value)
  }
  
  return (
    <div className='Crew'>
      <Navbar />
      <main>
        <h3 className="crew__header__text"><span className="crew__page__index">02</span>Meet your crew</h3>
        <div className="crew__container">
          <div className="crew__img__container">
            <img className="crew__member__img" src={crewImg[dataIndex]}/>
          </div>
          <div className="crew__info__container">
            <ul className="crew__members">
              <li className="crew__member" onClick={() => handleClick(0)} style={{opacity: dataIndex === 0 ?'1':''}}></li>
              <li className="crew__member" onClick={() => handleClick(1)} style={{opacity: dataIndex === 1 ?'1':''}}></li>
              <li className="crew__member" onClick={() => handleClick(2)} style={{opacity: dataIndex === 2 ?'1':''}}></li>
              <li className="crew__member" onClick={() => handleClick(3)} style={{opacity: dataIndex === 3 ?'1':''}}></li>
            </ul>
            <div className="crew__info">
              <p className="crew__member__role">{props.crewData[dataIndex].role}</p>
              <h1 className="crew__member__name">{props.crewData[dataIndex].name}</h1>
              <p className="crew__member__bio">{props.crewData[dataIndex].bio}</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Crew