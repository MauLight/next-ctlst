
import { type ReactNode } from 'react'

import DefinitionClient from '@/app/components/e-learning/definition-client'
import BulletDefinitions from '@/app/components/e-learning/bullet-definitions'
import SentenceHighlights from '@/app/components/e-learning/sentence-highlights'
import LessonTitle from '@/app/components/e-learning/lesson-title'
import Paragraph from '@/app/components/e-learning/paragraph'
import ComponentWrapper from '@/app/components/common/component-wrapper'
import Title from '@/app/components/e-learning/title'
import QuizWrapper from '@/app/components/e-learning/quiz-wrapper'
import CompletionDisplay from '@/app/components/e-learning/completion-display'

const definitions = [
    {
        id: 'a1',
        title: 'Protagonist',
        def: 'From the characters list, the one who holds the emotional journey of the story.'
    },
    {
        id: 'b2',
        title: 'Setting',
        def: 'The physical, social and personal environment of the story.'
    },
    {
        id: 'c3',
        title: 'Conflict',
        def: 'Actions performed by the protagonist against obstacles, and opposition from other characters, towards a concrete objective.'
    },
    {
        id: 'd4',
        title: 'Resolution',
        def: 'The end of conflict.'
    },
]

const bgImages = [
    {
        id: 1,
        img: 'https://film-grab.com/wp-content/uploads/photo-gallery/imported_from_media_libray/thematrix058.jpg?bwg=1546895510'
    }
]

export default function Page(): ReactNode {

    return (
        <div className='w-full flex flex-col gap-y-20 justify-center items-center'>
            <CompletionDisplay />

            <LessonTitle title='What is a story?' lesson='lesson 1' bgVideo='/lesson1.webm' />

            <div className='h-screen flex items-center'>
                <DefinitionClient
                    title='Story'
                    sufix='stɔː.ri'
                    def='Interrelated sequence of events where the relation between the events is a singular unit.'
                    bg='https://film-grab.com/wp-content/uploads/2014/08/22.jpg'
                />
            </div>

            <div className='min-h-screen flex flex-col justify-center gap-y-20'>

                <ComponentWrapper>
                    <Paragraph text='At its most basic, a story has four distinctive parts:' />
                </ComponentWrapper>

                <BulletDefinitions definitions={definitions} />

            </div>

            <div className='h-[700px] flex items-center'>
                <ComponentWrapper>
                    <Paragraph text='Now, put all of these together in the right order and you get a rudimentary structure of a story.' />
                </ComponentWrapper>
            </div>

            {/* The number of images must equal the number of highlighted words */}
            {/* Punctuation will merge into words in this iteration */}
            <SentenceHighlights className='h-screen' key={1} length={4} highlights={['protagonist', 'setting', 'conflict', 'resolution.']} bgImages={bgImages} text='A protagonist in a setting faces conflict that leads to a resolution.' />

            <div className='w-full h-[400px] flex justify-center items-center'>
                <ComponentWrapper>
                    <Title text='Examples' />
                </ComponentWrapper>
            </div>

            <SentenceHighlights className='h-screen' key={2} length={1} highlights={['blind', 'soldier', 'enemy', 'troups,', 'wounded', 'allies', 'foreign', 'land', 'escaping', 'alive.']} bgImages={[{
                id: 5,
                img: 'https://res.cloudinary.com/maulight/image/upload/v1744199716/m82tdufxerrjnwdi7ggt.jpg'
            },]} text='A blind soldier in a warzone faces enemy troups, wounded allies and a foreign land that leads to escaping alive.' />

            <SentenceHighlights className='h-screen' key={3} length={1} highlights={['college', 'graduate', 'teaching', 'internship', 'inhuman', 'students', 'learning', 'their', 'dark', 'objectives.']} bgImages={[{
                id: 6,
                img: 'https://film-grab.com/wp-content/uploads/photo-gallery/Hellraiser_(2022)_50.jpg?bwg=1667391909'
            },]} text='A college graduate in a teaching internship faces inhuman students leading to learning their dark objectives.' />

            <SentenceHighlights className='h-screen' key={4} length={1} highlights={['aspiring', 'musician', 'city', 'of', 'social', 'disengagement', 'criticism', 'rejection', 'creation', 'his', 'masterpiece.']} bgImages={[{
                id: 7,
                img: 'https://film-grab.com/wp-content/uploads/photo-gallery/Sound_of_Metal_03.jpg?bwg=1629970323'
            },]} text='An aspiring musician in a city of social disengagement faces criticism and rejection leading to the creation of his masterpiece.' />


            <div className='h-[700px] flex items-center'>
                <ComponentWrapper>
                    <Paragraph text='As we said before, conflict are the actions taken by the protagonist against opposition/obstacles (more on that later).' />
                    <Paragraph text='From the first example...' />
                    <Paragraph text='...faces enemy troups, wounded allies and a foreign land...' />
                    <Paragraph text='If you notice, the only action we name is "faces", as in the protagonist faces.' />
                    <Paragraph text='Meaning that the only way to declare actions is through verbs.' />
                </ComponentWrapper>
            </div>

            <div className='h-[700px] flex items-center'>
                <Title text='Verb=Action' />
            </div>

            <div className='h-auto flex items-center'>
                <ComponentWrapper>
                    <Paragraph text="And notice something else, the verb face (to face) is not specific, it points to nothing concrete." />
                    <Paragraph text='By saying "the protagonist faces enemy troups" we imply many other potential actions like:' />

                    <div>
                        <Paragraph padding='py-5' text='- Kills' />
                        <Paragraph padding='py-5' text='- Fights' />
                        <Paragraph padding='py-5' text='- Escapes' />
                        <Paragraph padding='py-5' text='- Persuades' />
                        <Paragraph padding='py-5' text='- Deceives' />
                    </div>

                    <Paragraph text='We could even imply a completely different set of actions:' />

                    <div>
                        <Paragraph padding='py-5' text='- Dances with' />
                        <Paragraph padding='py-5' text='- Plays with' />
                        <Paragraph padding='py-5' text='- Agrees with' />
                        <Paragraph padding='py-5' text='- Loves' />
                    </div>

                    <Paragraph text='And thus, the key property of conflict comes through...' />
                </ComponentWrapper>
            </div>



            <SentenceHighlights className='h-screen w-full' key={5} length={1} highlights={['conflict', 'action']} bgImages={[{
                id: 12,
                img: 'https://film-grab.com/wp-content/uploads/photo-gallery/imported_from_media_libray/thematrixrevolutions055.jpg?bwg=1546895171'
            },]} text='Conflict sparks action' />

            <QuizWrapper />

        </div>
    )
}
