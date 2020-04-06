import React from 'react'
import styles from './Portfolio.module.css'
import MissionBooked from '../../components/assets/missionbooked.gif'

function Portfolio() {
  return (
    <>
    <div className={styles.portfolio_wrapper}>
    <div className={styles.project_one_wrapper}>
      <div className={styles.project_header}>
        Mission Booked
      </div>
      <div className={styles.project_body}>
        <img src={ MissionBooked } className={styles.project_gif}/>
      </div>
      <div className={styles.project_footer}>
        <p>Live Site</p>
        <p>Source Code</p>
      </div>
    </div>
    <div className={styles.project_two_wrapper}>
      <div className={styles.project_header}>
        FurEver
      </div>
    <div className={styles.project_body}>
      </div>
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
