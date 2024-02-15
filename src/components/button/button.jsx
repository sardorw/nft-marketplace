import clsx from 'clsx'
import styles from './Button.module.scss'
import Link from 'next/link'

function Button({ children, href, className, variant, type }) {
  let Element = ({ children, ...rest }) => <button {...rest}>{children}</button>

  if (href) {
    Element = ({ children, ...rest }) => <Link {...rest}>{children}</Link>
  }

  return (
    <Element
      href={href}
      type={type}
      className={clsx(
        styles.button,
        className,
        variant === 'outlined' && styles.outlined
      )}
    >
      {children}
    </Element>
  )
}

export default Button
