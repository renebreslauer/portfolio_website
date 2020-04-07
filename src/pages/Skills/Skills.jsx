import React from 'react'
import styles from './Skills.module.css'

function Skills() {
  return (
    <div className={styles.skills_wrapper}>
      <div className={styles.body_text}>
        <p>
          My focuses are frontend development and design. I am passionate about
          building clean, functional apps using Javascript, React, and CSS
          animations. Additionally, I am proficient in Adobe Illustrator,
          Photoshop, XD, and Webflow.
        </p>
        <br></br>
        <p>
          My experience includes full-stack applications, as well, using Node
          JS, Express JS, Ruby on Rails, and PostgreSQL.
        </p>
      </div>
      <div className={styles.skills_list}>
        <div id={styles.html} className={styles.skills_text}>
          <span className={styles.letter} id={styles.letter1}>
            H
          </span>
          <span className={styles.letter} id={styles.letter2}>
            T
          </span>
          <span className={styles.letter} id={styles.letter3}>
            M
          </span>
          <span className={styles.letter} id={styles.letter4}>
            L
          </span>
        </div>
        <div id={styles.css} className={styles.skills_text}>
          <span className={styles.letter} id={styles.letter5}>
            C
          </span>
          <span className={styles.letter} id={styles.letter6}>
            S
          </span>
          <span className={styles.letter} id={styles.letter7}>
            S
          </span>
        </div>
        <div id={styles.javascript} className={styles.skills_text}>
          <span className={styles.letter} id={styles.letter8}>
            J
          </span>
          <span className={styles.letter} id={styles.letter9}>
            A
          </span>
          <span className={styles.letter} id={styles.letter10}>
            V
          </span>
          <span className={styles.letter} id={styles.letter11}>
            A
          </span>
          <span className={styles.letter} id={styles.letter12}>
            S
          </span>
          <span className={styles.letter} id={styles.letter13}>
            C
          </span>
          <span className={styles.letter} id={styles.letter14}>
            R
          </span>
          <span className={styles.letter} id={styles.letter15}>
            I
          </span>
          <span className={styles.letter} id={styles.letter16}>
            P
          </span>
          <span className={styles.letter} id={styles.letter17}>
            T
          </span>
        </div>
        <div id={styles.react} className={styles.skills_text}>
          <span className={styles.letter} id={styles.letter18}>
            R
          </span>
          <span className={styles.letter} id={styles.letter19}>
            E
          </span>
          <span className={styles.letter} id={styles.letter20}>
            A
          </span>
          <span className={styles.letter} id={styles.letter21}>
            C
          </span>
          <span className={styles.letter} id={styles.letter22}>
            T
          </span>
        </div>
      </div>
    </div>
  )
}

export default Skills
