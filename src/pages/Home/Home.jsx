import React from 'react'
import HomeContent from './HomeContent'
import Social from './Social'
import styles from './Home.module.css'

function Home() {
  return (
    <>
    <div className={styles.home_wrapper}>
      <HomeContent />
      <Social />
      </div>
    </>
  )
}

export default Home
