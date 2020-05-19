import React from 'react'
import styles from './TitleAnimation.module.scss'

function TitleAnimation() {
  return (
    <>
      <h1 className={styles.title_animation}>
        <span className={styles.name_letter} id={styles.name1}>
          R
        </span>
        <span className={styles.name_letter} id={styles.name2}>
          e
        </span>
        <span className={styles.name_letter} id={styles.name3}>
          n
        </span>
        <span className={styles.name_letter} id={styles.name4}>
          e
        </span>
      </h1>
      <h1 className={styles.bottom}>
        <span className={styles.name_letter} id={styles.name5}>
          B
        </span>
        <span className={styles.name_letter} id={styles.name6}>
          r
        </span>
        <span className={styles.name_letter} id={styles.name7}>
          e
        </span>
        <span className={styles.name_letter} id={styles.name8}>
          s
        </span>
        <span className={styles.name_letter} id={styles.name9}>
          l
        </span>
        <span className={styles.name_letter} id={styles.name10}>
          a
        </span>
        <span className={styles.name_letter} id={styles.name11}>
          u
        </span>
        <span className={styles.name_letter} id={styles.name12}>
          e
        </span>
        <span className={styles.name_letter} id={styles.name13}>
          r
        </span>
      </h1>
    </>
  )
}

export default TitleAnimation
