import CategoryCard from '@/components/cards/category-card/category-card'
import Container from '@/components/container/container'
import { categoriesData } from '@/contents'
import styles from './categories.module.scss'

function Categories() {
  return (
    <section>
      <Container className={styles.container}>
        <h2 className={styles.heading}>Browse Categories</h2>
        <div className={styles.cards}>
          {categoriesData.map((item) => (
            <CategoryCard key={item} data={item} />
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Categories
