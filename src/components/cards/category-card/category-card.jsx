import Image from 'next/image'
import styles from './category-card.module.scss'

function CategoryCard({ data }) {
  return (
    <div className={styles.card}>
      <div className={styles['img-wrapper']}>
        <Image src={data.img} width={240} height={240} alt="Image" />
        <data.icon />
      </div>
      <h4>{data.title}</h4>
    </div>
  )
}

export default CategoryCard
