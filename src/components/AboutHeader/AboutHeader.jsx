import React from 'react'
import styles from './AboutHeader.module.scss'
import styled from 'styled-components'

const AboutHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  @media (max-width: 700px) {
    width: 70%;
  }
`

const HiddenImageContainer = styled.div`
  justify-content: end;
`
function AboutHeader() {
  return (
    <AboutHeaderWrapper>
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
      <HiddenImageContainer>
        <div className={styles.hidden_image}></div>
      </HiddenImageContainer>
    </AboutHeaderWrapper>
  )
}

export default AboutHeader
