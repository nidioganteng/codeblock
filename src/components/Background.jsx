import React from 'react'

const Background = () => {
  return (
    <section className='absolute inset-0'>
        <div className='relative h-screen overflow-y-hidden'>
            <div 
              className='absolute inset-0 w-full h-full -z-10 opacity-50 overflow-hidden'
              style={{ 
                backgroundImage: "url('bintang.png')", 
                backgroundSize: 'cover', 
                backgroundPosition: 'center' }}
            />
        </div>
    </section>
  )
}

export default Background