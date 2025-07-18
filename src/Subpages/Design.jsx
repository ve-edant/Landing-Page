import React from 'react'

const Design = () => {
  return (
    <div className='w-full md:w-1/2 flex justify-center items-centere'>
    <div className='w-64 h-64 border-2 border-dashed border-gray-400 rounded-full flex item-center justify-center'></div>
    <span className='text-gray-400'>[Graphics]</span>
  <div className='w-full md:w-1/2 flex flex-col gap-4'>
  <h2 className='text-pink-400 font-bold tex-lg'>DESIGN</h2>
  <nav className='text-gray-600 text-sm flex gap-2 item-center'>
  <span className='text-pink-600 cursor-pointer hover:underline'>Home</span>
  <span>.</span>
  <span>Service</span>
  <span>.</span>
  <span>Desgin</span>
  </nav>
  <h1 className='text-4xl md:text-5xl font-bold text-black leading-tight mt-6'>
    We create desgins to <br/> augment User Experience<br/> We analyze human<br/> behavioral patterns and<br/> blend them with data<br/> science and information architecture to design a unique 'blended <br/> experience.
    </h1>
    <h2 className='text-pink-500 font-bold  text-4xl'>What Do We Serve</h2>
    <p className='text-3xl sm:text:5xl font-bold text-black leading-tight mt-6'>We help you translate<br/> a simple idea into an exotic<br/> Digital design transformation visions.<br/> </p>
    <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 text-[#0a0a0a] text-base font-semibold'>
    <ul className='space-y-3'>
    <li className='border-b border-dotted border-gray-400 pb-1'>UI Design</li>
    <li className='border-b border-dotted border-gray-400 pb-1'>UI Development</li>
    <li className='border-b border-dotted border-gray-400 pb-1'>UI Guidelines</li>
    <li className='border-b border-dotted border-gray-400 pb-1'>Design System</li>
    </ul> 
    <ul className='space-y-3'>
    <li className='border-b border-dotted border-gray-400 pb-1'>Animation</li>
    <li className='border-b border-dotted border-gray-400 pb-1'>User Research</li>
    <li className='border-b border-dotted border-gray-400 pb-1'>UX Consultancy</li>
    <li className='border-b border-dotted border-gray-400 pb-1'>UX Writing</li>
    </ul>
  <ul className='space-y-3'>
    <li className='border-b border-dotted border-gray-400 pb-1'>Animation</li>
    <li className='border-b border-dotted border-gray-400 pb-1'>Iconography</li>
    <li className='border-b border-dotted border-gray-400 pb-1'>Illustration</li>
  </ul>

    </div>
  </div>  
    </div>
      
  )
}

export default Design