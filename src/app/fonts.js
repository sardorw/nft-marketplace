import { Work_Sans, Space_Mono } from 'next/font/google'

// primary font
export const work_sans = Work_Sans({
  weight: ['400', '600'],
  subsets: ['latin'],
  variable: '--font-work-sans',
})

// secondary font
export const space_mono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-space-mono',
})
