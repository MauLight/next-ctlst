import { type ReactNode } from 'react'

export default async function Page({ params }: { params: Promise<{ id: string }> }): Promise<ReactNode> {

  const urlParams = await params
  const id = urlParams.id


  return (
    <div className='w-screen h-screen flex justify-center items-center text-main'>{id}</div>
  )
}
