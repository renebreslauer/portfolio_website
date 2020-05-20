import React from 'react'
import Final_R from '../../assets/final_r.svg'
import styles from './RAnimation.module.scss'

function RAnimation() {
  return (
    <>
      <div className={styles.svg_container}>
        <img src={Final_R} className={styles.final_r} alt="Letter R logo" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="400"
          height="500"
          viewBox="0 0 346 445"
        >
          <path
            id={styles.hood}
            fill="none"
            stroke="#ffd868"
            strokeWidth="1"
            d="M45.4,13.7h128.4c43.8,0,79.2,16.5,103,40c24,24,38.1,45.8,38.1,89.4v10.3c0,26.5-8.3,51.5-24.9,75
     c-13.8,19.4-24.8,27.6-47.1,36.4l91.6,142.6h-96.7l-113-174.1v174.1H45.7L45.4,13.7z M233.4,145.5c0-14.3-5.2-26.9-15.6-37.8
     c-10.3-10-29.8-15.6-48.8-15.6h-44.4v108.6H155v0.2h26.4C210.2,200.9,233.4,175.5,233.4,145.5z M45.5,13.5l-31,20v394l31-20V13.5z
      M206.5,427.5l97.2-0.2l31-20 M124.8,293.7l82.1,133.6l31-20 M14.5,427.5H93 M124.8,406.9l-32.3,20.6"
          />
        </svg>
      </div>
    </>
  )
}

export default RAnimation
