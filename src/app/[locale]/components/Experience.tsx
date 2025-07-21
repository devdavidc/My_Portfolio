
"use client";

import React from 'react'
import Header from './reuseable-components/Header'
import { Timeline } from './ui/timeline'
import { useTranslations } from 'next-intl';
import { ExperienceDataEs, ExperienceDataEn } from '@/data/experience';
import { useParams } from "next/navigation";

export default function Experience() {
  const t = useTranslations('Experience');
  const { locale } = useParams();

  const ExperienceData = locale === 'es' ? ExperienceDataEs : ExperienceDataEn;

  return (
    <section id='experience'>
      <Header title={t("Header")} />
      <Timeline data={ExperienceData} />
    </section>
  )
}
