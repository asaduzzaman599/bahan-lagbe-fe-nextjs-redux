"use client";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    
    <div className='flex relative'>
    {children}
    </div>
  )
}
