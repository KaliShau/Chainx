import styles from './loader.module.scss'
import svg from './loader.svg'

export const Loader = () => {
  return (
    <div className={styles.container}>
      <div className={styles.ball}></div>
      <div className={styles.ball}></div>
      <div className={styles.ball}></div>
    </div>
  )
}
