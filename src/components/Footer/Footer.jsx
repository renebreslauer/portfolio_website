import React from 'react'
import styles from './Footer.module.css'
import { Link } from 'react-router-dom'

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
            <p>Github</p>
            <p>Linkedin</p>
            <p>Twitter</p>
            <p>Behance</p>
            <p>Dribbble</p>
        </div>
    </div>
    </footer>
    )
  }
  
  export default Footer
  