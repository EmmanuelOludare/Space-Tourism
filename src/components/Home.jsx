import Navbar from './Navbar';
import '../scss/Home.scss';
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="Home">
        <Navbar />
        <main>
          <div className="intro__container">
              <p className="intro__text">SO, YOU WANT TO TRAVEL TO</p>
              <h1 className="intro__header">SPACE</h1>
              <p className="intro__paragraph">Let’s face it; if you want to go to space, you might as well genuinely go to 
              outer space and not hover kind of on the edge of it. Well sit back, and relax 
              because we’ll give you a truly out of this world experience!</p>
          </div>
          <div><Link to="/destination" className="home__prompt">EXPLORE</Link></div>
        </main>
    </div>
  )
}

export default Home