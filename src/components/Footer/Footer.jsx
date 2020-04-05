import React from 'react'
import styles from './Footer.module.css'
import { Link } from 'react-router-dom'

function Footer() {
    return (
    <footer>
    <div className={styles.footer_wrapper}>
        <div className={styles.links_container}>
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
  