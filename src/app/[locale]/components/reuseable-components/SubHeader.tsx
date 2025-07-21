import React from 'react'
interface Headerprops{
  title: string;
}
export default function SubHeader({title}: Headerprops) {
  return (
    <h2 className='text-2xl lg:text-3xl font-bold text-center py-5 bg-gradient-to-r bg-indigo-300 to-purple-500 text-transparent bg-clip-text'>
      {title}
      </h2>
  )
}
