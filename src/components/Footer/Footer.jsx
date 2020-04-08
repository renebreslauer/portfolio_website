import React from 'react'
import styles from './Footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(fab)

function Footer() {
  return (
    <footer>
      <div className={styles.footer_wrapper}>
        <div className={styles.footer_info}>
          <p>
            For business inquiries, please email{' '}
            <a href={'mailto:renebreslauer@me.com'} className={styles.email}>
              renebreslauer@me.com
            </a>
          </p>
          <p>
            Download my resume <a href="#">here</a>
          </p>
          <p>Built with React - NodeJS - ExpressJS</p>
        </div>
        <div className={styles.links_container}>
          <p className={styles.link_title}>Let's connect:</p>
          <p>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/renebreslauer">
              <FontAwesomeIcon
                icon={['fab', 'github']}
                className={styles.footer_icon}
              />
              Github
            </a>
          </p>
          <p>
            <a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/renebreslauer">
              <FontAwesomeIcon
                icon={['fab', 'linkedin-in']}
                className={styles.footer_icon}
              />
              Linkedin
            </a>
          </p>
          <p>
            <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/ReneBreslauer/">
              <FontAwesomeIcon
                icon={['fab', 'twitter']}
                className={styles.footer_icon}
              />
              Twitter
            </a>
          </p>
          <p>
            <a target="_blank" rel="noopener noreferrer" href="https://www.behance.net/renebreslauer">
              <FontAwesomeIcon
                icon={['fab', 'behance']}
                className={styles.footer_icon}
              />
              Behance
            </a>
          </p>
          <p>
            <a target="_blank" rel="noopener noreferrer" href="https://dribbble.com/renebreslauer">
              <FontAwesomeIcon
                icon={['fab', 'dribbble']}
                className={styles.footer_icon}
              />
              Dribbble
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
