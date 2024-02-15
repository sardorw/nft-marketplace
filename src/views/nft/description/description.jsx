import Container from '@/components/container/container'
import Button from '@/components/button/button'
import { GlobeIcon } from '@/icons'
import styles from './description.module.scss'
import Link from 'next/link'

function Description() {
  return (
    <section>
      <Container className={styles.container}>
        <div className={styles.heading}>
          <h1>The Orbitians</h1>
          <p>Minted on Sep 30, 2022</p>
        </div>
        <div className={styles.time}>
          <p>Auction ends in:</p>
          <div className={styles['time-wrapper']}>
            <div className={styles['time-item']}>
              <span>59</span>
              <span>Hours</span>
            </div>
            <div className={styles['time-divider']}>:</div>
            <div className={styles['time-item']}>
              <span>59</span>
              <span>Minutes</span>
            </div>
            <div className={styles['time-divider']}>:</div>
            <div className={styles['time-item']}>
              <span>59</span>
              <span>Seconds</span>
            </div>
          </div>
          <Button href="/" className={styles.button}>
            Place Bid
          </Button>
        </div>
        <div className={styles.creator}>
          <h4>Created By</h4>
          <Link href="/artist/1">
            <img src="/images/creators/rustyrobot.png" alt="Image" />
            Orbitian
          </Link>
        </div>
        <div className={styles.description}>
          <h4>Description</h4>
          <div>
            <p>
              The Orbitians is a collection of 10,000 unique NFTs on the
              Ethereum blockchain,
            </p>
            <p
              style={{
                marginTop: 40,
              }}
            >
              There are all sorts of beings in the NFT Universe. The most
              advanced and friendly of the bunch are Orbitians.{' '}
            </p>
            <p
              style={{
                marginTop: 40,
              }}
            >
              They live in a metal space machines, high up in the sky and only
              have one foot on Earth. These Orbitians are a peaceful race, but
              they have been at war with a group of invaders for many
              generations. The invaders are called Upside-Downs, because of
              their inverted bodies that live on the ground, yet do not know any
              other way to be. Upside-Downs believe that they will be able to
              win this war if they could only get an eye into Orbitian
              territory, so they've taken to make human beings their target.
            </p>
          </div>
        </div>
        <div className={styles.details}>
          <h4>Details</h4>
          <Link href="/">
            <GlobeIcon />
            View on Etherscan
          </Link>
          <Link href="/">
            <GlobeIcon />
            View Original
          </Link>
        </div>
        <div className={styles.tags}>
          <h4>Tags</h4>
          <div>
            <Link href="/">Animation</Link>
            <Link href="/">illustration</Link>
            <Link href="/">moon</Link>
            <Link href="/">moon</Link>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Description
