
import { type ReactNode } from 'react'
import DefinitionClient from '../components/e-learning/definition-client'
import BulletDefinitions from '../components/e-learning/bullet-definitions'
import SentenceHighlights from '../components/e-learning/sentence-highlights'
import LessonTitle from '../components/e-learning/lesson-title'

const definitions = [
    {
        id: 'a1',
        title: 'Protagonist',
        def: 'From the chatacters list, the one who holds the emotional journey of the story.'
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
    },
    {
        id: 2,
        img: 'https://film-grab.com/wp-content/uploads/photo-gallery/ghost032.jpg?bwg=1551280216'
    },
    {
        id: 3,
        img: 'https://film-grab.com/wp-content/uploads/photo-gallery/Oppenheimer_43.jpg?bwg=1699893936'
    },
    {
        id: 4,
        img: 'https://film-grab.com/wp-content/uploads/photo-gallery/52%20(106).jpg?bwg=1547148004'
    }
]

export default function Page(): ReactNode {
    return (
        <div className='w-full flex flex-col gap-y-20 justify-center items-center'>

            <LessonTitle />

            <div className='h-screen flex items-center'>
                <DefinitionClient
                    title='Story'
                    sufix='stɔː.ri'
                    def='Interrelated sequence of events where the relation between the events is a singular unit.'
                    bg='https://film-grab.com/wp-content/uploads/2014/08/22.jpg'
                />
            </div>

            <div className='min-h-screen flex items-center'>

                <BulletDefinitions definitions={definitions} />

            </div>

            {/* The number of images must equal the number of highlighted words */}
            {/* Punctuation will merge into words in this iteration */}
            <SentenceHighlights key={1} length={4} highlights={['protagonist', 'setting', 'conflict', 'resolution.']} bgImages={bgImages} text='A protagonist in a setting faces conflict that leads to resolution.' />

            <SentenceHighlights key={2} length={1} highlights={['blind', 'soldier', 'enemy', 'troups,', 'wounded', 'allies', 'foreign', 'land', 'escaping', 'alive.']} bgImages={[{
                id: 5,
                img: 'https://res.cloudinary.com/maulight/image/upload/v1744199716/m82tdufxerrjnwdi7ggt.jpg'
            },]} text='A blind soldier in a warzone faces enemy troups, wounded allies and a foreign land that leads to escaping alive.' />

            <SentenceHighlights key={3} length={1} highlights={['college', 'graduate', 'teaching', 'internship', 'inhuman', 'students', 'learning', 'their', 'dark', 'objectives.']} bgImages={[{
                id: 6,
                img: 'https://film-grab.com/wp-content/uploads/photo-gallery/Hellraiser_(2022)_50.jpg?bwg=1667391909'
            },]} text='A college graduate in a teaching internship faces inhuman students leading to learning their dark objectives.' />

            <SentenceHighlights key={4} length={1} highlights={['aspiring', 'musician', 'city', 'of', 'social', 'disengagement', 'criticism', 'rejection', 'creation', 'his', 'masterpiece.']} bgImages={[{
                id: 7,
                img: 'https://film-grab.com/wp-content/uploads/photo-gallery/Sound_of_Metal_03.jpg?bwg=1629970323'
            },]} text='An aspiring musician in a city of social disengagement faces criticism and rejection leading to the creation of his masterpiece.' />

        </div>
    )
}
