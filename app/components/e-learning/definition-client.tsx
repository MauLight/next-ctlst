'use client'

import Image from 'next/image'
import React from 'react'

interface DefinitionProps {
  title: string
  sufix: string
  def: string
  bg: string
}

export default function DefinitionClient({ title, sufix, def, bg }: DefinitionProps) {
  return (
    <div className="relative w-full max-w-[980px] h-auto flex flex-col gap-y-20">
      <div className='z-10'>
        <h2 className='text-def-title leading-tight'>{title}</h2>
        <p className='text-def-subtitle'>{sufix}</p>
      </div>
      <p className='text-def-body z-10'>{def}</p>
      <Image
        alt='movie'
        width={980}
        height={400}
        className='h-full absolute top-0 left-0 opacity-20 grayscale'
        src={bg}
      />
      {
        Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className='absolute top-0 left-0 w-full h-full bg-radial from-transparent from-10% to-[#0a0a0a]'></div>
        ))
      }
    </div>
  )
}
