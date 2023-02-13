import { useState } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import '../scss/Navbar.scss';
import logo from '../assets/shared/logo.svg';
import openMenuBar from '../assets/shared/icon-hamburger.svg';
import closeMenuBar from '../assets/shared/icon-close.svg';

const Navbar = () => {
  const [sideBarSlide,setSideBarSlide] = useState(false);

  const toggleSidebarNav = () => {
    setSideBarSlide(prevSlide => !prevSlide)
    document.querySelector(".sidebar-nav").classList.toggle('slide');
  };
  return (
    <nav className='Navbar'>
        <div className="logo__menu">
          <img src={logo} className="logo" />
          <img src={sideBarSlide ? closeMenuBar : openMenuBar} className="open__menu__bar" onClick={toggleSidebarNav}/>
        </div>
        <div className="line"></div>
        <div className="sidebar-nav">
            <ul className="links__container">
              <CustomLink to="/" className="links"><span className="index__text">00</span>Home</CustomLink>
              <CustomLink to="/destination" className="links"><span className="index__text">01</span>Destination</CustomLink>
              <CustomLink to="/crew" className="links"><span className="index__text">02</span>Crew</CustomLink>
              <CustomLink to="/technology" className="links"><span className="index__text">03</span>Technology</CustomLink>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  
    return (
      <li className={isActive ? "active" : ""}>
        <Link to={to} {...props}>
          {children}
        </Link>
      </li>
    )
  }