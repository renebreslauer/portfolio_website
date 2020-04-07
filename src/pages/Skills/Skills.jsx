import React from 'react'
import styles from './Skills.module.css'

function Skills() {
  return (
    <div className={styles.skills_wrapper}>
      <div className={styles.body_text}>Content</div>
      <div className={styles.skills_list}>
        <span id={styles.html} className={styles.skills_text}>
          HTML
        </span>
        <span id={styles.css} className={styles.skills_text}>
          CSS
        </span>
        <span id={styles.javascript} className={styles.skills_text}>
          JAVASCRIPT
        </span>
        <span id={styles.react} className={styles.skills_text}>
          REACT
        </span>
      </div>
    </div>
  )
}

export default Skills
