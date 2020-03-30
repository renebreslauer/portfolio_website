import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import HomeIcon from '../components/assets/Home_icon.svg'
import AboutIcon from '../components/assets/About_icon.svg'
import SkillsIcon from '../components/assets/Skills_icon.svg'
import ContactIcon from '../components/assets/Contact_icon.svg'
import About from '../components/About'

function MyNavbar() {
  return (
    <div className="nav_wrapper">
      <div className="nav_container">
        <div className="nav_div" id="home_div">
          <Link to="/" className="nav_link" id="home_link" label="home" to="/">
            Home
          </Link>
          <img src={HomeIcon} className="nav_icon" />
        </div>
        <div className="nav_div" id="about_div">
          <Link to="/About" className="nav_link" id="about_link">
            About
          </Link>
          <img src={AboutIcon} className="nav_icon" />
        </div>
        <div className="nav_div" id="skills_div">
          <Link to="/Skills" className="nav_link" id="skills_link">
            Skills
          </Link>
          <img src={SkillsIcon} className="nav_icon" />
        </div>
        <div className="nav_div" id="portfolio_div">
          <Link to="/Portfolio" className="nav_link" id="portfolio_link">
            Portfolio
          </Link>
        </div>
        <div className="nav_div" id="contact_div">
          <Link to="/Contact" className="nav_link" id="contact_link">
            Contact
          </Link>
          <img src={ContactIcon} className="nav_icon" />
        </div>
      </div>
    </div>
  )
}

export default MyNavbar
