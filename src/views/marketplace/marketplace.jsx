import Container from '@/components/container/container'
import Tabs from '@/components/tabs/tabs'
import NFTCard from '@/components/cards/nft-card/nft-card'
import { MagnifyingGlassIcon } from '@/icons'
import { artistCardsData } from '@/contents'
import styles from './marketplace.module.scss'

function Marketplace() {
  return (
    <main>
      <Container className={styles['header-container']}>
        <h1>Browse Marketplace</h1>
        <p>Browse through more than 50k NFTs on the NFT Marketplace.</p>
        <div className={styles.search}>
          <input placeholder="Search your favourite NFTs" />
          <MagnifyingGlassIcon />
        </div>
      </Container>
      <Tabs
        tabs={[
          {
            tab: 'NFTs',
            count: 302,
          },
          {
            tab: 'Collections',
            count: 67,
          },
        ]}
      />
      <section>
        <Container className={styles['cards-container']}>
          <div className={styles.cards}>
            {artistCardsData.map((item) => (
              <NFTCard key={item.id} data={item} />
            ))}
          </div>
        </Container>
      </section>
    </main>
  )
}

export default Marketplace
