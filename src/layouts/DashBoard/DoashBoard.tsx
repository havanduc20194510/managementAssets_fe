import React from 'react'
import Header from 'src/components/Admin/Dashboard/Header/Header'
import Sidebar from 'src/components/Admin/Dashboard/Sidebar/Sidebar'

interface Props {
  children?: React.ReactNode
}

export default function DashBoard({ children }: Props) {
  return (
    <div className='flex items-center'>
      <Sidebar />
      <div className='bg-[#F5F6FA] w-4/5'>
        <Header />
        {children}
      </div>
    </div>
  )
}
