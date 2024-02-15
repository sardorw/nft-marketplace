import Button from '@/components/button/button'
import Input from '@/components/input/input'
import { UserIcon, EnvelopeSimpleIcon, LockKeyIcon } from '@/icons'
import styles from './create-account.module.scss'

function CreateAccount() {
  return (
    <main className={styles.container}>
      <img src="/images/create-account.png" alt="Image" />
      <div className={styles.content}>
        <h1>Create account</h1>
        <p>
          Welcome! enter your details and start creating, collecting and selling
          NFTs.
        </p>
        <div className={styles.wrapper}>
          <Input placeholder="Username" icon={<UserIcon fill="#b4b4b4" />} />
          <Input
            placeholder="Email Address"
            icon={<EnvelopeSimpleIcon fill="#b4b4b4" />}
          />
          <Input placeholder="Password" icon={<LockKeyIcon />} />
          <Input placeholder="Confirm Password" icon={<LockKeyIcon />} />
          <Button href="/" className={styles.button}>
            Create account
          </Button>
        </div>
      </div>
    </main>
  )
}

export default CreateAccount
