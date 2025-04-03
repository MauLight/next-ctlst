import { type ReactElement } from "react"
import { Editor, Transforms, Element, BaseEditor } from "slate"
import { ReactEditor } from "slate-react"

export interface RenderElementsProps {
    element: CustomElement
    children: ReactElement
    attributes: Record<string, unknown>
}

export type CustomText = { text: string, bold?: boolean, italic?: boolean }
export type CustomElement = { type?: 'page' | 'heading' | 'description' | 'character' | 'dialog' | 'fade' | 'break', children: CustomText[] | CustomElement[] }

export const CustomEditor = {
    isBoldMarkActive(editor: BaseEditor & ReactEditor) {
        const marks = Editor.marks(editor) as Partial<CustomText>
        return marks ? marks.bold === true : false
    },

    isItalicMarkActive(editor: BaseEditor & ReactEditor) {
        const marks = Editor.marks(editor) as Partial<CustomText>
        return marks ? marks.italic === true : false
    },

    toggleBoldMark(editor: BaseEditor & ReactEditor) {
        const isActive = CustomEditor.isBoldMarkActive(editor)
        if (isActive) {
            Editor.removeMark(editor, 'bold')
        } else {
            Editor.addMark(editor, 'bold', true)
        }
    },

    toggleItalicMark(editor: BaseEditor & ReactEditor) {
        const isActive = CustomEditor.isItalicMarkActive(editor)
        if (isActive) {
            Editor.removeMark(editor, 'italic')
        } else {
            Editor.addMark(editor, 'italic', true)
        }
    }
}

export const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>, editor: BaseEditor & ReactEditor) => {

    const lastNodeIndex = editor.children.length - 1
    const prevType = (editor.children[lastNodeIndex] as CustomElement).type

    if (e.key === 'Enter' && prevType) {
        switch (prevType) {
            case 'heading': {
                e.preventDefault()
                Transforms.insertNodes(
                    editor,
                    {
                        type: 'description',
                        children: [{ text: '' }]
                    } as CustomElement
                )
                break
            }

            case 'description': {
                e.preventDefault()
                Transforms.insertNodes(
                    editor,
                    {
                        type: 'description',
                        children: [{ text: '' }]
                    } as CustomElement
                )
                break
            }

            case 'character': {
                e.preventDefault()
                Transforms.insertNodes(
                    editor,
                    {
                        type: 'dialog',
                        children: [{ text: '' }]
                    } as CustomElement
                )
                break
            }

            case 'dialog': {
                e.preventDefault()
                Transforms.insertNodes(
                    editor,
                    {
                        type: 'character',
                        children: [{ text: '' }]
                    } as CustomElement
                )
                break
            }

            default: {
                e.preventDefault()
                Transforms.insertNodes(
                    editor,
                    {
                        type: 'description',
                        children: [{ text: '' }]
                    } as CustomElement
                )
                break
            }
        }
    }

    //* If command key (mac) hasn't been pressed, return.
    if (!e.metaKey) {
        return
    }

    switch (e.key) {
        case '1': {
            e.preventDefault()
            Transforms.setNodes(
                editor,
                { type: 'heading' } as CustomElement,
                { match: n => Element.isElement(n) && Editor.isBlock(editor, n) }
            )
            break
        }

        case '2': {
            e.preventDefault()
            Transforms.setNodes(
                editor,
                { type: 'description' } as CustomElement,
                { match: n => Element.isElement(n) && Editor.isBlock(editor, n) }
            )
            break
        }

        case '3': {
            e.preventDefault()
            Transforms.setNodes(
                editor,
                { type: 'character' } as CustomElement,
                { match: n => Element.isElement(n) && Editor.isBlock(editor, n) }
            )
            break
        }

        case '4': {
            e.preventDefault()
            Transforms.setNodes(
                editor,
                { type: 'dialog' } as CustomElement,
                { match: n => Element.isElement(n) && Editor.isBlock(editor, n) }
            )
            break
        }

        case '5': {
            e.preventDefault()
            Transforms.setNodes(
                editor,
                { type: 'fade' } as CustomElement,
                { match: n => Element.isElement(n) && Editor.isBlock(editor, n) }
            )
            break
        }

        case 'b': {
            e.preventDefault()
            CustomEditor.toggleBoldMark(editor)
            break
        }

        case 'i': {
            e.preventDefault()
            CustomEditor.toggleItalicMark(editor)
            break
        }
    }
}
