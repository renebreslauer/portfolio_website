import React from 'react'
import styles from './Portfolio.module.scss'
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
          <div className={styles.project_subtitle}>
            Created while at Wyncode Academy, Mission Booked is a React-Rails
            app with a PostgreSQL database. It is designed to help people find
            volunteer opportunities and charitable organizations tailored to
            their interests.
          </div>
          <div className={styles.project_body}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/renebreslauer/C36_better_together_now_2"
            >
              <animated.div
                className={styles.project1}
                onMouseMove={({ clientX: x, clientY: y }) =>
                  setProject1({ xys: calc(x, y) })
                }
                onMouseLeave={() => setProject1({ xys: [0, 0, 1] })}
                style={{ transform: project1.xys.interpolate(trans) }}
              ></animated.div>
            </a>
          </div>
          <div className={styles.project_footer}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://mission-booked.herokuapp.com/"
            >
              Live Site
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/renebreslauer/C36_better_together_now_2"
            >
              Source Code
            </a>
          </div>
        </div>
        <div className={styles.project_two_wrapper}>
          <div className={styles.project_header}>FurEver</div>
          <div className={styles.project_subtitle}>
            Also created at Wyncode Academy, FurEver is a petfinding app built
            with React and Express JS, which utilizes Petfinder's O-Auth API.
            FurEver is designed to help match adoptable pets with forever homes
            in a fun, user-friendly interface.
          </div>

          <div className={styles.project_body}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/renebreslauer/C36_midterm_carolina_elias_rene_tristan"
            >
              <animated.div
                className={styles.project2}
                onMouseMove={({ clientX: x, clientY: y }) =>
                  setProject2({ xys: calc(x, y) })
                }
                onMouseLeave={() => setProject2({ xys: [0, 0, 1] })}
                style={{ transform: project2.xys.interpolate(trans) }}
              ></animated.div>
            </a>
          </div>
          <div className={styles.project_footer}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://fureverapp.herokuapp.com/"
            >
              Live Site
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
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
