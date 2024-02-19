import Link from 'next/link'
import Image from 'next/image'
import styles from './creator-card.module.scss'

function CreatorCard({ data, index }) {
  return (
    <Link href={`/artist/${data.id}`} className={styles.card}>
      <div className={styles.number}>{index + 1}</div>
      <Image src={data.img} width={120} height={120} alt="Image" />
      <div>
        <h4>{data.name}</h4>
        <p>
          Total Sales: <span>{data.totalSales}</span>
        </p>
      </div>
    </Link>
  )
}

export default CreatorCard
