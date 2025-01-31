import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Weather Dashboard',
  description: 'Get real-time weather information for any city',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-sky-400 min-h-screen overflow-y-auto`}>
        <div className="sky">
          <div className="clouds">
            <div className="cloud cloud1"></div>
            <div className="cloud cloud2"></div>
            <div className="cloud cloud3"></div>
            <div className="cloud cloud4"></div>
          </div>
        </div>
        <div className="relative z-10">
          {children}
        </div>
        <footer className="absolute bottom-0 w-full text-center py-4 text-black">
          &copy; {new Date().getFullYear()} Nikunj Khinchi.
        </footer>
      </body>
    </html>
  )
}