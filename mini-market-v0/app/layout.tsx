import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Link from "next/link"
import type React from "react" // Added import for React

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Mini Market Management",
  description: "Efficiently manage your mini market inventory and sales",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <header className="bg-blue-600 text-white">
            <div className="container mx-auto px-4 py-6">
              <div className="flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold">
                  Mini Market Management
                </Link>
                <nav>
                  <ul className="flex space-x-4">
                    <li>
                      <Link href="/products" className="hover:underline">
                        Products
                      </Link>
                    </li>
                    <li>
                      <Link href="/sales" className="hover:underline">
                        Sales
                      </Link>
                    </li>
                    <li>
                      <Link href="/reports" className="hover:underline">
                        Reports
                      </Link>
                    </li>
                    <li>
                      <Link href="/settings" className="hover:underline">
                        Settings
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </header>
          <main className="flex-grow container mx-auto px-4 py-8">{children}</main>
          <footer className="bg-gray-100 text-center py-4">
            <p>&copy; 2025 Mini Market Management. All rights reserved.</p>
          </footer>
        </div>
      </body>
    </html>
  )
}

