import clsx from 'clsx'
import styles from './container.module.scss'

function Container({ children, className }) {
  return <div className={clsx(styles.container, className)}>{children}</div>
}

export default Container
