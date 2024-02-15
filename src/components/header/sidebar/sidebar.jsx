'use client'

import { useEffect, useContext } from 'react'
import { SidebarContext } from '@/context'
import Link from 'next/link'
import styles from './sidebar.module.scss'

function Sidebar() {
  const { show, setShow } = useContext(SidebarContext)

  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden'
    }

    return () => (document.body.style.overflow = 'auto')
  }, [])

  return (
    <>
      <div className={styles.sidebar}>
        <nav className={styles.nav}>
          <ul className={styles['nav-list']}>
            <li>
              <Link href="/" onClick={() => setShow(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/marketplace" onClick={() => setShow(false)}>
                Marketplace
              </Link>
            </li>
            <li>
              <Link href="/rankings" onClick={() => setShow(false)}>
                Rankings
              </Link>
            </li>
            <li>
              <Link href="/connect-wallet" onClick={() => setShow(false)}>
                Connect a wallet
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className={styles.backdrop} onClick={() => setShow(false)} />
    </>
  )
}

export default Sidebar
