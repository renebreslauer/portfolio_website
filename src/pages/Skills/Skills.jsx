import React from 'react'
import styles from './Skills.module.scss'
import { SkillsList } from '../../components/index'

function Skills() {
  return (
    <div className={styles.skills_wrapper}>
      <div className={styles.body_text}>
        <p>
          My focuses are frontend development and design. I am passionate about
          building clean, functional apps using CSS, Javascript, and React.
          Additionally, I am proficient in Adobe Illustrator, Photoshop, XD, and
          Webflow.
        </p>
        <br></br>
        <p>
          My experience includes backend, as well, having built full-stack
          applications using Node JS, Express JS, Ruby on Rails, and PostgreSQL.
        </p>
        <br></br>
        Eager to continue learning and improving my skillset, I am always
        exploring new languages and frameworks, while diving deeper into those
        that I use on a regular basis.
      </div>
      <SkillsList />
    </div>
  )
}

export default Skills
