import { CaretDoubleDown, CaretRight } from '@phosphor-icons/react';
import css from '../style/LandingPage.module.css'
import Font, { Text } from 'react-font'

function LandingPage() {
  return (
    <>
        <div className={`flex flex-col justify-center items-center w-full h-4/5 shadow-lg `}>
          <div className={`${css.circle}`}></div>
          <div className={`flex w-full`}>
            <div className={`flex w-2/6 ml-20 p-4`}>
              <Font family='Oswald'><h1 className={`text-9xl font-semibold`}>Kārlis Birkavs</h1> </Font>
            </div>
            <div className={`flex justify-center w-2/6 flex-col`}>
              <div className={`flex items-center`}><CaretRight size={28} /><Font family='Oswald'><p className={`text-xl`}>Student at VTDT </p></Font></div>
              <div className={`flex items-center`}><CaretRight size={28} /><Font family='Oswald'><p className={`text-xl`}>Front end developer </p></Font></div>
            </div>
            <div className={`flex w-2/6 flex-col`}> {/****Show my latest projects*****/}
              <div></div>
            </div>
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
