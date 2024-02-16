import SidebarProVider from '@/context'
import Header from '@/components/header/header'
import Footer from '@/components/footer/footer'
import { work_sans, space_mono } from './fonts'
import '@/styles/globals.scss'

export const metadata = {
  title: {
    template: '%s | NFT Marketplace',
    default: 'NFT Marketplace',
  },
  description: 'Marketplace for NFTs',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${work_sans.variable} ${space_mono.variable}`}>
      <body>
        <SidebarProVider>
          <div className="wrapper">
            <Header />
            {children}
            <Footer />
          </div>
        </SidebarProVider>
      </body>
    </html>
  )
}
