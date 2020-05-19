import React from 'react'
import styles from './Subtitle.module.scss'

function Subtitle(props) {
  return <h2 className={styles.subtitle}>{props.text}</h2>
}

export default Subtitle
