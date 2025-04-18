
import { type ReactNode } from 'react'

import DefinitionClient from '@/app/components/e-learning/definition-client'
import LessonTitle from '@/app/components/e-learning/lesson-title'
import Paragraph from '@/app/components/e-learning/paragraph'
import ComponentWrapper from '@/app/components/common/component-wrapper'
import CompletionDisplay from '@/app/components/e-learning/completion-display'
import DoubleImageComponent from '@/app/components/e-learning/double-image-component'
import SentenceHighlights from '@/app/components/e-learning/sentence-highlights'
import QuizMultiple from '@/app/components/e-learning/quiz-multiple'

const images = [
    {
        id: '1',
        image: 'https://res.cloudinary.com/maulight/image/upload/v1744935200/blm5sazwh8ia5yachwdf.jpg',
        text1: 'Division'
    },
    {
        id: '2',
        image: 'https://res.cloudinary.com/maulight/image/upload/v1744935200/ynfesobbwyulecxug1uw.png',
        text1: 'Unity'
    },
]

export default function Page(): ReactNode {

    return (
        <div className='w-full flex flex-col gap-y-20 justify-center items-center'>
            <CompletionDisplay />

            <LessonTitle title='The Unity' lesson='lesson 1' bgVideo='/lesson1.webm' />

            <div className='h-screen flex items-center'>
                <DefinitionClient
                    title='Unity'
                    sufix='uni·​ty'
                    def='The state or quality of being unified in an aesthetic whole.'
                    bg='https://film-grab.com/wp-content/uploads/2021/03/First-and-Last-Men-004.jpg'
                />
            </div>

            <div className='flex items-center'>
                <ComponentWrapper>
                    <Paragraph text='Let me show you a couple of images:' />
                    <DoubleImageComponent images={images} />
                </ComponentWrapper>
            </div>

            <div className='flex flex-col justify-center gap-y-20'>

                <ComponentWrapper>
                    <Paragraph text='We can argue the quality of these examples (endlessly), but I want you to notice a stark difference between these images.' />
                    <Paragraph text='While the first one displays a number of disconnected designs (a clock, a scorpion, a grave, etc, etc.) all made in different styles, the second one was made following a singular design principle.' />
                </ComponentWrapper>

            </div>

            <SentenceHighlights className='h-screen' key={'cohesive unit'} length={4} highlights={['unique', 'design', 'principle', 'cohesive', 'unit,']} bgImages={[
                {
                    id: 1,
                    img: 'https://film-grab.com/wp-content/uploads/2024/08/The-Peoples-Joker-15.jpg'
                }
            ]} text="This unique design principle makes the whole a cohesive unit, elevating its craftmanship." />

            <div className="flex items-center">
                <ComponentWrapper>
                    <Paragraph text="Just as in visual expression, in storytelling there is a way to achieve unity, it starts with defining the theme of your story." />
                </ComponentWrapper>
            </div>

            <div className='h-screen flex flex-col justify-center w-full items-center'>
                <QuizMultiple
                    answer='c'
                    instructions={['Choose the sentence that you think is a truth statement.']}
                    choices={['Unity is a quality we should try to accomplish, only if it is possible.', "It doesn't matter if there's unity in my story if it's a good story.", 'Unity is the quality that makes a story a good story.', "The only thing I should care about is having unity in my writing."]}
                />
            </div>

        </div>
    )
}
