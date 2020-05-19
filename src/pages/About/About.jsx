import React, { useState } from 'react'
import styles from './About.module.scss'
import Rabbits from '../../assets/rabbits_image.jpg'

function About() {
  const [isShown, setIsShown] = useState(false)

  return (
    <>
      <div className={styles.about_wrapper}>
        <div className={styles.hidden_images}></div>

        <div className={styles.about_content}>
          <div className={styles.about_header}>
            <span className={styles.about_letter} id={styles.about1}>
              A
            </span>
            <span className={styles.about_letter} id={styles.about2}>
              b
            </span>
            <span className={styles.about_letter} id={styles.about3}>
              o
            </span>
            <span className={styles.about_letter} id={styles.about4}>
              u
            </span>
            <span className={styles.about_letter} id={styles.about5}>
              t
            </span>
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
            <span
              className={styles.special_text}
              id={styles.rabbit_text}
              onMouseEnter={() => setIsShown(true)}
              onMouseLeave={() => setIsShown(false)}
            >
              rabbits
            </span>
            , and when I'm not coding, I'm typically working on freelance design
            projects, illustrating, or watching Tiger King.
          </p>
        </div>
        {isShown && (
          <>
            <div className={styles.hidden_images}>
              <img
                src={Rabbits}
                id={styles.rabbit_image}
                className={styles.hidden_image}
                alt='Rabbits'
              />
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default About
