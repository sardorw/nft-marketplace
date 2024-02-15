'use client'

import Sidebar from '@/components/header/sidebar/sidebar'
import { createContext, useState } from 'react'

export const SidebarContext = createContext()

function SidebarProvider({ children }) {
  const [show, setShow] = useState(false)

  return (
    <SidebarContext.Provider value={{ show, setShow }}>
      {show && <Sidebar />}
      {children}
    </SidebarContext.Provider>
  )
}

export default SidebarProvider
