"use client"
import { useRef } from "react"
import Image from "next/image"
import { useState } from "react"
import localFont from "next/font/local"


const ClimateCrisis = localFont({
  src: "../../public/fonts/Climate_Crisis/ClimateCrisis-Regular-VariableFont_YEAR.ttf",
})



const Honk = localFont({
  src: "../../public/fonts/Honk/Honk-Regular-VariableFont_MORF,SHLN.ttf",
})

const Micro5 = localFont({
  src: "../../public/fonts/Micro_5/Micro5-Regular.ttf",
})

const Nabla = localFont({
  src: "../../public/fonts/Nabla/Nabla-Regular-VariableFont_EDPT,EHLT.ttf",
})

const ComicNeue = localFont({
  src: "../../public/fonts/Comic_Neue/ComicNeue-Regular.ttf",
})


function NoButton() {
  const [scale, setScale] = useState(1) // NO butonunun ölçeği

  const handleClick = () => {
    setScale(prev => prev * 0.9) // Her tıkta %10 küçül
  }

  return (
    <button
      onClick={handleClick}
      style={{ transform: `scale(${scale})` }}
      className='bg-gradient-to-b from-red-300 to-red-600 hover:from-red-400 hover:to-red-700 pixel-border rounded-full px-5 py-2 mt-5'
    >
      NO
    </button>
  )
}
export default function Home() {
  const confettiRef = useRef(null)

  const handleMouseMove = (event) => {
    if (!confettiRef.current) return

    for (let i = 0; i < 3; i++) {
      const container = confettiRef.current
      const confetti = document.createElement("div")
      confetti.classList.add("confetti")
      container.appendChild(confetti)

      const randomX = Math.floor(Math.random() * 30)
      const randomY = Math.floor(Math.random() * 30)
      console.log(event)
      confetti.style.position = "absolute"
      confetti.style.left = `${event.pageX + randomX}px`
      confetti.style.top = `${event.pageY + randomY}px`

      const randomColor = Math.floor(Math.random() * 256)
      confetti.style.backgroundColor = `rgb(255, 255, ${randomColor})`

      setTimeout(() => {
        if (confetti.parentNode) {
          container.removeChild(confetti)
        }
      }, 500)
    }
  }

  return (
    <div
      ref={confettiRef}
      className="w-full h-screen p-8 flex justify-center items-center relative"
      onMouseMove={handleMouseMove}
    >
       <main className="w-full md:w-[920px] bg-stone-800 pixel-border flex flex-col items-center scale-110">
        <div className='bg-[#FFF1E5] w-full md:h-40 flex flex-col md:flex-row justify-between items-center'>
          <div>
            <Image src='/gulnur.png' width='150' height='150' alt='' />
          </div>
          <div className='p-5'>
            {/* <span className={`${Honk.className} text-2xl`}>
              You're invited to:
            </span> */}
<h2
  className={`${ClimateCrisis.className} text-pink-300 uppercase text-4xl pixel-text leading-none text-center`}
>
  MISSED YOU<br />
  <span className="align-top inline-block">SO MUCH</span>
</h2>

          </div>
          <div>
            <Image
              src='/ben.png'
              width='140'
              height='140'
              alt=''
              className='m-3'
            />
          </div>
        </div>
        <div className='grid md:grid-cols-[1fr_2fr_1fr] gap-3 p-3'>
<div className='bg-[#f4ebd0] relative p-5 pixel-border flex flex-col justify-center items-center h-[150px]'>
<Image
  src='/atam.jpg'
  alt='atam'
  width={220}
  height={320}
  style={{ position: 'absolute', top: 0 }}
/>
</div>
          <div className='pixel-border bg-pink-500 p-5 flex flex-col items-center justify-between'>
            <h2
              className={`${ClimateCrisis.className} uppercase text-3xl pixel-text text-white`}
            >
              Meet me on 28th of october?
            </h2>
            
              <div className="flex gap-5">
    {/* YES Butonu */}
    <button className='bg-gradient-to-b from-green-300 to-green-600 hover:from-green-400 hover:to-green-700 pixel-border rounded-full px-10 py- 7mt-5'>
      YES
    </button>

    {/* NO Butonu */}
    <NoButton />
  </div>
              
            
          </div>
          <div className='relative flex justify-center items-center'>
            <Image
              src='/coraline.gif'
              width='150'
              height='150'
              alt='Strawberry Vanilla Cake'
              className='w-fit'
            />
            
          </div>

          
                    
            
          
      
     <div className='col-span-3 flex justify-center mt-3'>
 <div className='pixel-border bg-red-500 p-5 w-full max-w-[200px] flex justify-center items-center'>
    <Image
      src='/kill-me.gif'
      width='150'
      height='150'
      alt='RSVP'
      className='w-fit bounce cursor-pointer'
    />
  </div>
</div>
          
        
          
          
          
        </div>
      </main>
    </div>
  )
}
