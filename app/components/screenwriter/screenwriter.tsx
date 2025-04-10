'use client'

import { motion } from 'motion/react'
import React, { JSX, useCallback, useEffect, useMemo, useState } from 'react'
import { type BaseEditor, createEditor, Descendant } from 'slate'
import { Slate, Editable, withReact, ReactEditor, RenderElementProps } from 'slate-react'
import { handleKeyDown } from './functions'
import { PageElement, HeadingElement, CharacterElement, DialogElement, FadeElement, BreakElement, DefaultElement } from './render-elements'

export default function Screenwriter() {

    // Create a Slate editor object that won't change across renders.
    const [editor] = useState<BaseEditor & ReactEditor>(() => withReact(createEditor()))

    const initialValue: Descendant[] = useMemo(() => editor.children.length > 0 ? editor.children : [
        {
            type: 'paragraph',
            children: [{ text: '' }]
        }
    ], [editor.children])

    //* Render controller, it uses the given components to render the type of text.
    function renderElementFunction(props: RenderElementProps): JSX.Element {
        const element = props.element as unknown as { type: string }
        switch (element.type) {
            case 'page':
                return <PageElement {...props} />
            case 'heading':
                return <HeadingElement {...props} />
            case 'description':
                return <DefaultElement {...props} />
            case 'character':
                return <CharacterElement {...props} />
            case 'dialog':
                return <DialogElement {...props} />
            case 'fade':
                return <FadeElement {...props} />
            case 'break':
                return <BreakElement {...props} />
            default:
                return <DefaultElement {...props} />
        }
    }

    const renderElement = useCallback(renderElementFunction, [])

    useEffect(() => {
        //* Focus the editor once it mounts
        ReactEditor.focus(editor)
    }, [editor])

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, type: 'spring', bounce: 0.2 }}
            className="w-[612px] h-[792px] border border-sky-600 rounded-[15px] p-10">

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2, delay: 0.6 }}
            >
                <Slate editor={editor} initialValue={initialValue}>
                    <Editable
                        renderElement={renderElement}
                        onKeyDown={(e) => { handleKeyDown(e, editor) }}
                        className="outline-none w-full h-full text-main"
                    />
                </Slate>
            </motion.div>

        </motion.div>
    )
}
