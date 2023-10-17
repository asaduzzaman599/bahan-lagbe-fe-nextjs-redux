"use client";
import { useState } from 'react'
import {
  Button,
} from "@material-tailwind/react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  return (
    
    <div className='flex relative'>
    {children}
    </div>
  )
}
