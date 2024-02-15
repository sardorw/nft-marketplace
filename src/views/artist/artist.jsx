import Link from 'next/link'
import Container from '@/components/container/container'
import Button from '@/components/button/button'
import Tabs from '@/components/tabs/tabs'
import NFTCard from '@/components/cards/nft-card/nft-card'
import {
  CopyIcon,
  PlusIcon,
  DiscordIcon,
  InstagramIcon,
  TwitterIcon,
  YouTubeIcon,
  GlobeIcon,
} from '@/icons'
import { artistCardsData } from '@/contents'
import styles from './artist.module.scss'

function Artist() {
  return (
    <main>
      <div className={styles.avatar}>
        <Container className={styles['avatar-container']}>
          <img src="/images/creators/animakid.png" alt="Image" />
        </Container>
      </div>

      <Container className={styles['artist-container']}>
        <h1 className={styles.name}>Animakid</h1>
        <div className={styles.buttons}>
          <Button className={styles.copy}>
            <CopyIcon />
            0xc0E3...B79C
          </Button>
          <Button className={styles.follow} variant="outlined">
            <PlusIcon />
            0xc0E3...B79C
          </Button>
        </div>
        <div className={styles.statistics}>
          <div className={styles.statistics__item}>
            <h4>250k+</h4>
            <p>Volume</p>
          </div>
          <div className={styles.statistics__item}>
            <h4>50+</h4>
            <p>NFTs Sold</p>
          </div>
          <div className={styles.statistics__item}>
            <h4>3000+</h4>
            <p>Followers</p>
          </div>
        </div>
        <div className={styles.bio}>
          <h4>Bio</h4>
          <p>The internet's friendliest designer kid.</p>
        </div>
        <div className={styles.links}>
          <h4>Links</h4>
          <div className={styles.socials}>
            <Link href="/">
              <GlobeIcon />
            </Link>
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
      </Container>
      <Tabs
        tabs={[
          { tab: 'Created', count: 302 },
          { tab: 'Owned', count: 67 },
          { tab: 'Collection', count: 4 },
        ]}
      />

      <section className={styles.cards}>
        <Container className={styles['cards-container']}>
          {artistCardsData.map((item) => (
            <NFTCard key={item.id} data={item} bgColor />
          ))}
        </Container>
      </section>
    </main>
  )
}

export default Artist
