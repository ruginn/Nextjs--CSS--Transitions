import './globals.css'
import { Inter, Poppins, Raleway } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })


const poppins = Poppins({
  weight: ['100','200', '300', '400', '500', '600', '700', '800', '900' ], 
  subsets: ['latin']
})

const raleway = Raleway({
  weight: ['100','200', '300', '400', '500', '600', '700', '800', '900' ], 
  subsets: ['latin']
})

export const metadata = {
  title: 'CSS transitions',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}