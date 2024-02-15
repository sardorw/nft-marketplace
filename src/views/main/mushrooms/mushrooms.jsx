import Button from '@/components/button/button'
import Container from '@/components/container/container'
import { EyeIcon } from '@/icons'
import styles from './mushrooms.module.scss'

function Mushrooms() {
  return (
    <section className={styles.mushrooms}>
      <Container className={styles.container}>
        <div>
          <div className={styles.creator}>
            <img src="/images/creators/shroomie.png" />
            <p>Shroomie</p>
          </div>
          <h2 className={styles.heading}>Magic Mushrooms</h2>
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
        </div>

        <Button href="/nft/1" className={styles['see-nft']}>
          <EyeIcon />
          See NFT
        </Button>
      </Container>
    </section>
  )
}

export default Mushrooms
