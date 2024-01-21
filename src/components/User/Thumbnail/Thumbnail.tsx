import thumnail from '../../../assets/thumnail_logo.png'
import happ_day1 from '../../../assets/happy_day_1.jpeg'
import happ_day2 from '../../../assets/happy_day_2.png'
import happ_day3 from '../../../assets/happy_day_3.jpg'
import arrow_left from '../../../assets/arrow_left.png'
import arrow_right from '../../../assets/arrow_right.png'
import { useEffect, useState } from 'react'
export default function Thumbnail() {
  const Images = [
    {
      src: happ_day1
    },
    {
      src: happ_day2
    },
    {
      src: happ_day3
    }
  ]
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((index) => (index + 1) % Images.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [Images.length])
  return (
    <div className='flex gap-12 py-4 w-full justify-around px-24 bg-[#DCF2F1] shadow-lg shadow-amber-100'>
      <div className='p-6 flex-1 text-center pr-[102px]'>
        <h1 className='mt-8 font-mono'>Happy your day!!!</h1>
        <p className='text-3xl mt-2 font-mono text-orange text-center'>We strong together</p>
        <img className='mx-auto w-[490px] h-[200px] object-cover' src={thumnail} alt='thumnail_logo' />
        <p className='text-2xl font-mono text-black mt-8'>Unity is strength</p>
      </div>
      <div className='slider relative'>
        <img
          className='w-[600px] h-[500px] object-cover shadow-lg shadow-indigo-500/40'
          src={Images[activeIndex].src}
          alt='slider'
        />
        <div className='actions'>
          <button
            className='absolute top-[211px] bg-slate-600 left-4'
            onClick={() => setActiveIndex((index) => (index + Images.length - 1) % Images.length)}
          >
            <img src={arrow_left} alt='arrow left' />
          </button>
          <button
            className='absolute top-[211px] right-4 bg-slate-600'
            onClick={() => setActiveIndex((index) => (index + 1) % Images.length)}
          >
            <img src={arrow_right} alt='arrow_right' />
          </button>
        </div>
      </div>
    </div>
  )
}
