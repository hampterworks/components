import "./globals.css";
import type {Metadata} from "next";
import {Inter} from "next/font/google";
import React from "react";
import Navigation from "@repo/ui/Navigation";

const inter = Inter({subsets: ["latin"]})

export const metadata: Metadata = {
  title: "Component Library",
  description: "React next component library",
}

const RootLayout: React.FC<{ children: React.ReactNode }> = ({children}) => {
  return <html lang="en">
  <body className={inter.className}>
  <Navigation
    links={[
      {type: 'link', name: 'Home', url: '/'},
      {
        type: 'subLink',
        name: 'Components',
        subLinks:[
          {url: '/', name: 'Input'}
        ]
      },
      {
        type: 'subLink',
        name: 'Hooks',
        subLinks:[
          {url: '/', name: 'Click outside'}
        ]
      }
    ]}
  />
  {children}
  </body>
  </html>
}

export default RootLayout
