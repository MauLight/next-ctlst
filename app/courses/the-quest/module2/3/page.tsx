
import { type ReactNode } from 'react'

import DefinitionClient from '@/app/components/e-learning/definition-client'
import SentenceHighlights from '@/app/components/e-learning/sentence-highlights'
import LessonTitle from '@/app/components/e-learning/lesson-title'
import Paragraph from '@/app/components/e-learning/paragraph'
import ComponentWrapper from '@/app/components/common/component-wrapper'
import Title from '@/app/components/e-learning/title'
import CompletionDisplay from '@/app/components/e-learning/completion-display'
import QuizMultiple from '@/app/components/e-learning/quiz-multiple'
import TripleImageComponent from '@/app/components/e-learning/triple-image-component'

const bgImages = [
    {
        id: 1,
        img: 'https://film-grab.com/wp-content/uploads/2024/04/Dune-Part-2-58.jpg'
    }
]

export default function Page(): ReactNode {

    return (
        <div className='w-full flex flex-col gap-y-20 justify-center items-center'>
            <CompletionDisplay />

            <LessonTitle title='Intro to meaning' lesson='lesson 3' bgVideo='/lesson1.webm' />

            <div className='flex items-center mt-[200px]'>
                <ComponentWrapper>
                    <Paragraph text='So it becomes pretty clear that meaning is a cornerstone of screenwriting, and of any art-related endeavor for that matter.' />
                </ComponentWrapper>
            </div>

            <div className='h-screen flex items-center'>
                <DefinitionClient
                    title='Meaning'
                    sufix='mean·​ing'
                    def='The thing one intends to convey especially by language.'
                    bg='https://film-grab.com/wp-content/uploads/2022/05/X015.jpg'
                />
            </div>

            <div className='flex items-center mt-[200px]'>
                <ComponentWrapper>
                    <Paragraph text='In the written arts, we use words to create meaning, and words deliver meaning differently depending on how we use them.' />
                    <Paragraph text='They have a spectrum of meaning.' />
                </ComponentWrapper>
            </div>

            <div className="w-full flex justify-center">
                <ComponentWrapper>
                    <div className="w-full flex justify-center relative">
                        <p className='absolute top-0 right-95'>Abstract</p>
                        <p className='absolute bottom-0 right-50'>Concrete</p>
                        <div className="w-0 h-0 border-l-[200px] border-r-[200px] border-b-[300px] border-l-transparent border-r-transparent border-b-sky-500"></div>
                    </div>
                </ComponentWrapper>
            </div>

            <div className="w-full h-screen flex items-center justify-center border">
                <ComponentWrapper>
                    <TripleImageComponent />
                </ComponentWrapper>
            </div>


            <div className='w-full h-[400px] flex justify-center items-center'>
                <ComponentWrapper>
                    <Title text='Why?' />
                </ComponentWrapper>
            </div>

            <div className='flex items-center'>
                <ComponentWrapper>
                    <Paragraph text="Because knowing these elements doesn't help you choose the right ones." />
                    <Paragraph text='In other words, how do you know if you should write that idea you had?' />
                </ComponentWrapper>
            </div>

            {/* The number of images must equal the number of highlighted words */}
            {/* Punctuation will merge into words in this iteration */}
            <SentenceHighlights className='h-screen' key={'value of story'} length={1} highlights={['value', 'story?']} bgImages={bgImages} text='What is the value of your story?' />

            <div className='flex items-center'>
                <ComponentWrapper>
                    <Paragraph text="To understand the value of your story, first we need to talk about the movie industry, and in a more general sense, how cultural industries work." />
                </ComponentWrapper>
            </div>

            <div className='h-screen flex items-center'>
                <DefinitionClient
                    title='Cultural Industry'
                    sufix='cul·​tur·​al in·​dus·​try'
                    def='A firm or company that produces cultural products.'
                    bg='https://film-grab.com/wp-content/uploads/2024/03/The-Book-of-Clarence01.jpg'
                />
            </div>

            <div className='h-screen flex items-center'>
                <DefinitionClient
                    title='Cultural Product'
                    sufix='cul·​tur·​al prod·​uct'
                    def='Goods and services that are valued for their meaning alone.'
                    bg='https://film-grab.com/wp-content/uploads/2024/03/The-Book-of-Clarence01.jpg'
                />
            </div>

            <div className='flex flex-col items-center w-full h-[200px]'>

                <ComponentWrapper>
                    <Paragraph text='If it can go "out of style" it is a cultural product.' />
                </ComponentWrapper>

            </div>
            <div className='h-screen flex flex-col justify-center w-full items-center'>
                <QuizMultiple
                    answer='c'
                    instructions={['Which of the following is a cultural product?']}
                    choices={['An orange', 'A pencil', 'Your screenplay', 'Your phone']}
                />
            </div>

            <div className='flex flex-col items-center w-full h-[200px]'>

                <ComponentWrapper>
                    <Paragraph text='Production companies are cultural industries that produce and sell meaning through cultural products.' />
                </ComponentWrapper>

            </div>

            <SentenceHighlights className='h-screen' key={'meaning'} length={1} highlights={['value', 'story?']} bgImages={[
                {
                    id: 1,
                    img: 'https://film-grab.com/wp-content/uploads/photo-gallery/Babylon_48.jpg?bwg=1680013867'
                }
            ]} text='Cultural products are valued for their meaning.' />

        </div>
    )
}
