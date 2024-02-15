import Container from '@/components/container/container'
import Button from '@/components/button/button'
import CreatorCard from '@/components/cards/creator-card/creator-card'
import { RocketLaunchIcon } from '@/icons'
import { creatorsData } from '@/contents'
import styles from './creators.module.scss'

function Creators() {
  return (
    <section>
      <Container className={styles.container}>
        <div>
          <h2 className={styles.heading}>Top creators</h2>
          <p className={styles.subheading}>
            Checkout Top Rated Creators on the NFT Marketplace
          </p>
        </div>
        <Button
          href="/rankings"
          className={styles['view-rankigns']}
          variant="outlined"
        >
          <RocketLaunchIcon />
          View Rankings
        </Button>
        <div className={styles.cards}>
          {creatorsData.map((item, index) => (
            <CreatorCard key={item.id} data={item} index={index} />
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Creators
