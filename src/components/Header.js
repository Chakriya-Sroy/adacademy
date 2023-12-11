import React ,{useState}from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,faChevronDown,faTimes } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import logo from '../assets/images/LOGO MARK.png'
import './header.css'
export default function Header() {
  const [mobileActive,setMobileactive]=useState(false);
  const [dropdown,setDropdown]=useState(false);
  const [menuicon,setMenuicon]=useState(false);
  const toggleBar=()=>{
      setMobileactive(!mobileActive);
      setMenuicon(!menuicon);
  }
  const toggleDropdown=()=>{
     setDropdown(!dropdown);
  }
  const toggleMenuIcon=()=>{
    setMobileactive(!mobileActive);
    setMenuicon(!menuicon);
  }
  return (
    <header id="header" className={`header d-flex align-items-center ${mobileActive ?'mobile-nav-active':''}`} >

    <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
      <Link to="/" className="logo d-flex align-items-center">
        {/* <!-- Uncomment the line below if you also wish to use an image logo -->
        <!-- --> */}
         <img src={logo} alt="school-logo"></img>
        <h1>AD Academy</h1>
      </Link>
      <nav id="navbar" className="navbar">
        <ul>
          <li><Link to="" className="active">Home</Link></li>
          <li className='dropdown'><Link to="academy">Academy <i className="bi bi-chevron-down dropdown-indicator" onClick={toggleDropdown}><FontAwesomeIcon icon={faChevronDown}/></i></Link>
              <ul className={`${dropdown ?'dropdown-active':''}`}>
                <li><Link to="/academy#design-class">Design Class</Link></li>
                <li><Link to="/academy#computer-program">Computer Program</Link></li>
                <li><Link to="/academy#new-class">New Class</Link></li>
                <li><Link to="/academy#testimonials">Testimonials</Link></li>
              </ul>
          </li>
          <li className='dropdown'><Link to="about">About us <i className="bi bi-chevron-down dropdown-indicator" onClick={toggleDropdown}><FontAwesomeIcon icon={faChevronDown}/></i></Link>
              <ul>
                <li><Link to="/about#message-from-school-director">Message From School Director</Link></li>
                <li><Link to="/about#mission-vision-core-value">Mission Vision & Core Values</Link></li>
              </ul>
          </li>
          <li className='dropdown'><Link to="resource">Resource<i className="bi bi-chevron-down dropdown-indicator" onClick={toggleDropdown}><FontAwesomeIcon icon={faChevronDown}/></i></Link>
              <ul>
                  <li><Link to="/resource#events-and-programs">Events and Programs</Link></li>
                  <li><Link to="/resource#knowledge-sharing">Knowledge Sharing </Link></li>
                  <li><Link to="/resource#books">Books</Link></li>
                  <li><Link to="/resource#resourceful-files">Resourceful Files</Link></li>
                  <li><Link to="/resource#blogs">Blogs</Link></li>
              </ul>
          </li>
          <li><Link to="">Parnership</Link></li>
          <li className='dropdown'><Link to="contact">Contact us <i className="bi bi-chevron-down dropdown-indicator" onClick={toggleDropdown}><FontAwesomeIcon icon={faChevronDown}/></i></Link>
              <ul>
                <li><Link to="/contact#school-tour">School Tour</Link></li>
                <li><Link to="/contact#contact">Contact us</Link></li>
              </ul>
          </li>
        </ul>
      </nav>

      <i className={`mobile-nav-toggle mobile-nav-show bi bi-list text-white ${menuicon ?'d-none':''}`} onClick={toggleBar}><FontAwesomeIcon icon={faBars}></FontAwesomeIcon></i>
      <i className={`mobile-nav-toggle mobile-nav-hide bi bi-x ${menuicon?'':'d-none'}`} onClick={toggleMenuIcon}><FontAwesomeIcon icon={faTimes}/></i>

    </div>
  </header>
  )
}
