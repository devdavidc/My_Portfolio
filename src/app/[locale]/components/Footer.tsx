
import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react'
import React from 'react'
import { getTranslations } from 'next-intl/server'

export default async function Footer() {
  const t = await getTranslations();
  return (
    <footer>
      <section id='footer'>
        
        <div className='flex flex-col md:flex-row justify-between items-center py-6 '>
          <p className='text-neutral-600 dark:text-neutral-400 mb-4 md:mb-0'>{t('Footer.description')}</p>
          <div className='flex space-x-4'>
            <a href="https://github.com/devdavidc" target="_blank" rel="noopener noreferrer" className='rounded-full bg-gray-100 dark:bg-neutral-800 w-10 h-10 flex items-center justify-center'>
              <IconBrandGithub className='h-6 w-6 text-black dark:text-neutral-400' />
            </a>

            <a href="https://www.linkedin.com/in/davidcarrenomacias/" target="_blank" rel="noopener noreferrer" className='rounded-full bg-gray-100 dark:bg-neutral-800 w-10 h-10 flex items-center justify-center'>
              <IconBrandLinkedin className='h-6 w-6 text-black dark:text-neutral-400' />
            </a>
          </div>
        </div>
      </section>
    </footer>
  )
}
