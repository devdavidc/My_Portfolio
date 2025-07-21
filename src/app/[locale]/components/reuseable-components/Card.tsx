import React from 'react'
import { CardBody, CardContainer, CardItem } from "@/src/app/components/ui/3d-card";
import { SkillCard } from '@/data/skills';


export default function Card({ skillCard }: { skillCard: SkillCard }) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {skillCard.title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {skillCard.content.map((skill, index) => (
            <div key={index} className="mb-4">
              <div className="flex items-center">
                <span className="font-semibold">{skill.title}</span>
              </div>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                {skill.description}
              </p>
              {skill.level && (
                <span className="text-xs text-neutral-400">Level: {skill.level}</span>
              )}
            </div>
          ))}
        </CardItem>
        
      </CardBody>
    </CardContainer>
  )
}
