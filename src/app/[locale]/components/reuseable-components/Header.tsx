import React from 'react'
interface Headerprops{
  title: string;
}
export default function Header({title}: Headerprops) {
  return (
    <h1 className='text-3xl lg:text-4xl font-bold text-center py-5 bg-gradient-to-r bg-neutral-300 to-neutral-500 text-transparent bg-clip-text'>
      {title}
      </h1>
  )
}
