import Link from 'next/link'
import clsx from 'clsx'
import styles from './nft-card.module.scss'

function NFTCard({ data, bgColor }) {
  return (
    <Link
      href={`/nft/${data.id}`}
      className={clsx(styles.card, bgColor && styles['bg-color'])}
    >
      <img src={data.img} alt="Image" className={styles['main-img']} />
      <div className={styles.body}>
        <h4>{data.name}</h4>
        <div className={styles.creator}>
          <img src={data.creator.avatar} />
          <p>{data.creator.name}</p>
        </div>
        <div className={styles.infos}>
          <div className={styles['infos-item']}>
            <p>Price</p>
            <p>{data.price}</p>
          </div>
          <div className={styles['infos-item']}>
            <p>Highest Bid</p>
            <p>{data.bid}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default NFTCard
