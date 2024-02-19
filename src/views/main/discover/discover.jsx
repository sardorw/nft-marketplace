import Image from 'next/image'
import Container from '@/components/container/container'
import Button from '@/components/button/button'
import { RocketLaunchIcon } from '@/icons'
import styles from './discover.module.scss'

function Discover() {
  return (
    <section>
      <Container className={styles.container}>
        <div>
          <h1 className={styles.title}>Discover digital art & Collect NFTs</h1>
          <p className={styles.subtitle}>
            NFT marketplace UI created with Anima for Figma. Collect, buy and
            sell art from more than 20k NFT artists.
          </p>
        </div>

        <div className={styles.card}>
          <Image
            src="/images/nfts/space-walking.png"
            width={510}
            height={401}
            alt="Image"
            className={styles.card__image}
          />
          <div className={styles.card__wrapper}>
            <h5>Space Walking</h5>
            <div className={styles.card__creator}>
              <img src="/images/creators/animakid.png" alt="Image" />
              <p>Animakid</p>
            </div>
          </div>
        </div>

        <div>
          <Button href="/create-account" className={styles['get-started']}>
            <RocketLaunchIcon />
            Get Started
          </Button>
          <div className={styles.statistics__wrapper}>
            <div className={styles.statistics__item}>
              <h4>240k+</h4>
              <p>Total Sale</p>
            </div>
            <div className={styles.statistics__item}>
              <h4>100k+</h4>
              <p>Auctions</p>
            </div>
            <div className={styles.statistics__item}>
              <h4>240k+</h4>
              <p>Artists</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Discover
