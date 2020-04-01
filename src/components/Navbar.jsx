import React from 'react'
import '../App.css'
import HomeIcon from '../components/assets/Home_icon.svg'
import AboutIcon from '../components/assets/About_icon.svg'
import SkillsIcon from '../components/assets/Skills_icon.svg'
import ContactIcon from '../components/assets/Contact_icon.svg'
import { NavLink } from 'react-router-dom'

function MyNavbar() {
  return (
    <div className="nav_wrapper">
      <div className="nav_container">
        <div className="nav_div" id="home_div">
          <NavLink
            to="/"
            className="nav_link"
            id="home_link"
            label="home"
            activeClassName="nav_link--active"
            to="/"
          >
            <p className="link_text">Home</p>
            <img src={HomeIcon} className="nav_icon" />
          </NavLink>
        </div>
        <div className="nav_div" id="about_div">
          <NavLink
            to="/About"
            className="nav_link"
            id="about_link"
            activeClassName="nav_link--active"
          >
            <p className="link_text">About</p>
            <img src={AboutIcon} className="nav_icon" />
          </NavLink>
        </div>
        <div className="nav_div" id="skills_div">
          <NavLink
            to="/Skills"
            className="nav_link"
            id="skills_link"
            activeClassName="nav_link--active"
          >
            <p className="link_text">Skills</p>
            <img src={SkillsIcon} className="nav_icon" />
          </NavLink>
        </div>
        <div className="nav_div" id="portfolio_div">
          <NavLink
            to="/Portfolio"
            className="nav_link"
            id="portfolio_link"
            activeClassName="nav_link--active"
          >
            <p className="link_text">Portfolio</p>
          </NavLink>
        </div>
        <div className="nav_div" id="contact_div">
          <NavLink
            to="/Contact"
            className="nav_link"
            id="contact_link"
            activeClassName="nav_link--active"
          >
            <p className="link_text">Contact</p>
            <img src={ContactIcon} className="nav_icon" />
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default MyNavbar
