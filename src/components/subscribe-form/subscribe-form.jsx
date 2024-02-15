import clsx from 'clsx'
import Button from '../button/button'
import { EnvelopeSimpleIcon } from '@/icons'
import styles from './subscribe-form.module.scss'

function SubscribeForm({ className, icon }) {
  return (
    <form className={clsx(styles.form, className)}>
      <input placeholder="Enter your email here" />
      <Button type="submit">
        {icon && <EnvelopeSimpleIcon />}
        Subscribe
      </Button>
    </form>
  )
}

export default SubscribeForm
