import React from 'react'
import Header from './reuseable-components/Header'
import Image from 'next/image'
import { getTranslations } from 'next-intl/server';

export default async function About() {
  const t = await getTranslations();
  return (
    <section id='about' className='my-20 mt-40'>
      <Header title={t("About.Header")} />
      <div className='grid gap-4 items-center md:[grid-template-columns:1fr_1.5fr] lg:[grid-template-columns:1fr_2fr]'>
        <Image
          src="/images/about-image.png"
          alt="about-image"
          width={500}
          height={500}
          className='w-full h-full object-cover rounded-lg' 
          />
        <div className='md:text-xl text-neutral-600 dark:text-neutral-300'>
          <p className='mb-3'>
            {t("About.first_paragraph")}
          </p>
          <p className='mb-3'>
            {t("About.second_paragraph")}
          </p>
          <p className='mb-3'>
            {t("About.third_paragraph")}
          </p>
        </div>
      </div>
    </section>
  )
}
