import React from 'react'
import styles from './About.module.css'
import Placeholder from '../../components/assets/placeholder_image.png'

function About() {
  return (
    <>
      <div className={styles.about_wrapper}>
        <div className={styles.hidden_images}></div>

        <div className={styles.about_content}>
          <div className={styles.typewriter}>
            <h2>Once Upon a Time...</h2>
          </div>
          <p className={styles.about_body}>
            As a Florida native, I've spent most of my life in the sunny south.
            I studied Apparel Design at Florida State University and progressed
            into a career of retail management. While I loved working with
            people, I still had a desire to build and create things. Pursuing
            front-end development has allowed me to combine both- working in a
            collaborative environment and creating beautiful, fully functional
            applications.
          </p>
          <p className={styles.about_body}>
            These days I reside on Miami Beach with my three pet{' '}
            <span class={styles.special_text} id={styles.rabbit_text}>
              rabbits
            </span>
            , and when I'm not coding, I'm typically working on freelance design
            projects, illustrating, or watching Tiger King.
          </p>
        </div>
        <div className={styles.hidden_images}>
          <img
            src={Placeholder}
            id={styles.rabbit_image}
            className={styles.hidden_image}
          />
        </div>
      </div>
    </>
  )
}

export default About
