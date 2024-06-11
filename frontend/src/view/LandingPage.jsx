import { CaretDoubleDown, CaretRight, Link } from '@phosphor-icons/react';
import css from '../style/LandingPage.module.css'
import Font, { Text } from 'react-font'
import { FaCss3Alt, FaHtml5, FaLaravel, FaPhp, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import About from '../view/About';
import Contact from '../view/Contact';


function LandingPage() {
  return (
    <>
        <div className={`flex flex-col justify-center items-center w-full h-4/5 shadow-lg `}>
          <div className={`${css.circle}`}></div>
          <div className={`flex w-full`}>
            <div className={`flex w-2/6 ml-20 p-4 flex-col`}>
              <Font family='Oswald'><h1 className={`text-9xl font-semibold`}>Kārlis Birkavs</h1> </Font>
              <div className={`flex items-center `}>
                <p className={`text-4xl m-2`}> <FaHtml5 /></p>
                <p className={`text-4xl m-2`}> <FaCss3Alt /></p>
                <p className={`text-4xl m-2`}> <FaReact /></p>
                <p className={`text-4xl m-2`}> <IoLogoJavascript /></p>
                <p className={`text-4xl m-2`}> <FaLaravel /></p>
                <p className={`text-4xl m-2`}> <FaPhp /> </p>
                <p className={`text-4xl m-2`}> <RiTailwindCssFill /> </p>
              </div>
            </div>
            <div className={`flex justify-center w-2/6 flex-col`}>
              <div className={`flex items-center`}><CaretRight size={28} /><Font family='Oswald'><p className={`text-xl`}>Student at Vidzemes Tehnoloģiju un Dizaina Tehnikums </p></Font></div>
              <div className={`flex items-center`}><CaretRight size={28} /><Font family='Oswald'><p className={`text-xl`}>Front end developer </p></Font></div>
            </div>
            <div className={`flex w-2/6 h-full mr-16`}> {/****Show my latest projects*****/}
              <div className={`flex flex-col w-full`}>{/*****Kreisa puse*****/}
                <div className={`flex justify-center items-center h-full m-2 transition duration-300 ease-in-out hover:shadow-lg ${css.tickiffy_container}`}>
                  <h1 className={`text-4xl font-semibold ${css.tickiffy_title}`}>Tickiffy</h1>
                  <p className={`w-4/5 ${css.tickiffy_description}`}>Ticket shop! In my opinion, one of the hardest projects, because all of that backend that was put in to it. <a className={`text-indigo-900 font-semibold`} href='https://github.com/KkarliskK/tickiffy'>Github page</a></p>
                  <div className={`absolute bottom-0 flex justify-center items-center w-full p-1 ${css.languages_container}`}>
                    <div className={`flex ${css.html}`}><p className={`text-2xl m-1`}><FaHtml5 /></p></div>
                    <div className={`flex ${css.css}`}><p className={`text-2xl m-1`}><FaCss3Alt /></p></div>
                    <div className={`flex ${css.js}`}><p className={`text-2xl m-1`}><IoLogoJavascript /></p></div>
                    <div className={`flex ${css.laravel}`}><p className={`text-2xl m-1`}><FaLaravel /></p></div>
                    <div className={`flex ${css.react}`}><p className={`text-2xl m-1`}><FaReact /></p></div>
                </div>
                </div>
              </div>
              <div className={`flex flex-col w-full`}>{/*****Laba puse*****/}
                <div className={`flex flex h-full m-2 transition duration-300 ease-in-out hover:shadow-xl ${css.memorius_container}`}>
                  <h1 className={`text-4xl font-semibold ${css.memorius_title}`}>Memorius</h1>
                  <p className={`w-4/5 ${css.memorius_description}`}>My first game project! A simple match 2 card game! <a className={`text-indigo-900 font-semibold`} href='https://github.com/KkarliskK/memorius'>Github page</a></p>
                  <div className={`absolute bottom-0 flex justify-center items-center w-full p-1 ${css.languages_container}`}>
                    <div className={`flex ${css.html}`}><p className={`text-2xl m-1`}><FaHtml5 /></p></div>
                    <div className={`flex ${css.css}`}><p className={`text-2xl m-1`}><FaCss3Alt /></p></div>
                    <div className={`flex ${css.js}`}><p className={`text-2xl m-1`}><IoLogoJavascript /></p></div>
                    <div className={`flex ${css.laravel}`}><p className={`text-2xl m-1`}><FaLaravel /></p></div>
                    <div className={`flex ${css.react}`}><p className={`text-2xl m-1`}><FaReact /></p></div>
                    <div className={`flex ${css.tailwind}`}><p className={`text-2xl m-1`}><RiTailwindCssFill /></p></div>
                  </div>
                </div>
                <div className={`flex flex h-full m-2 transition duration-300 ease-in-out hover:shadow-xl ${css.coffe_container}`}>
                  <h1 className={`text-4xl font-semibold  ${css.coffe_title}`}>Coffee shop</h1>
                  <p className={`w-4/5 ${css.coffe_description}`}>Coffee time - a front end project. <a className={`text-indigo-900 font-semibold`} href='https://github.com/KkarliskK/coffe-shop'>Github page</a></p>
                  <div className={`absolute bottom-0 flex justify-center items-center w-full p-1 ${css.languages_container}`}>
                    <div className={`flex ${css.html}`}><p className={`text-2xl m-1`}><FaHtml5 /></p></div>
                    <div className={`flex ${css.css}`}><p className={`text-2xl m-1`}><FaCss3Alt /></p></div>
                    <div className={`flex ${css.react}`}><p className={`text-2xl m-1`}><FaReact /></p></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`flex w-full justify-center items-center h-1/6`}> {/****About Me small section***/}
          <div className={`${css.wave_animation}`}><CaretDoubleDown size={32} /></div>
            <button className={`bg-inherit border-0 m-5 p-2`}><h2 className={`text-2xl font-semibold`}>About me</h2></button>
          <div className={`${css.wave_animation}`}><CaretDoubleDown size={32} /></div>
        </div>

        <About />
        <Contact />
    </>
  )
}

export default LandingPage;
