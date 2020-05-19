import React from 'react'
import { Link } from 'react-router-dom'
import styles from './GooButton.module.scss'

function GooButton(props) {
  return (
    <>
      <Link to='/Contact'>
        <div className={styles.buttons}>
          <button className={styles.blob_btn}>
            {props.text}
            <span className={styles.blob_btn__inner}>
              <span className={styles.blob_btn__blobs}>
                <span className={styles.blob_btn__blob}></span>
                <span className={styles.blob_btn__blob}></span>
                <span className={styles.blob_btn__blob}></span>
                <span className={styles.blob_btn__blob}></span>
              </span>
            </span>
          </button>
        </div>
      </Link>

      <svg
        xmlns='http://www.w3.org/2000/svg'
        version='1.1'
        className={styles.goo_svg}
      >
        <defs>
          <filter id='goo'>
            <feGaussianBlur
              in='SourceGraphic'
              result='blur'
              stdDeviation='10'
            ></feGaussianBlur>
            <feColorMatrix
              in='blur'
              mode='matrix'
              values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7'
              result='goo'
            ></feColorMatrix>
            <feBlend in2='goo' in='SourceGraphic' result='mix'></feBlend>
          </filter>
        </defs>
      </svg>
    </>
  )
}

export default GooButton
