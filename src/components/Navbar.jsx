import React from 'react'

function Navbar() {
    return (
        <nav className=' sticky
        h-16
        w-full
        bg-slate-600
        flex
        justify-between
        px-4
        items-center
        top-0
        z-10
        '>
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
            <div>
                <button className='
                w-5
                '><img src="/exit.svg" alt="" srcset="" /></button>
            </div>
        </nav>
    )
}

export default Navbar
