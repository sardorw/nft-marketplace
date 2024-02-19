import Link from 'next/link'
import Image from 'next/image'
import styles from './collection-card.module.scss'

function CollectionCard({ data }) {
  return (
    <div>
      <Link href={`/nft/${data.id}`}>
        <Image
          src={data.imgs[0]}
          width={330}
          height={330}
          alt="Image"
          className={styles['main-image']}
        />
      </Link>
      <div className={styles['images-wrapper']}>
        <Link href={`/nft/${data.id}`}>
          <Image src={data.imgs[1]} width={100} height={100} alt="Image" />
        </Link>
        <Link href={`/nft/${data.id}`}>
          <Image src={data.imgs[2]} width={100} height={100} alt="Image" />
        </Link>
        <div className={styles.count}>1025+</div>
      </div>
      <h4 className={styles.heading}>{data.title}</h4>
      <Link href="/artist/1" className={styles.creator}>
        <Image src={data.creator.avatar} width={24} height={24} alt="Image" />
        <p>{data.creator.name}</p>
      </Link>
    </div>
  )
}

export default CollectionCard
