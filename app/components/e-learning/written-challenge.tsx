'use client'

import { useState, type ReactNode } from 'react'
import ComponentWrapper from '../common/component-wrapper'
import { BaseEditor, createEditor, Descendant } from 'slate'
import { Slate, Editable, withReact, ReactEditor } from 'slate-react'
import { useDebouncedCallback } from 'use-debounce'
import { motion } from 'motion/react'

interface WrittenChallengeProps {
    callback: () => void
    noBorder?: boolean
    title: string
    instructions: Array<string>
}

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

export default function WrittenChallenge({ callback, noBorder, title, instructions }: WrittenChallengeProps): ReactNode {

    const [error, setError] = useState<boolean>(false)
    const [editor] = useState(() => withReact(createEditor()))
    const [saving, setSaving] = useState<boolean>(false)

    function handleSubmit() {
        if (editor.children.length > 1) {
            callback()
        } else {
            setError(true)
        }
    }

    const debouncedSave = useDebouncedCallback((value) => {
        if (editor.children.length > 1) {
            setSaving(true)
            console.log(value)

            if (error) {
                setError(false)
            }

            setTimeout(() => {

                setSaving(false)

            }, 2000)
        }

    }, 2000)

    return (
        <ComponentWrapper>
            <div className={`w-full px-10 py-12 rounded-[25px] flex flex-col gap-y-10 ${noBorder ? '' : 'border border-sky-500 '}`}>

                <div className='flex flex-col gap-y-5'>

                    <h1 className='text-quiz-title'>{title}</h1>
                    <div className='flex flex-col gap-y-3'>
                        {
                            instructions.map((instruction, i) => (
                                <p key={instruction + '-' + i} className='text-quiz-body'>{instruction}</p>
                            ))
                        }
                    </div>

                </div>

                <div className='flex flex-col gap-y-2'>

                    <small className={`w-full flex justify-end px-5 ${saving ? 'text-green-500' : 'text-sky-500'}`}>{saving ? 'saving' : 'saved'}</small>

                    <Slate
                        onChange={(value) => { debouncedSave(value) }}
                        editor={editor}
                        initialValue={initialValue}
                    >
                        <Editable
                            className='w-full min-h-[220px] p-10 border border-border rounded-[20px] outline-0'
                        />
                    </Slate>

                    <div className="flex justify-between items-center">
                        {
                            error && (
                                <motion.small
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                    className='text-red-500'
                                >Please answer before submitting.</motion.small>
                            )
                        }
                        <button onClick={handleSubmit} className={`ml-auto px-4 h-10 border ${error ? 'border-red-500 text-red-500' : 'border-sky-500 text-sky-400'} rounded-[6px] mt-5 transition-color duration-300`}>Submit</button>
                    </div>

                </div>

            </div>
        </ComponentWrapper>
    )
}
