'use client'

import { useState } from 'react'
import { Squash as Hamburger } from 'hamburger-react'
import { UserCircleIcon } from '@heroicons/react/24/solid'

export default function Topbar() {

    const [isOpen, setOpen] = useState(false)


    return (
        <div className="fixed top-0 left-0 h-[60px] w-screen flex justify-center z-50 glass">
            <div className="h-full w-full max-w-[980px] flex items-center justify-between z-10">
                <h1>Ctlst</h1>
                <div className='flex items-center'>
                    <UserCircleIcon className='w-5 h-5' />
                    <Hamburger size={16} toggled={isOpen} toggle={setOpen} />
                </div>
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-black z-0 opacity-80"></div>
        </div>
    )
}
