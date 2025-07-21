"use client"
import React from 'react'
import Header from './reuseable-components/Header'
import { AnimatedTooltip } from './ui/animated-tooltip'
import {
  backendStackEn,
  backendStackEs,
  databaseStackEn,
  databaseStackEs,
  devOpsStackEn,
  devOpsStackEs,
  frontendStackEn,
  frontendStackEs,
  mobileStackEn,
  mobileStackEs
} from '@/data/stacks'
import SubHeader from './reuseable-components/SubHeader'
import { useParams } from "next/navigation";
import { useTranslations } from 'next-intl'

export default function Stack() {
  const { locale } = useParams();
  const t = useTranslations();
  return (
    <section id='stack'>
      <Header title={t('Stack.Header')} />

      <div className="flex flex-wrap justify-center gap-6 w-full py-8 px-4">
        {/* Backend Stack */}
        <div className="flex flex-col items-center justify-center w-full sm:w-[48%] lg:w-[30%] max-w-4xl p-4 border rounded-lg shadow-sm hover:scale-105 transition-transform duration-300">
          <SubHeader title="Backend" />
          <div className="flex flex-wrap items-center justify-center w-full">
            <AnimatedTooltip items={locale === 'en' ? backendStackEn : backendStackEs} />
          </div>
        </div>

        {/* Frontend Stack */}
        <div className="flex flex-col items-center justify-center w-full sm:w-[48%] lg:w-[30%] max-w-4xl p-4 border rounded-lg shadow-sm hover:scale-105 transition-transform duration-300">
          <SubHeader title="Frontend" />
          <div className="flex flex-wrap items-center justify-center w-full">
            <AnimatedTooltip items={locale === 'en' ? frontendStackEn : frontendStackEs} />
          </div>
        </div>

        {/* Database Stack */}
        <div className="flex flex-col items-center justify-center w-full sm:w-[48%] lg:w-[30%] max-w-4xl p-4 border rounded-lg shadow-sm hover:scale-105 transition-transform duration-300">
          <SubHeader title="Database" />
          <div className="flex flex-wrap items-center justify-center w-full">
            <AnimatedTooltip items={locale === 'en' ? databaseStackEn : databaseStackEs} />
          </div>
        </div>

        {/* DevOps Stack */}
        <div className="flex flex-col items-center justify-center w-full sm:w-[48%] lg:w-[30%] max-w-4xl p-4 border rounded-lg shadow-sm hover:scale-105 transition-transform duration-300">
          <SubHeader title="DevOps" />
          <div className="flex flex-wrap items-center justify-center w-full">
            <AnimatedTooltip items={locale === 'en' ? devOpsStackEn : devOpsStackEs} />
          </div>
        </div>

        {/* Mobile Stack */}
        <div className="flex flex-col items-center justify-center w-full sm:w-[48%] lg:w-[30%] max-w-4xl p-4 border rounded-lg shadow-sm hover:scale-105 transition-transform duration-300">
          <SubHeader title="Mobile" />
          <div className="flex flex-wrap items-center justify-center w-full">
            <AnimatedTooltip items={locale === 'en' ? mobileStackEn : mobileStackEs} />
          </div>
        </div>
      </div>
    </section>
  )
}
