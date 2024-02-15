import Link from 'next/link'
import Container from '../container/container'
import SubscribeForm from '../subscribe-form/subscribe-form'
import {
  DiscordIcon,
  InstagramIcon,
  LogoIcon,
  TwitterIcon,
  YouTubeIcon,
} from '@/icons'
import styles from './footer.module.scss'

function Footer() {
  return (
    <footer className={styles.footer}>
      <Container className={styles.container}>
        <div className={styles.wrapper}>
          <div>
            <Link className={styles.logo} href="/">
              <LogoIcon />
              NFT Marketplace
            </Link>
            <p className={styles.creator}>
              NFT marketplace UI created with Anima for Figma.
            </p>
            <p className={styles['socials-title']}>Join our community</p>
            <div className={styles['socials-wrapper']}>
              <Link href="/">
                <DiscordIcon />
              </Link>
              <Link href="/">
                <YouTubeIcon />
              </Link>
              <Link href="/">
                <TwitterIcon />
              </Link>
              <Link href="/">
                <InstagramIcon />
              </Link>
            </div>
          </div>
          <div>
            <h5 className={styles.heading}>Explore</h5>
            <ul className={styles['nav-list']}>
              <li>
                <Link href="/marketplace">Marketplace</Link>
              </li>
              <li>
                <Link href="/rankings">Rankings</Link>
              </li>
              <li>
                <Link href="/connect-wallet">Connect a wallet</Link>
              </li>
            </ul>
          </div>
          <div>
            <h5 className={styles.heading}>Join our weekly digest</h5>
            <p className={styles['join-subtitle']}>
              Get exclusive promotions & updates straight to your inbox.
            </p>
            <SubscribeForm className={styles['join-form']} />
          </div>
        </div>

        <div>
          <hr className={styles.line} />
          <p className={styles.copyright}>
            Ⓒ NFT Market. Use this template freely.
          </p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
