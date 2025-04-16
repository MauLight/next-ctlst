
import { type ReactNode } from 'react'

import LessonTitle from '@/app/components/e-learning/lesson-title'
import Paragraph from '@/app/components/e-learning/paragraph'
import ComponentWrapper from '@/app/components/common/component-wrapper'
import Title from '@/app/components/e-learning/title'
import CompletionDisplay from '@/app/components/e-learning/completion-display'
import SentenceHighlights from '@/app/components/e-learning/sentence-highlights'
import DefinitionClient from '@/app/components/e-learning/definition-client'
import BulletDefinitions from '@/app/components/e-learning/bullet-definitions'
import ComparisonComponent from '@/app/components/e-learning/comparison-component'
import TripleImageComponent from '@/app/components/e-learning/triple-image-component'
import QuizWrapperImage5 from '@/app/components/e-learning/quiz-wrapper-with-image-5'

const definitions = [
    {
        id: 'a1',
        title: 'Signifier',
        def: 'A linguistic unit or pattern, such as a succession of speech sounds, written symbols, or gestures, that conveys meaning.'
    },
    {
        id: 'b2',
        title: 'Signified',
        def: 'The concept or idea that the signifier denotes.'
    }
]


const images = [
    {
        text1: 'Electricity',
        text2: 'Soft',
        id: 'a1',
        image: 'https://images.unsplash.com/photo-1602750981472-01d024fcf92b'
    },
    {
        text1: 'Car crash',
        text2: 'Cold',
        id: 'b2',
        image: 'https://images.unsplash.com/photo-1622512774502-e748483b18ea'
    },
    {
        text1: 'Bycicle road',
        text2: 'Refreshing',
        id: 'c3',
        image: 'https://images.unsplash.com/photo-1740252780110-20d7619c26d7'
    },
]

export default function Page(): ReactNode {

    return (
        <div className='w-full flex flex-col gap-y-20 justify-center items-center'>
            <CompletionDisplay />

            <LessonTitle title="It's about symbols" lesson='lesson 5' bgVideo='/lesson1.webm' />

            <div className='flex items-center mt-[200px]'>
                <ComponentWrapper>
                    <Paragraph text="Have you ever heard the phrase 'show, don't tell'? If you have, you might know that it means to describe visually. " />
                    <Paragraph text="Don't write 'She is nervous...'" />
                    <Paragraph text="Write 'Her hands tremble...'" />
                    <Paragraph text="We, as audience, are smart enough to put the pieces together, we see hands shaking we get the point, she's nervous. But it also gives you, the writer, more control over the images you're sparking in our imagination." />
                    <Paragraph text="What you want to do is to transform an abstract idea (her nervousness) into a concrete visual representation (her hands trembling)." />
                </ComponentWrapper>
            </div>

            <SentenceHighlights className='h-screen' key={'symbol-sentence'} length={1} highlights={['intention', 'symbol']} bgImages={[
                {
                    id: 1,
                    img: 'https://film-grab.com/wp-content/uploads/2024/05/Double-Blind-09.jpg'
                }
            ]} text='Your intention is to write nervousness, and you do it through a symbol of being nervous, her hands trembling.' />

            <SentenceHighlights className='h-screen' key={'meaning-sentence'} length={1} highlights={['mean']} bgImages={[
                {
                    id: 1,
                    img: 'https://film-grab.com/wp-content/uploads/photo-gallery/Sin_Nombre_005.jpg?bwg=1569603006'
                }
            ]} text='Trembling hands mean nervousnesss.' />

            <div className='flex items-center'>
                <ComponentWrapper>
                    <Paragraph text="We circle back to meaning, but this time we're gonna dig a bit depper with the help of semiotics." />
                </ComponentWrapper>
            </div>


            <div className='h-screen flex items-center'>
                <DefinitionClient
                    title='Semiotics'
                    sufix='se·​mi·​ot·​ics'
                    def='The study of signs and symbols and their use or interpretation.'
                    bg='https://film-grab.com/wp-content/uploads/photo-gallery/Belladonna_of_Sadness_059.jpg?bwg=1569332640'
                />
            </div>

            <div className='flex flex-col justify-center gap-y-10'>
                <ComponentWrapper>
                    <Paragraph text="Semiotics establish a relation between two terms:." />
                </ComponentWrapper>
                <BulletDefinitions definitions={definitions} />
            </div>

            <div className='flex items-center'>
                <ComponentWrapper>
                    <Paragraph text="A lot of words there, but the important thing to remember is that there's a relation between the signifier and the signified." />
                    <Paragraph text="A relation of equivalence." />
                    <Paragraph text="In lamest terms, the relation makes both concepts equal." />
                </ComponentWrapper>
            </div>

            <div className='w-full h-[400px] flex justify-center items-center'>
                <ComponentWrapper>
                    <Title text='Example' />
                </ComponentWrapper>
            </div>

            <ComparisonComponent word='tree' image='https://res.cloudinary.com/maulight/image/upload/v1744762385/kc6z79fpiz9et5orupg9.png' labels={['signifier', 'signified']} />

            <div className='flex items-center'>
                <ComponentWrapper>
                    <Paragraph text="The word tree is the signifier, it points to a tree, the signified. It tells us its meaning." />
                </ComponentWrapper>
            </div>

            <ComparisonComponent reverse word='tree' image='https://res.cloudinary.com/maulight/image/upload/v1744762385/kc6z79fpiz9et5orupg9.png' labels={['signified', 'signifier']} />

            <div className='flex items-center'>
                <ComponentWrapper>
                    <Paragraph text="Conversely, the image of a tree points to its signifier, the word tree, and thus we understand that what we're seeing is a tree." />
                </ComponentWrapper>
            </div>

            <div className='flex items-center'>
                <ComponentWrapper>
                    <Paragraph text="Now, we said that the relation between a signifier and a signified is one of equivalence." />
                    <Paragraph text="The word tree and a tree mean the same." />
                    <Paragraph text="This is what we call a concrete relation, also called a sign." />
                </ComponentWrapper>
            </div>

            <div className="w-full h-screen flex items-center justify-center">
                <ComponentWrapper>
                    <TripleImageComponent images={images} />
                </ComponentWrapper>
            </div>

            <div className='w-full flex justify-center items-center'>
                <ComponentWrapper>
                    <Paragraph text="But what if I do this?" />
                </ComponentWrapper>
            </div>

            <ComparisonComponent size={[256.5, 485.75]} word='passion ' image='https://res.cloudinary.com/maulight/image/upload/v1744769534/outvdkusropxr3psgqer.png' labels={['signifier', 'signified']} />

            <div className='w-full flex justify-center items-center'>
                <ComponentWrapper>
                    <Paragraph text="In this case, the relation between the signifier (passion) and the image of a flower (signified) is not immediately equivalent." />
                    <Paragraph text="It is through cultural context that we know roses are connected with passion." />
                    <Paragraph text="In other words, we have to interpret the equivalence between them." />
                </ComponentWrapper>
            </div>

            <SentenceHighlights className='h-screen' key={'symbol-relation'} length={1} highlights={['symbol']} bgImages={[
                {
                    id: 1,
                    img: 'https://film-grab.com/wp-content/uploads/photo-gallery/Fast_Color_055.jpg?bwg=1569590919'
                }
            ]} text='This is what we call a symbol and the relation we establish is an abstract relation.' />

            <div className='w-full flex justify-center items-center'>
                <ComponentWrapper>
                    <Paragraph text="And that's it." />
                    <Paragraph text="Movies are all about symbols." />
                    <Paragraph text="The good ones, that is." />
                </ComponentWrapper>
            </div>

            <QuizWrapperImage5 />

        </div>
    )
}
