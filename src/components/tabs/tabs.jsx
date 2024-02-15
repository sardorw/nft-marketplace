import Container from '../container/container'
import styles from './tabs.module.scss'

function Tabs({ tabs, topLine = true }) {
  return (
    <div>
      <Container
        className={`${styles.container}${
          topLine ? ` ${styles['top-line']}` : ''
        }`}
      >
        {tabs.map((item, index) => (
          <div key={item.tab + index} className={styles.tab}>
            {item.secondaryTab ? (
              <>
                <span className={styles['main-tab']}>{item.tab}</span>
                <span className={styles['secondary-tab']}>
                  {item.secondaryTab}
                </span>
              </>
            ) : (
              item.tab
            )}
            {item.count && (
              <span className={styles['tab-count']}>{item.count}</span>
            )}
          </div>
        ))}
      </Container>
    </div>
  )
}

export default Tabs
