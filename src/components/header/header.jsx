'use client'

import { useContext } from 'react'
import { SidebarContext } from '@/context'
import Link from 'next/link'
import Button from '../button/button'
import { LogoIcon, UserIcon, NavMenuIcon } from '@/icons'
import styles from './header.module.scss'

function Header() {
  const { setShow } = useContext(SidebarContext)

  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        <LogoIcon />
        NFT Marketplace
      </Link>

      <nav className={styles.nav}>
        <ul className={styles['nav-list']}>
          <li>
            <Link href="/marketplace">Marketplace</Link>
          </li>
          <li>
            <Link href="/rankings">Rankings</Link>
          </li>
          <li>
            <Link href="/connect-wallet">Connect a wallet</Link>
          </li>
        </ul>
      </nav>

      <Button href="/create-account" className={styles['sign-up']}>
        <UserIcon />
        Sign Up
      </Button>

      <button onClick={() => setShow(true)} className={styles['nav-menu']}>
        <NavMenuIcon />
      </button>
    </header>
  )
}

export default Header
