import "./globals.css"
import { Inter } from "next/font/google"
import Navbar from "@/components/Navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "HRnet",
  description: "Employees management",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} p-5 bg-gray-50 relative`}>
        <header>
          <h1 className="text-center text-2xl font-semibold">HRnet</h1>
          <Navbar />
        </header>
        {children}
      </body>
    </html>
  )
}
