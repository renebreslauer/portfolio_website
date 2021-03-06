import React from 'react'
import styles from './Navbar.module.scss'
import Final_R from '../../assets/final_r.svg'
import AboutIcon from '../../assets/About_icon.svg'
import SkillsIcon from '../../assets/Skills_icon.svg'
import ContactIcon from '../../assets/Contact_icon.svg'
import PortfolioIcon from '../../assets/Portfolio_icon.svg'
import { NavLink } from 'react-router-dom'
import { MenuContainer } from '../../pages/index'

function MyNavbar() {
  return (
    <>
      <div className={styles.nav_wrapper}>
        <div className={styles.nav_logo}>
          <NavLink to="/" label="home">
            <img src={Final_R} className={styles.logo_icon} alt="R logo" />
          </NavLink>
        </div>
        <div className={styles.nav_body}></div>
        <div className={styles.nav_div} id={styles.about_div}>
          <NavLink
            to="/About"
            className={styles.nav_link}
            id={styles.about_link}
            activeClassName={styles.nav_link_active}
          >
            <p className={styles.link_text} id={styles.about_link}>
              About
            </p>
            <img src={AboutIcon} className={styles.nav_icon} alt="About icon" />
          </NavLink>
        </div>
        <div className={styles.nav_div} id={styles.skills_div}>
          <NavLink
            to="/Skills"
            className={styles.nav_link}
            activeClassName={styles.nav_link_active}
          >
            <p className={styles.link_text} id={styles.skills_link}>
              Skills
            </p>
            <img
              src={SkillsIcon}
              className={styles.nav_icon}
              alt="Skills icon"
            />
          </NavLink>
        </div>
        <div className={styles.nav_div} id={styles.portfolio_div}>
          <NavLink
            to="/Portfolio"
            className={styles.nav_link}
            activeClassName={styles.nav_link_active}
          >
            <p className={styles.link_text} id={styles.portfolio_link}>
              Portfolio
            </p>
            <img
              src={PortfolioIcon}
              className={styles.nav_icon}
              id={styles.portfolio_icon}
              alt="Portfolio icon"
            />
          </NavLink>
        </div>
        <div className={styles.nav_div} id={styles.contact_div}>
          <NavLink
            to="/Contact"
            className={styles.nav_link}
            id={styles.contact_link}
            activeClassName={styles.nav_link_active}
          >
            <p className={styles.link_text} id={styles.contact_link}>
              Contact
            </p>
            <img
              src={ContactIcon}
              className={styles.nav_icon}
              id={styles.contact_icon}
              alt="Contact icon"
            />
          </NavLink>
        </div>
      </div>
      <MenuContainer />
      {/* <NavLink to="/NavOverlay">
        <div className={styles.logo_mobile}>
          <img src={Final_R} className={styles.logo_mobile_image} alt="logo" />
        </div>
      </NavLink> */}
    </>
  )
}

export default MyNavbar
