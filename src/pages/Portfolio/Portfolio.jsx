import React from 'react'
import styles from './Portfolio.module.css'

function Portfolio() {
  return (
    <>
    <div className={styles.portfolio_wrapper}>
    <div className={styles.project_one_wrapper}>
      <div className={styles.project_footer}>
        <p>Live Site</p>
        <p>Source Code</p>
      </div>
    </div>
    <div className={styles.project_two_wrapper}>
      <div className={styles.project_footer}>
      <p>Live Site</p>
        <p>Source Code</p>
      </div>
    </div>
      </div>
    </>
  )
}

export default Portfolio
