import Container from '@/components/container/container'
import SubscribeForm from '@/components/subscribe-form/subscribe-form'
import styles from './join.module.scss'

function Join() {
  return (
    <section>
      <Container className={styles.container}>
        <div className={styles.wrapper}>
          <img src="/images/join.png" alt="Image" className={styles.img} />
          <div>
            <h2 className={styles.heading}>Join our weekly digest</h2>
            <p className={styles.subheading}>
              Get exclusive promotions & updates straight to your inbox.
            </p>
            <SubscribeForm className={styles.form} icon />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Join
