import React from 'react'
import { cn } from "@/lib/utils";
import { TextGenerateEffect } from './ui/text-generate-effect'
import { Spotlight } from './ui/Spotlight'
import { getTranslations } from 'next-intl/server';

export default async function Hero() {
  const t = await getTranslations();

  return (
    <section id='home'>
       <Spotlight fill='white' className='top-10 left-10' />
        <Spotlight fill='white' className='-top-60 -left-50' />
        <Spotlight fill='indigo' className='-top-20 -left-20' />
        
      <div className='overflow-hidden relative h-[90vh] '>
        <div className="relative flex h-[50rem] w-full items-center justify-center bg-white dark:bg-black">
          <div
            className={cn(
              "absolute inset-0",
              "[background-size:40px_40px]",
              "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
              "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
            )}
          />
          {/* Radial gradient for the container to give a faded look */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
          <div className='z-50'>
            <h2 className='text-neutral-600 dark:text-neutral-300 uppercase text-xl text-center'>{t("Hero.Header")}</h2>
            <TextGenerateEffect words={t("Hero.title")} />
            <p className='text-neutral-600 dark:text-neutral-300 text-center mt-4 lg:text-xl md:trackin-wider'>
                {t("Hero.subtitle")}
            </p>
            <div className='flex justify-center my-6 gap-5 items-center'>
              <a
                href="#about" className='px-8 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-white'>
                {t("Hero.button1")}
              </a>
              <a href="/public/CV_David_Carreño_2025.pdf" download>
                <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                    {t("Hero.button2")}
                  </span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
