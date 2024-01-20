import React from 'react'
import Footer from 'src/components/Footer'
import Sidebar from './sidebar'
import Header from './header'

interface Props {
    children?: React.ReactNode
}

export default function DashBoard() {
    return (
        <div className="flex">
            <Sidebar />
            <div className="bg-[#F5F6FA] w-4/5">
                <Header />
                <div>
                    {/* {children} */}
                </div>
            </div>
            {/* <Footer /> */}
        </div>
    )
}
