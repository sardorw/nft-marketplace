import Container from '@/components/container/container'
import Button from '@/components/button/button'
import NFTCard from '@/components/cards/nft-card/nft-card'
import { EyeIcon } from '@/icons'
import { moreNFTsData } from '@/contents'
import styles from './more-nfts.module.scss'

function MoreNFTs() {
  return (
    <section>
      <Container className={styles.container}>
        <div>
          <h2 className={styles.heading}>Discover More NFTs</h2>
          <p className={styles.subheading}>Explore new trending NFTs</p>
        </div>
        <Button href="/" className={styles['see-all']} variant="outlined">
          <EyeIcon />
          See All
        </Button>
        <div className={styles.cards}>
          {moreNFTsData.map((item) => (
            <NFTCard key={item.id} data={item} />
          ))}
        </div>
      </Container>
    </section>
  )
}

export default MoreNFTs
