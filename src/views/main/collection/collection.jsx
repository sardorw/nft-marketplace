import Container from '@/components/container/container'
import CollectionCard from '@/components/cards/collection-card/collection-card'
import { collectionData } from '@/contents'
import styles from './collection.module.scss'

function Collection() {
  return (
    <section>
      <Container className={styles.container}>
        <h2 className={styles.heading}>Trending Collection</h2>
        <p className={styles.subheading}>
          Checkout our weekly updated trending collection.
        </p>

        <div className={styles.cards}>
          {collectionData.map((item) => (
            <CollectionCard key={item.id} data={item} />
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Collection
