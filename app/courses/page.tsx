
import { type ReactNode } from 'react'
import DefinitionClient from '../components/e-learning/definition-client'

const definitions = [
    {
        id: 'a1',
        title: 'Protagonist',
        def: 'From the chatacters list, the one who holds the emotional journey of the story.'
    },
    {
        id: 'b2',
        title: 'Setting',
        def: 'The physical, social and personal environment of the story.'
    },
    {
        id: 'c3',
        title: 'Conflict',
        def: 'Actions performed by the protagonist against obstacles, and opposition from other characters, towards a concrete objective.'
    },
    {
        id: 'd4',
        title: 'Resolution',
        def: 'The end of conflict.'
    },
]

export default function Page(): ReactNode {
    return (
        <div className='w-full flex flex-col gap-y-20 justify-center items-center'>

            <div className='h-screen flex items-center'>
                <DefinitionClient
                    title='Story'
                    sufix='stɔː.ri'
                    def='Interrelated sequence of events where the relation between the events is a singular unit.'
                    bg='https://film-grab.com/wp-content/uploads/2014/08/22.jpg'
                />
            </div>

            <div className='min-h-screen flex flex-col justify-center gap-y-20'>

                {
                    definitions.map((def) => (
                        <div key={def.id} className="w-full max-w-[980px]">


                            <div className="w-full h-full">
                                <div className='flex gap-x-10 items-start'>
                                    <h2 className='text-[2.618rem] leading-11 text-sky-500'>{def.title}</h2>
                                    <p className='text-[1.618rem] text-balance text-sky-600'>{def.def}</p>
                                </div>
                            </div>


                        </div>
                    ))
                }


            </div>



        </div>
    )
}
