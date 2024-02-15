import styles from './top-creator-card.module.scss'

function TopCreatorCard({ data, number }) {
  return (
    <div className={styles.card}>
      <div className={styles.number}>{number}</div>
      <div className={styles.creator}>
        <img src={data.avatar} />
        <p>{data.name}</p>
      </div>
      <div className={styles.change}>{data.change}</div>
      <div className={styles.sold}>{data.sold}</div>
      <div className={styles.volume}>{data.volume}</div>
    </div>
  )
}

export default TopCreatorCard
