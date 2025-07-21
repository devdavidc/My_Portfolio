import React from 'react'
import Header from './reuseable-components/Header'
import Card from './reuseable-components/Card'
import { skills } from '@/data/skills'



export default function Skills() {
  return (
    <section id='skills' className=''>
    
      <Header title="Skills" />
      <div className="grid grid-cols-2 gap-4">
        {skills.map((skillCard) => (
          
            <Card key={skillCard.id} skillCard={skillCard} />
          
        ))}
      </div>
    </section>
  )
}