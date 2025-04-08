import React from 'react'

export default function BulletDefinitions({ definitions }: { definitions: Array<Record<string, string>> }) {
    return (
        <>
            {
                definitions.map((def) => (
                    <div key={def.id} className="w-full max-w-[980px]">


                        <div className="w-full h-full">
                            <div className='flex gap-x-10 items-start'>
                                <h2 className='text-bullet-title'>{def.title}</h2>
                                <p className='text-bullet-definition'>{def.def}</p>
                            </div>
                        </div>


                    </div>
                ))
            }
        </>
    )
}
