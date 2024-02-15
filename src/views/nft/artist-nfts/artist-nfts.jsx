import Container from '@/components/container/container'
import Button from '@/components/button/button'
import NFTCard from '@/components/cards/nft-card/nft-card'
import { ArrowRightIcon } from '@/icons'
import { artistCardsData } from '@/contents'
import styles from './artist-nfts.module.scss'

function ArtistNFTs() {
  return (
    <section>
      <Container className={styles.container}>
        <h2>More from this artist</h2>
        <Button href="/artist/1" className={styles.button} variant="outlined">
          <ArrowRightIcon />
          Go To Artist Page
        </Button>
        <div className={styles.cards}>
          {artistCardsData.map((item) => (
            <NFTCard key={item.id} data={item} />
          ))}
        </div>
      </Container>
    </section>
  )
}

export default ArtistNFTs
