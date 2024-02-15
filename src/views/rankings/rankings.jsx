import Container from '@/components/container/container'
import Tabs from '@/components/tabs/tabs'
import TopCreatorCard from '@/components/cards/top-creator-card/top-creator-card'
import { topCreatorsData } from '@/contents'
import styles from './rankings.module.scss'

function Rangkings() {
  return (
    <main>
      <Container className={styles['header-container']}>
        <h1>Top Creators</h1>
        <p>Check out top ranking NFT artists on the NFT Marketplace.</p>
      </Container>
      <Tabs
        tabs={[
          {
            tab: 'Today',
            secondaryTab: '1d',
          },
          {
            tab: 'This Week',
            secondaryTab: '7d',
          },
          {
            tab: 'This Month',
            secondaryTab: '30d',
          },
          {
            tab: 'All Time',
          },
        ]}
        topLine={false}
      />
      <section>
        <Container className={styles['cards-container']}>
          <div className={styles['cards-header']}>
            <div>#</div>
            <div>Artist</div>
            <div>Change</div>
            <div>NFTs Sold</div>
            <div>Volume</div>
          </div>
          <div className={styles.cards}>
            {topCreatorsData.map((item, index) => (
              <TopCreatorCard
                key={item.id + index}
                data={item}
                number={index + 1}
              />
            ))}
          </div>
        </Container>
      </section>
    </main>
  )
}

export default Rangkings
