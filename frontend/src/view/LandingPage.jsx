import { CaretDoubleDown, CaretRight, Link } from '@phosphor-icons/react';
import css from '../style/LandingPage.module.css'
import Font, { Text } from 'react-font'
import { FaCss3Alt, FaHtml5, FaLaravel, FaPhp, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import About from '../view/About';
import Contact from '../view/Contact';
import Achievements from '../view/Certificate';
import Experiences from '../view/Experiences';
import Header from '../components/Header';



function LandingPage() {
  return (
    <>
    <Header />
        <div className={`flex flex-col relative justify-center items-center w-full h-full shadow-lg sm:h-4/5`}>
          <div className={`flex absolute top-28 w-full sm:flex-row flex-col h-full sm:top-10`}>
            <div className={`flex sm:w-2/6 sm:ml-20 p-4 flex-col justify-center`}>
              <Font family='Oswald'><h1 className={`text-5xl sm:text-9xl font-semibold`}>Kārlis Birkavs</h1> </Font>
              <div className={`flex items-center`}>
                <p className={`text-2xl sm:text-4xl m-1 sm:m-2`}> <FaHtml5 /></p>
                <p className={`text-2xl sm:text-4xl m-1 sm:m-2`}> <FaCss3Alt /></p>
                <p className={`text-2xl sm:text-4xl m-1 sm:m-2`}> <FaReact /></p>
                <p className={`text-2xl sm:text-4xl m-1 sm:m-2`}> <IoLogoJavascript /></p>
                <p className={`text-2xl sm:text-4xl m-1 sm:m-2`}> <FaLaravel /></p>
                <p className={`text-2xl sm:text-4xl m-1 sm:m-2`}> <FaPhp /> </p>
                <p className={`text-2xl sm:text-4xl m-1 sm:m-2`}> <RiTailwindCssFill /> </p>
              </div>
            </div>
            <div className={`flex justify-center sm:w-2/6 flex-col`}>
              <div className={`flex items-center`}><CaretRight size={28} /><Font family='Oswald'><p className={`text-xl`}>Mācās Vidzemes Tehnoloģiju un dizaina tehnikumā </p></Font></div>
              <div className={`flex items-center`}><CaretRight size={28} /><Font family='Oswald'><p className={`text-xl`}>Full-stack programmētājs </p></Font></div>
              <div className={`flex items-center`}><CaretRight size={28} /><Font family='Oswald'><p className={`text-xl`}>"If I am doing something, I am doing it on 100%" </p></Font></div>
            </div>
            <div className={`flex justify-center sm:w-2/6 h-3/5 sm:mr-16 sm:h-full `}> {/****Show my latest projects*****/}
              <div className={`flex flex-col w-full justify-center`}>{/*****Kreisa puse*****/}
                <div className={`flex justify-center items-center h-3/6 m-2 transition duration-300 ease-in-out hover:shadow-lg ${css.tickiffy_container}`}>
                  <h1 className={`sm:text-4xl text-xl font-semibold ${css.tickiffy_title}`}>Tickiffy</h1>
                  <p className={`w-4/5 ${css.tickiffy_description}`}>Biļešu veikala mājaslapa! Manuprāt, samērā sarežģīts projekts, ņemot vērā cik daudz back-end darbs tika ieguldīts. <a className={`text-indigo-900 font-semibold`} href='https://github.com/KkarliskK/tickiffy'>Github lapa</a></p>
                  <div className={`absolute bottom-0 flex justify-center items-center w-full p-1 ${css.languages_container}`}>
                    <div className={`flex ${css.html}`}><p className={`sm:text-2xl text-xl sm:m-1`}><FaHtml5 /></p></div>
                    <div className={`flex ${css.css}`}><p className={`sm:text-2xl text-xl sm:m-1`}><FaCss3Alt /></p></div>
                    <div className={`flex ${css.js}`}><p className={`sm:text-2xl text-xl sm:m-1`}><IoLogoJavascript /></p></div>
                    <div className={`flex ${css.laravel}`}><p className={`sm:text-2xl text-xl sm:m-1`}><FaLaravel /></p></div>
                    <div className={`flex ${css.react}`}><p className={`sm:text-2xl text-xl sm:m-1`}><FaReact /></p></div>
                </div>
                </div>
              </div>
              <div className={`flex flex-col justify-center w-full`}>{/*****Laba puse*****/}
                <div className={`flex flex h-2/6 m-2 transition duration-300 ease-in-out hover:shadow-xl ${css.memorius_container}`}>
                  <h1 className={`sm:text-4xl text-xl font-semibold ${css.memorius_title}`}>Memorius</h1>
                  <p className={`w-4/5 ${css.memorius_description}`}>Mans pirmais spēles projekts! Kāršu minēšanas spēle. <a className={`text-indigo-900 font-semibold`} href='https://github.com/KkarliskK/memorius'>Github lapa</a></p>
                  <div className={`absolute bottom-0 flex justify-center items-center w-full p-1  ${css.languages_container}`}>
                    <div className={`flex ${css.html}`}><p className={`sm:text-2xl text-xl sm:m-1`}><FaHtml5 /></p></div>
                    <div className={`flex ${css.css}`}><p className={`sm:text-2xl text-xl sm:m-1`}><FaCss3Alt /></p></div>
                    <div className={`flex ${css.js}`}><p className={`sm:text-2xl text-xl sm:m-1`}><IoLogoJavascript /></p></div>
                    <div className={`flex ${css.laravel}`}><p className={`sm:text-2xl text-xl sm:m-1`}><FaLaravel /></p></div>
                    <div className={`flex ${css.react}`}><p className={`sm:text-2xl text-xl sm:m-1`}><FaReact /></p></div>
                    <div className={`flex ${css.tailwind}`}><p className={`sm:text-2xl text-xl sm:m-1`}><RiTailwindCssFill /></p></div>
                  </div>
                </div>
                <div className={`flex flex h-2/6 m-2 transition duration-300 ease-in-out hover:shadow-xl ${css.coffe_container}`}>
                  <h1 className={`sm:text-4xl text-xl font-semibold  ${css.coffe_title}`}>Coffee shop</h1>
                  <p className={`w-4/5 ${css.coffe_description}`}>Coffee time - front-end projekts. <a className={`text-indigo-900 font-semibold`} href='https://github.com/KkarliskK/coffe-shop'>Github lapa</a> <a className={`text-indigo-900 font-semibold`} href="https://coffe-shop-brown.vercel.app/">Tīmekļavietnes skats</a></p>
                  <div className={`absolute bottom-0 flex justify-center items-center w-full p-1 ${css.languages_container}`}>
                    <div className={`flex ${css.html}`}><p className={`sm:text-2xl text-xl sm:m-1`}><FaHtml5 /></p></div>
                    <div className={`flex ${css.css}`}><p className={`sm:text-2xl text-xl sm:m-1`}><FaCss3Alt /></p></div>
                    <div className={`flex ${css.react}`}><p className={`sm:text-2xl text-xl sm:m-1`}><FaReact /></p></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`flex w-full justify-center items-center h-1/6 `}> {/****About Me small section***/}
          <div className={`${css.wave_animation}`}><CaretDoubleDown size={32} /></div>
            <button className={`bg-inherit border-0 m-5 p-2`}><h2 className={`text-2xl font-semibold`}>Par mani</h2></button>
          <div className={`${css.wave_animation}`}><CaretDoubleDown size={32} /></div>
        </div>

        <div id="about">
          <About />
        </div>

        {/* <div id="achievements">
          <Achievements />
        </div>

        <div id="experiences">
          <Experiences />
        </div> */}

        <div id="contact">
          <Contact />
        </div>

    </>
  )
}

export default LandingPage;
