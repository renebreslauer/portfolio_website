import React from 'react'
import { NavLink } from 'react-router-dom'
import './Menu.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(fab)

class Menu extends React.Component {
  render() {
    let visibility = 'hide'

    if (this.props.menuVisibility) {
      visibility = 'show'
    }
    return (
      <div
        id="flyoutMenu"
        onMouseDown={this.props.handleMouseDown}
        className={visibility}
      >
        <div className="nav_overlay_wrapper">
          <div className="nav_overlay_internal">
            <NavLink to="/" label="home">
              <h2>Home</h2>
            </NavLink>
            <NavLink to="/About" label="about">
              <h2>About</h2>
            </NavLink>
            <NavLink to="/Skills" label="skills">
              <h2>Skills</h2>
            </NavLink>
            <NavLink to="/Portfolio" label="portfolio">
              <h2>Portfolio</h2>
            </NavLink>
            <NavLink to="/Contact" label="contact">
              <h2>Contact</h2>
            </NavLink>
          </div>

          <div className="nav_overlay_external">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/renebreslauer"
            >
              <FontAwesomeIcon
                icon={['fab', 'github']}
                className="footer_icon"
              />
            </a>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://linkedin.com/in/renebreslauer"
            >
              <FontAwesomeIcon
                icon={['fab', 'linkedin-in']}
                className="footer_icon"
              />
            </a>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/ReneBreslauer/"
            >
              <FontAwesomeIcon
                icon={['fab', 'twitter']}
                className="footer_icon"
              />
            </a>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.behance.net/renebreslauer"
            >
              <FontAwesomeIcon
                icon={['fab', 'behance']}
                className="footer_icon"
              />
            </a>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://dribbble.com/renebreslauer"
            >
              <FontAwesomeIcon
                icon={['fab', 'dribbble']}
                className="footer_icon"
              />
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Menu
