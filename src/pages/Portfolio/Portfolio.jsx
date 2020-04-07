import React from 'react'
import styles from './Portfolio.module.css'
import { useSpring, animated } from 'react-spring'

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1,
]
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const PortfolioProjects = () => {
  const [project1, setProject1] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }))
  const [project2, setProject2] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }))
  return (
    <>
      <div className={styles.portfolio_wrapper}>
        <div className={styles.project_one_wrapper}>
          <div className={styles.project_header}>Mission Booked</div>
          <div className={styles.project_body}>
            <animated.div
              className={styles.project1}
              onMouseMove={({ clientX: x, clientY: y }) =>
                setProject1({ xys: calc(x, y) })
              }
              onMouseLeave={() => setProject1({ xys: [0, 0, 1] })}
              style={{ transform: project1.xys.interpolate(trans) }}
            ></animated.div>
          </div>
          <div className={styles.project_footer}>
            <a target="_blank" href="https://mission-booked.herokuapp.com/">
              Live Site
            </a>
            <a
              target="_blank"
              href="https://github.com/renebreslauer/C36_better_together_now_2"
            >
              Source Code
            </a>
          </div>
        </div>
        <div className={styles.project_two_wrapper}>
          <div className={styles.project_header}>FurEver</div>
          <div className={styles.project_body}>
            <animated.div
              className={styles.project2}
              onMouseMove={({ clientX: x, clientY: y }) =>
                setProject2({ xys: calc(x, y) })
              }
              onMouseLeave={() => setProject2({ xys: [0, 0, 1] })}
              style={{ transform: project2.xys.interpolate(trans) }}
            ></animated.div>
          </div>
          <div className={styles.project_footer}>
            <a target="_blank" href="http://fureverapp.herokuapp.com/">
              Live Site
            </a>
            <a
              target="_blank"
              href="https://github.com/renebreslauer/C36_midterm_carolina_elias_rene_tristan"
            >
              Source Code
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
const Portfolio = () => (
  <div>
    <PortfolioProjects />
  </div>
)

export default Portfolio
