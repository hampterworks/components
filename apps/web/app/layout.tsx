import "./globals.css";
import type {Metadata} from "next";
import {Inter} from "next/font/google";
import React from "react";

const inter = Inter({subsets: ["latin"]})

export const metadata: Metadata = {
  title: "Component Library",
  description: "React next component library",
}

const RootLayout: React.FC<{ children: React.ReactNode }> = ({children}) => {
  return <html lang="en">
  <body className={inter.className}>{children}</body>
  </html>
}

export default RootLayout
