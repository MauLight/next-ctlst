'use client'

import { useState, type ReactNode } from 'react'
import ComponentWrapper from '../common/component-wrapper'
import { BaseEditor, createEditor, Descendant } from 'slate'
import { Slate, Editable, withReact, ReactEditor } from 'slate-react'
import { useDebouncedCallback } from 'use-debounce'

type CustomElement = { type: 'paragraph'; children: CustomText[] }
type CustomText = { text: string }

declare module 'slate' {
    interface CustomTypes {
        Editor: BaseEditor & ReactEditor
        Element: CustomElement
        Text: CustomText
    }
}

const initialValue: Descendant[] = [
    {
        type: 'paragraph',
        children: [{ text: '' }],
    },
]

export default function WrittenChallenge(): ReactNode {

    const [editor] = useState(() => withReact(createEditor()))
    const [saving, setSaving] = useState<boolean>(false)

    const debouncedSave = useDebouncedCallback((value) => {
        setSaving(true)
        console.log(value)
        console.log('saved!')

        setTimeout(() => {

            setSaving(false)

        }, 2000)

    }, 2000)

    return (
        <ComponentWrapper>
            <div className="w-full px-10 py-12 border border-sky-500 rounded-[25px] flex flex-col gap-y-10">

                <div className='flex flex-col gap-y-5'>

                    <h1 className='text-quiz-title'>Challenge</h1>
                    <div className='flex flex-col gap-y-3'>
                        <p className='text-quiz-body'>Write at least one and up to three story ideas using the structure we proposed.</p>
                        <p>A protagonist in a setting faces conflict leading to a resolution.</p>
                    </div>

                </div>

                <div className='flex flex-col gap-y-2'>

                    <Slate
                        onChange={(value) => { debouncedSave(value) }}
                        editor={editor}
                        initialValue={initialValue}
                    >
                        <Editable
                            className='w-full min-h-[400px] p-10 border rounded-[20px] outline-0'
                        />
                    </Slate>
                    <small className={`w-full flex justify-end px-5 ${saving ? 'text-green-500' : 'text-sky-500'}`}>{saving ? 'saving' : 'saved'}</small>
                </div>

            </div>
        </ComponentWrapper>
    )
}
