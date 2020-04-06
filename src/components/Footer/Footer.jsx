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
            <p>For business inquiries, please email renebreslauer@me.com</p>
            <p>Website built with React - NodeJS - ExpressJS</p>
        </div>
        <div className={styles.links_container}>
            <p className={styles.link_title}>Let's connect:</p>
            <p><a target='_blank' href='https://github.com/renebreslauer'><FontAwesomeIcon icon={['fab', 'github']} className={styles.footer_icon}/>Github</a></p>
            <p><a target='_blank' href='https://linkedin.com/in/renebreslauer'><FontAwesomeIcon icon={['fab', 'linkedin-in']} className={styles.footer_icon}/>Linkedin</a></p>
            <p><a target='_blank' href='#'><FontAwesomeIcon icon={['fab', 'twitter']} className={styles.footer_icon}/>Twitter</a></p>
            <p><a target='_blank' href='#'><FontAwesomeIcon icon={['fab', 'behance']} className={styles.footer_icon}/>Behance</a></p>
            <p><a target='_blank' href='#'><FontAwesomeIcon icon={['fab', 'dribbble']} className={styles.footer_icon}/>Dribbble</a></p>
        </div>
    </div>
    </footer>
    )
  }
  
  export default Footer
  