import Link from 'next/link'
import styles from './collection-card.module.scss'

function CollectionCard({ data }) {
  return (
    <div>
      <Link href={`/nft/${data.id}`}>
        <img src={data.imgs[0]} alt="Image" className={styles['main-image']} />
      </Link>
      <div className={styles['images-wrapper']}>
        <Link href={`/nft/${data.id}`}>
          <img src={data.imgs[1]} alt="Image" />{' '}
        </Link>
        <Link href={`/nft/${data.id}`}>
          <img src={data.imgs[2]} alt="Image" />{' '}
        </Link>
        <div className={styles.count}>1025+</div>
      </div>
      <h4 className={styles.heading}>{data.title}</h4>
      <Link href="/artist/1" className={styles.creator}>
        <img src={data.creator.avatar} alt="Image" />
        <p>{data.creator.name}</p>
      </Link>
    </div>
  )
}

export default CollectionCard
