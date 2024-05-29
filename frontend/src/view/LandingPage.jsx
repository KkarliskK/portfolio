import { CaretDoubleDown } from '@phosphor-icons/react';
import css from '../style/LandingPage.module.css'

function LandingPage() {
  return (
    <>
        <div className={`flex flex-row justify-center items-center w-full h-4/5 shadow-lg`}>
            <h1 className={`text-3xl font-semibold`}>Kārlis Birkavs</h1>
            <p>Student at VTDT. </p>
            <div className={`flex justify-center items-center w-full`}>{/******My latest projects*******/}
              <h1>My latest projects</h1>

            </div>
        </div>
        <div className={`flex w-full justify-center items-center h-1/6`}> {/****About Me small section***/}
          <div className={`${css.wave_animation}`}><CaretDoubleDown size={32} /></div>
            <button className={`bg-inherit border-0 m-5 p-2`}><h2 className={`text-2xl font-semibold`}>About me</h2></button>
          <div className={`${css.wave_animation}`}><CaretDoubleDown size={32} /></div>
        </div>
      
    </>
  )
}

export default LandingPage;
