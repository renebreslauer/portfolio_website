import React from 'react'
import '../App.css'
import HomeIcon from '../components/assets/Home_icon.svg'
import AboutIcon from '../components/assets/About_icon.svg'
import SkillsIcon from '../components/assets/Skills_icon.svg'
import ContactIcon from '../components/assets/Contact_icon.svg'

function Navbar() {
  return (
    <div className="nav_wrapper">
      <div className="nav_container">
        <div className="nav_div" id="home_div">
          <a href="index.html" className="nav_link" id="home_link">
            Home
          </a>
          <img src={HomeIcon} className="nav_icon" />
        </div>
        <div className="nav_div" id="about_div">
          <a href="#" className="nav_link" id="about_link">
            About
          </a>
          <img src={AboutIcon} className="nav_icon" />
        </div>
        <div className="nav_div" id="skills_div">
          <a href="#" className="nav_link" id="skills_link">
            Skills
          </a>
          <img src={SkillsIcon} className="nav_icon" />
        </div>
        <div className="nav_div" id="portfolio_div">
          <a href="#" className="nav_link" id="portfolio_link">
            Portfolio
          </a>
        </div>
        <div className="nav_div" id="contact_div">
          <a href="#" className="nav_link" id="contact_link">
            Contact
          </a>
          <img src={ContactIcon} className="nav_icon" />
        </div>
      </div>
    </div>
  )
}

export default Navbar
