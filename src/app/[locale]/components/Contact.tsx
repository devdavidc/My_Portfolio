import { cn } from '@/lib/utils'
import React from 'react'
import { getTranslations } from 'next-intl/server'

export default async function Contact() {
  const t = await getTranslations();
  return (
    <section id='contact'>
      <div className="relative flex flex-col items-center justify-center px-4 py-24 bg-white dark:bg-black">
        {/* Fondo punteado */}
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:20px_20px]",
            "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
            "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]"
          )}
        />
        {/* Gradiente radial de desenfoque */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>

        {/* Título */}
        <h1 className="relative z-20 text-4xl md:text-6xl font-bold bg-gradient-to-r from-indigo-300 to-purple-500 text-transparent bg-clip-text mb-4">
          {t('Contact.Header')}
        </h1>
        <p className="relative z-20 text-center text-neutral-600 dark:text-neutral-300 max-w-2xl mb-10">
          {t('Contact.description')}
        </p>

        {/* Formulario */}
        <form
          action="https://formspree.io/f/mgvezevg"
          method="post"
          className="relative z-20 w-full max-w-xl space-y-6"
        >
          <div className="flex flex-col">
            <label htmlFor="name" className="sr-only">
              {t('Contact.form.name')}
            </label>
            <input
              type="text"
              name="Name"
              id="name"
              placeholder={t('Contact.form.name')}
              required
              className="px-4 py-3 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-black dark:text-white placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="sr-only">
              {t('Contact.form.email')}
            </label>
            <input
              type="email"
              name="Email"
              id="email"
              placeholder={t('Contact.form.email')}
              required
              className="px-4 py-3 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-black dark:text-white placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="message" className="sr-only">
              {t('Contact.form.message')}
            </label>
            <textarea
              name="message"
              id="message"
              placeholder={t('Contact.form.message')}
              required
              rows={6}
              className="px-4 py-3 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-black dark:text-white placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 resize-none"
            />
          </div>

          {/* Botón */}
          <div className="flex justify-center items-center">
            <button
            type="submit"
            className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-neutral-900"
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-2 text-sm font-medium text-white backdrop-blur-3xl">
              {t('Contact.form.submit')}
            </span>
          </button>
          </div>
        </form>
      </div>
    </section>
  )
}
