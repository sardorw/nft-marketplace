import WalletCard from '@/components/cards/wallet-card/wallet-card'
import { walletsData } from '@/contents'
import styles from './connect-wallet.module.scss'

function ConnectWallet() {
  return (
    <main className={styles.container}>
      <img src="/images/connect-wallet.png" alt="Image" />
      <div className={styles.content}>
        <h1>Connect wallet</h1>
        <p>
          Choose a wallet you want to connect. There are several wallet
          providers.
        </p>
        <div className={styles.wallets}>
          {walletsData.map((item) => (
            <WalletCard key={item.id} img={item.img} name={item.name} />
          ))}
        </div>
      </div>
    </main>
  )
}

export default ConnectWallet
