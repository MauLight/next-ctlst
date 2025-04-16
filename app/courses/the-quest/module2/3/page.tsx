
import { type ReactNode } from 'react'

import DefinitionClient from '@/app/components/e-learning/definition-client'
import LessonTitle from '@/app/components/e-learning/lesson-title'
import Paragraph from '@/app/components/e-learning/paragraph'
import ComponentWrapper from '@/app/components/common/component-wrapper'
import Title from '@/app/components/e-learning/title'
import CompletionDisplay from '@/app/components/e-learning/completion-display'
import QuizMultiple from '@/app/components/e-learning/quiz-multiple'
import TripleImageComponent from '@/app/components/e-learning/triple-image-component'
import QuizWrapperImage from '@/app/components/e-learning/quiz-wrapper-with-image'


const images = [
    {
        text1: 'Sand',
        text2: 'Soft',
        id: 'a1',
        image: 'https://images.unsplash.com/photo-1740004731264-3cde5c198cc2'
    },
    {
        text1: 'Mountain',
        text2: 'Cold',
        id: 'b2',
        image: 'https://images.unsplash.com/photo-1734630630491-458df4f38213'
    },
    {
        text1: 'Water',
        text2: 'Refreshing',
        id: 'c3',
        image: 'https://images.unsplash.com/photo-1738694114013-4a92b1851d3b'
    },
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

            <div className="w-full h-screen flex items-center justify-center">
                <ComponentWrapper>
                    <TripleImageComponent showSwitch images={images} />
                </ComponentWrapper>
            </div>

            <div className='flex items-center'>
                <ComponentWrapper>
                    <Paragraph text="In a nutshell:" />
                    <Paragraph padding='py-2' text='- Concrete words name what they refer to.' />
                    <Paragraph padding='pt-2 pb-10' text='- Abstract words describe what they refer to.' />
                    <Paragraph text="Words that have a direct connection with the real world are in the concrete side of the spectrum, and concepts that exist only as ideas are in the abstract side of the spectrum." />
                </ComponentWrapper>
            </div>

            <div className='h-screen flex flex-col justify-center w-full items-center'>
                <QuizMultiple
                    answer='b'
                    instructions={['Which of the following is the most abstract word?']}
                    choices={['Blue', 'Resilient', 'Electric', 'Atmosphere']}
                />
            </div>

            <div className='flex items-center'>
                <ComponentWrapper>
                    <Paragraph text="But In the case of screenwriting it gets a bit more complicated than that." />
                    <Paragraph text='This is because screenwriting is all about using concrete words to describe abstract ideas.' />
                </ComponentWrapper>
            </div>


            <div className='w-full h-[400px] flex justify-center items-center'>
                <ComponentWrapper>
                    <Title text='What?' />
                </ComponentWrapper>
            </div>

            <div className='flex items-center'>
                <ComponentWrapper>
                    <Paragraph text="Yes, to be a good screenwriter you need to get comfortable describing with concrete words." />
                </ComponentWrapper>
            </div>

            <div className='w-full h-[400px] flex justify-center items-center'>
                <ComponentWrapper>
                    <Title text='Why?' />
                </ComponentWrapper>
            </div>

            <div className='flex items-center'>
                <ComponentWrapper>
                    <Paragraph text="Because you can't shoot ideas, you can only shoot using the film medium (audio, image and the yuxtaposition of these elements)." />
                </ComponentWrapper>
            </div>

            <QuizWrapperImage />

        </div>
    )
}
