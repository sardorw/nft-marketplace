import Link from 'next/link'
import styles from './wallet-card.module.scss'

function WalletCard({ img, name }) {
  return (
    <Link href="/" className={styles.card}>
      <img src={img} />
      <p>{name}</p>
    </Link>
  )
}

export default WalletCard
