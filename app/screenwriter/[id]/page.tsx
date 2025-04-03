import { type ReactNode } from 'react'
import Screenwriter from '@/app/components/screenwriter/screenwriter'

export default async function Page({ params }: { params: Promise<{ id: string }> }): Promise<ReactNode> {

  const urlParams = await params
  const id = urlParams.id
  console.log(id)


  return (
    <div className='w-screen min-h-screen flex justify-center items-center'>
      <Screenwriter />
    </div>
  )
}
