import styles from './input.module.scss'

function Input({ placeholder, icon }) {
  return (
    <div className={styles.wrapper}>
      <input placeholder={placeholder} />
      {icon}
    </div>
  )
}

export default Input
