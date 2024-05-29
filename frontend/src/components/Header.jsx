import { useState, useEffect } from 'react';
import logo from '../assets/logo.png';
import { FacebookLogo, GithubLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react";

function Header() {
    const [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    
    document.body.classList.toggle('dark', darkTheme);
  }, [darkTheme]); 

  function change_theme() {
    setDarkTheme(!darkTheme); 
  }

  return (
    <>
        <div className={`flex bg-black w-full h-16 shadow-lg justify-between `}> {/****This is the whole header****/}
          <div className={``}> <img className={`rounded-full h-full ml-40`} src={logo} /> </div>{/****Logo****/}
            <div className={`flex `}> {/****Button container*******/}
              <div className={`flex justify-center items-center`}> {/***This is a single element for header*****/}
                  <button className={`p-1 m-1 border-2 border-black rounded font-normal text-white`} onClick={change_theme}>{darkTheme ? 'Go light' : 'Go dark'}</button>
              </div>
              <div className={`flex justify-center items-center`}>
                  <button className={`p-1 m-1 border-2 border-black rounded font-normal text-white`}>About Me</button>
              </div>
              <div className={`flex justify-center items-center`}>
                  <button className={`p-1 m-1 border-2 border-black rounded font-normal text-white`}>My Projects</button>
              </div>
              <div className={`flex justify-center items-center`}>
                  <button className={`p-1 m-1 border-2 border-black rounded font-normal text-white`}>Contact Me</button>
              </div>
            </div>
            <div className={`flex mr-36`}> {/****Social media container****/}
              <div className={`flex justify-center items-center`}>
                <a className={`m-3`} href='https://www.facebook.com/profile.php?id=100008563723697'><FacebookLogo size={38} color="#f7f7f7" /></a>
                <a className={`m-3`} href='https://www.linkedin.com/in/k%C4%81rlis-birkavs-83301a26b/'><LinkedinLogo size={38} color="#f7f7f7" /></a>
                <a className={`m-3`} href='https://www.instagram.com/kkarliskk/'><InstagramLogo size={38} color="#f7f7f7" /></a>
                <a className={`m-3`} href='https://github.com/KkarliskK/'><GithubLogo size={38} color="#f7f7f7" /></a>
              </div>
            </div>
        </div>
    </>
  )
}
export default Header;