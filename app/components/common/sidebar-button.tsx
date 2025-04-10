'use client'

import { useState } from 'react'
import { ArrowRightIcon } from '@heroicons/react/24/solid'

export default function SidebarButton() {

    const [hidden, setHidden] = useState<boolean>(false)

    return (
        <button onClick={() => { setHidden(!hidden); console.log('clicked') }} className='absolute -right-6 top-100 h-[100px] px-1 border border-sky-500 rounded-r-[15px]'>
            <ArrowRightIcon className='w-4 h-4' />
        </button>
    )
}
