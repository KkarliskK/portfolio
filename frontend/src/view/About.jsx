import { useEffect, useState } from 'react';
import css from '../style/LandingPage.module.css'
import Font, { Text } from 'react-font'

function About() {
  const [firstVisible, setFirstVisible] = useState(false);
  const [secondVisible, setSecondVisible] = useState(false);
  const [thirdVisible, setThirdVisible] = useState(false);

  const listenToScroll = () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    
    // Set the heights at which each div will start to show
    let firstHeightToShowFrom = 550;
    let secondHeightToShowFrom = 750;
    let thirdHeightToShowFrom = 850;
    
    if (winScroll > firstHeightToShowFrom) {
      setFirstVisible(true);
    } else {
      setFirstVisible(false);
    }
    
    if (winScroll > secondHeightToShowFrom) {
      setSecondVisible(true);
    } else {
      setSecondVisible(false);
    }
    
    if (winScroll > thirdHeightToShowFrom) {
      setThirdVisible(true);
    } else {
      setThirdVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', listenToScroll);
    return () => window.removeEventListener('scroll', listenToScroll);
  }, []);

  return (
      <>
        <div className={`flex sm:flex-row flex-col justify-center items-center w-full sm:h-full min-h-full sm:mb-2 mb:36`}>
          <div className={`flex sm:w-2/6 h-3/5 p-4 ${firstVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
            <div className={`flex flex-col w-full`}>
              <div className={`flex justify-center items-center h-full m-2 transition duration-300 ease-in-out hover:shadow-lg ${css.about_container}`}>
                <h1 className={`text-4xl font-semibold text-center ${css.tickiffy_title}`}>Lives at Latvia, Cēsis</h1>
                <p className={`w-4/5 ${css.tickiffy_description}`}>A beautiful country and city. Lots of historical places to visit. To read more: <a href="https://www.cesis.lv/lv/" className={`text-indigo-900 font-semibold`}>Visit Cesis</a> </p>
              </div>
            </div>
            <div className={`flex flex-col w-full`}>{/*****Laba puse*****/}
              <div className={`flex justify-center items-center h-full m-2 transition duration-300 ease-in-out hover:shadow-xl ${css.memorius_container}`}>
                <h1 className={`text-4xl font-semibold text-center `}>19 Years old</h1>
              </div>
              <div className={`flex justify-center items-center p-2 h-full m-2 transition duration-300 ease-in-out hover:shadow-xl ${css.coffe_container}`}>
                <h1 className={`text-4xl font-semibold text-center`}>Student at VTDT</h1>
              </div>
            </div>
          </div>
          <div className={`flex flex-col justify-center items-center h-full sm:w-4/12 p-4 ${secondVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
            <h1 className={`text-4xl font-semibold mb-32`}>About Me</h1>
            <p className={`text-center font-medium text-lg`}>Hi, I am Kārlis and I live at Latvia, Cēsis. I am 19 years old and still studying at VTDT in 3rd course. 
              I like to play basketball in my free time, also I my hobby is to work around cars.
              In fact my future goal is to learn to re-program car computers.
              
            </p>
          </div>
          <div className={`flex flex-col items-center justify-center sm:w-4/12 p-4 h-full ${thirdVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
            <div className={`flex justify-center items-center h-1/4 w-full m-2 overflow-hidden`}>
              <img src='https://www.coe.int/documents/11071445/0/0/0080ded5-2ab1-dedf-9ad5-a86c2b575ecc' />
            </div>
            <div className={`flex justify-center items-center h-1/4 w-full m-2 overflow-hidden`}>
              <img src='https://static.wixstatic.com/media/cfe1cd_cfc5769db6f7499fb95dc02a4e85d7cd~mv2.jpg/v1/fit/w_2500,h_1330,al_c/cfe1cd_cfc5769db6f7499fb95dc02a4e85d7cd~mv2.jpg' />
            </div>
            <div className={`flex justify-center items-center h-1/4 w-full m-2 overflow-hidden`}>
              <img src='https://static.lsm.lv/media/2020/09/large/1/dybv.jpg' />
            </div>
          </div>
        </div>
      </>
    )
}
export default About;