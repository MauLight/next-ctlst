
import { type ReactNode } from 'react'

import DefinitionClient from '@/app/components/e-learning/definition-client'
import BulletDefinitions from '@/app/components/e-learning/bullet-definitions'
import SentenceHighlights from '@/app/components/e-learning/sentence-highlights'
import LessonTitle from '@/app/components/e-learning/lesson-title'
import Paragraph from '@/app/components/e-learning/paragraph'
import ComponentWrapper from '@/app/components/common/component-wrapper'
import Title from '@/app/components/e-learning/title'
import CompletionDisplay from '@/app/components/e-learning/completion-display'
import WrittenChallenge from '@/app/components/e-learning/written-challenge'

const definitions = [
    {
        id: 'a1',
        title: 'Perceptible',
        def: 'Surface level of the film, the images and sounds the audience experiences.'
    },
    {
        id: 'b2',
        title: 'Non-perceptible',
        def: 'System of specific codes inherent to the film medium, that are combined in structural relations to produce meaning.'
    }
]

const bgImages = [
    {
        id: 1,
        img: 'https://film-grab.com/wp-content/uploads/2023/12/Dream-Scenario-24.jpg'
    }
]

const bgImages2 = [
    {
        id: 1,
        img: 'https://film-grab.com/wp-content/uploads/2023/04/The-Fabelmans-21.jpg'
    }
]

const bgImages3 = [
    {
        id: 1,
        img: 'https://film-grab.com/wp-content/uploads/photo-gallery/Last_Night_008.jpg?bwg=1660726026'
    }
]

export default function Page(): ReactNode {

    return (
        <div className='w-full flex flex-col gap-y-20 justify-center items-center'>
            <CompletionDisplay />

            <LessonTitle title='Are you ready?' lesson='lesson 6' bgVideo='/lesson1.webm' />

            <div className='h-[700px] flex items-center'>
                <ComponentWrapper>
                    <Paragraph text='If there is one thing we need to keep in mind after our talk about semiotics is that a signifier is some sort of code that represents what it signifies (the signified).' />
                    <Paragraph text='The word tree represents trees, roses represent passion, etc.' />
                </ComponentWrapper>
            </div>

            <div className='h-screen flex items-center'>
                <DefinitionClient
                    title='Film semiotics'
                    sufix='film se·​mi·​ot·​ics'
                    def='Invariant traits that manifest in all films and confer its distinctiveness.'
                    bg='https://film-grab.com/wp-content/uploads/2014/08/22.jpg'
                />
            </div>

            <div className='flex flex-col justify-center gap-y-20'>

                <ComponentWrapper>
                    <Paragraph text='Film semiotics establishes two levels of representation in film (two signifier -> signified equivalences).' />
                </ComponentWrapper>

                <BulletDefinitions definitions={definitions} />

            </div>

            <div className='flex items-center'>
                <ComponentWrapper>
                    <Paragraph text='Think about it this way, the perceptible level are the facts, the actions of the movie, while the non-perceptible level is the way in which the audience gets to know about these actions.' />
                    <Paragraph text='In film, the non-perceptible level is designed mainly in the screenwriting and the montage phases, because is in these phases of production that you get to decide the order and form of the actions, represented as scenes, sequences, etc.' />
                    <Paragraph text='And get this, your mastery of the non-perceptible level will determine the impact of your story in the eyes of the audience.' />
                    <Paragraph text="I'm talking when to use a montage sequence, when to explain in dialogues, when to add a twist, when to start, when to finish, the length of scenes, of sequences, the character arc, the antagonist arc, levels of conflict, etc, etc." />
                    <Paragraph text="It might sound like a lot, and it is a lot. That's why your objective in this course (especially if this is your first attempt to write a full-length screenplay) should be to learn and apply the concepts and techniques we'll discuss, rather than obsessing over writing that masterpiece that will change the world." />
                </ComponentWrapper>
            </div>

            <div className='w-full h-[400px] flex justify-center items-center'>
                <ComponentWrapper>
                    <Title text='Warning!' />
                </ComponentWrapper>
            </div>

            <div className='flex items-center'>
                <ComponentWrapper>
                    <Paragraph text="Maybe you noticed this already, but what we're implying here is the use of formulas and fixed methods that, as we explained before, are expected by the audience." />
                    <Paragraph text="And I understand that is tempting to move away from constraints and have more freedom to write. But I ask you to make an effort not to discard formulaic writing, let me explain you why." />
                    <Paragraph text="First of all, if you do you're gonna write worse than if you use it, that is a fact (more so if you haven't use them at all)." />
                    <Paragraph text="Not going through some form of story structuring is the main reason novel writers struggle to finish their stories (some don't finish at all)." />
                    <Paragraph text="But there's more than that, because in cultural industries..." />
                </ComponentWrapper>
            </div>

            <SentenceHighlights className='h-screen' key={'value as writer'} length={4} highlights={['value', 'experts', 'conflict', 'resolution.']} bgImages={bgImages} text="Your value as a writer is given by experts (agents, managers, critics, etc,) all of them versed in story structure, and they'll use it to review your screenplay." />

            <div className='flex w-full justify-center items-center'>
                <ComponentWrapper>
                    <Paragraph text="And..." />
                </ComponentWrapper>
            </div>

            <SentenceHighlights className='h-screen' key={'value of story'} length={4} highlights={['value', 'audiences.', 'conflict', 'resolution.']} bgImages={bgImages2} text="The value of your stories is given by the audiences." />

            <div className='h-[700px] flex items-center'>
                <ComponentWrapper>
                    <Paragraph text='Because people have been exposed to movies for so long now, they expect them to have a certain shape, to respect certain unspoken rules.' />
                    <Paragraph text='A few years ago, film expert David Thomson  conducted an analysis of popular movies and find out that:' />
                    <Paragraph padding='py-5' text='- The first act averages 26 minutes or 25% of average runtime.' />
                    <Paragraph padding='py-5' text='- The first part of the second act averages 28 minutes or 27% of the average runtime.' />
                    <Paragraph padding='py-5' text='- The second part of the second act averages 27 minutes or 27% of the average runtime.' />
                    <Paragraph padding='py-5' text='- The third act averages 25 minutes or 24% of average runtime.' />
                </ComponentWrapper>
            </div>

            <div className='w-full flex justify-center items-center'>
                <ComponentWrapper>
                    <Title text='popular movies are formulaic' />
                </ComponentWrapper>
            </div>


            <div className='h-[700px] flex items-center'>
                <ComponentWrapper>
                    <Paragraph text='A formulaic movie can proceed fast because it is crafted to be easily understood.' />
                    <Paragraph text='The audience understand movies because they understand the codes of cinema.' />
                    <Paragraph text='For example, we understand two people are talking in real time when we cut back and forth between their locations as they hold their phones.' />
                    <Paragraph text='And from all the codes of cinema you can think of, there is one that is critical for screenwriting.' />
                    <Paragraph text='The concept of unity.' />
                    <Paragraph text="Starting from the next module, we'll dive into story structure with unity as our anchor." />
                </ComponentWrapper>
            </div>

            <div className='w-full h-screen flex justify-center items-center'>
                <ComponentWrapper>
                    <Title text='Are you ready?' />
                </ComponentWrapper>
            </div>

            <SentenceHighlights className='h-screen' key={'quote'} length={4} highlights={['composing', 'parts', 'arranged', 'whole', 'added', 'taken']} bgImages={bgImages3} text="Tragedy is the mimesis of one action alone and whole, and it is necessary for its composing parts to be arranged in such a way that if you were to change or move one of them, the whole would be perturbed, because anything that can be added or taken without consequence is not a part of the whole." />

            <div
                key={3}

                className="w-full h-screen flex items-center justify-center">
                <WrittenChallenge title='Challenge' instructions={["In light of everything we've discussed so far, reflect on Aristotle's quote.", 'What do you think he means with his sentence?']} />
            </div>

        </div>
    )
}
