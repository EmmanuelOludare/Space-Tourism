import { useState } from 'react';
import Navbar from './Navbar';
import '../scss/Destination.scss';
import moonImg from"../assets/destination/image-moon.png";
import marsImg from"../assets/destination/image-mars.png";
import europaImg from"../assets/destination/image-europa.png";
import titanImg from"../assets/destination/image-titan.png";

const Destination = (props) => {
  const [dataIndex,setDataIndex] = useState(0);
  const [destinationImg] = useState([moonImg,marsImg,europaImg,titanImg]);
  const handleClick = (value) => {
    setDataIndex(value)
  }
  
  return (
    <div className='Destination'>
      <Navbar />
      <main>
        <h3 className="destination__header__text"><span className="destination__page__index">01</span>Pick your destination</h3>
        <div className="destination__container">
          <div className="destination__img__container">
            <img className="destination__img" src={destinationImg[dataIndex]} alt="destination__image"/>
          </div>
          <div className="destination__info__container">
            <ul className="destinations__container">
              <li className="destination" onClick={() => handleClick(0)} style={{borderBottom: dataIndex === 0 ?'2px solid white':''}}>MOON</li>
              <li className="destination" onClick={() => handleClick(1)} style={{borderBottom: dataIndex === 1 ?'2px solid white':''}}>MARS</li>
              <li className="destination" onClick={() => handleClick(2)} style={{borderBottom: dataIndex === 2 ?'2px solid white':''}}>EUROPA</li>
              <li className="destination" onClick={() => handleClick(3)} style={{borderBottom: dataIndex === 3 ?'2px solid white':''}}>TITAN</li>
            </ul>
            <h1 className="destination__header">{props.destinationsData[dataIndex].name}</h1>
            <p className="destination__description">{props.destinationsData[dataIndex].description}</p>
            <div className="destination__info">
              <div>
                <p className="info__text">Avg. distance</p>
                <p className="info__value">{props.destinationsData[dataIndex].distance}</p>
              </div>
              <div>
                <p className="info__text">Est. travel time</p>
                <p className="info__value">{props.destinationsData[dataIndex].travel}</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Destination