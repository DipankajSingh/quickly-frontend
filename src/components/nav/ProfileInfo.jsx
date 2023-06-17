import React from 'react'

export default function ProfileInfo() {
    return (
        <div className='
            flex
            gap-2
            '>
            <p className=' 
                rounded-full
                h-11 w-11
                grid
                place-items-center 
              bg-lime-600
              text-3xl
              font-extrabold
              font-mono
              '>S</p>

            <div className='
                flex
                flex-col
                '>
                <span className='
                    text-xl
                    capitalize
                    font-serif
                    '>Senorita</span>
                <span className='
                    text-xs
                    font-mono
                    '>Online</span>
            </div>
        </div>
    )
}
