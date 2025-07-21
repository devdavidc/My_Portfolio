"use client"
import React from 'react'
import Header from './reuseable-components/Header'
import { AnimatedTestimonials } from './ui/animated-testimonials'
import { projectsEn, projectsEs } from '@/data/projects'
import { useParams } from "next/navigation";
import { useTranslations } from 'next-intl'

export default function Testimonials() {
  const { locale } = useParams();
  const projects = locale === 'en' ? projectsEn : projectsEs;
  const t = useTranslations();

  return (
    <section id='testimonials'>
      <Header title={t('Projects.Header')} />
      <div>
        <AnimatedTestimonials projects={projects} autoplay/>
      </div>
    </section> 
  )
}
