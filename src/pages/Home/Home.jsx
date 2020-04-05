import React from 'react'
import HomeContent from './HomeContent'
import styles from './Home.module.css'

function Home() {
  return (
    <>
    <div className={styles.home_wrapper}>
      <HomeContent />
      </div>
    </>
  )
}

export default Home
