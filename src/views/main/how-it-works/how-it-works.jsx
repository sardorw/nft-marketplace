import HowItWorkCard from '@/components/cards/how-it-work-card/how-it-work-card'
import Container from '@/components/container/container'
import { howItWorksData } from '@/contents'
import styles from './how-it-works.module.scss'

function HowItWorks() {
  return (
    <section>
      <Container className={styles.container}>
        <h2 className={styles.heading}>How it works</h2>
        <p className={styles.subheading}>Find out how to get started</p>
        <div className={styles.cards}>
          {howItWorksData.map((item) => (
            <HowItWorkCard key={item.id} data={item} />
          ))}
        </div>
      </Container>
    </section>
  )
}

export default HowItWorks
