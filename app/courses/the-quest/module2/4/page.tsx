
import { type ReactNode } from 'react'

import LessonTitle from '@/app/components/e-learning/lesson-title'
import Paragraph from '@/app/components/e-learning/paragraph'
import ComponentWrapper from '@/app/components/common/component-wrapper'
import Title from '@/app/components/e-learning/title'
import CompletionDisplay from '@/app/components/e-learning/completion-display'
import SentenceHighlights from '@/app/components/e-learning/sentence-highlights'
import QuizWritten from '@/app/components/e-learning/quiz-written'

export default function Page(): ReactNode {

    return (
        <div className='w-full flex flex-col gap-y-20 justify-center items-center'>
            <CompletionDisplay />

            <LessonTitle title='The right words' lesson='lesson 4' bgVideo='/lesson1.webm' />

            <div className='flex items-center mt-[200px]'>
                <ComponentWrapper>
                    <Paragraph text="I bet you're wondering how to get good at describing with concrete language." />
                    <Paragraph text="After all, in school we're taught to describe using adjectives and adverbs. But in screenwriting we have to avoid using them in most cases!" />
                </ComponentWrapper>
            </div>

            <div className='w-full h-[400px] flex justify-center items-center'>
                <ComponentWrapper>
                    <Title text='Example' />
                </ComponentWrapper>
            </div>

            {/* The number of images must equal the number of highlighted words */}
            {/* Punctuation will merge into words in this iteration */}
            <SentenceHighlights className='h-screen' key={'example'} length={1} highlights={['quickly', 'busy']} bgImages={[
                {
                    id: 1,
                    img: 'https://film-grab.com/wp-content/uploads/2019/03/whispering061.jpg'
                }
            ]} text='Leslie walks quickly through the busy store.' />

            <div className='flex items-center'>
                <ComponentWrapper>
                    <Paragraph text="First of all, you should avoid writing adverbs (eg. quickly) all together. Adverbs condense or replace a visual description and are used to convey information fast, but unspecific." />
                    <Paragraph text="In the sentence, we use the word busy to describe the setting (the store's interior). Is this word enough to paint the scene in our mind? Can we do better than that?" />
                </ComponentWrapper>
            </div>

            <SentenceHighlights className='h-screen' key={'example corrected'} length={1} highlights={['storms', 'countless', 'bodies', 'struggles', 'sea']} bgImages={[
                {
                    id: 1,
                    img: 'https://film-grab.com/wp-content/uploads/2019/03/dunkirk021.jpg'
                }
            ]} text="Leslie storms through the countless bodies inside the store. She struggles through the sea of people." />

            <div className='flex items-center'>
                <ComponentWrapper>
                    <Paragraph text="In our corrected example, we use more words to describe the setting." />
                    <Paragraph text="Notice that sentences like 'storms through' point to specific frames (eg. a shot of Leslie passing through the people), while descriptions such as 'sea of people' describe the motion and feeling of the place." />
                </ComponentWrapper>
            </div>

            <div className='w-full h-[400px] flex justify-center items-center'>
                <ComponentWrapper>
                    <Title text='Beware' />
                </ComponentWrapper>
            </div>

            <div className='flex items-center'>
                <ComponentWrapper>
                    <Paragraph text="This does NOT mean that you have to describe your actions with as many words as possible, quite the contrary." />
                    <Paragraph text="The movie industry (just as any industry) is all about economy, so you want to be able to write your scenes with as little words as possible, while being effective at conveying what you wanted to say." />
                    <Paragraph text="How do you know you are effective?" />
                    <Paragraph text="It depends on your intention." />
                </ComponentWrapper>
            </div>

            <div className="w-full h-screen flex justify-center items-center">
                <ComponentWrapper>
                    <QuizWritten maxWidth='max-w-[700px]' instructions={['Fix the descriptions using what we learned:', '1- Mark screams loudly in the middle of the empty square.', '2- Sophie puts the baby carefully in the warm bed.', '3- John serves generous portions in the plates while the customers hungrily await.']} numAnswers={3} />
                </ComponentWrapper>
            </div>


        </div>
    )
}
