import { useState, useEffect } from 'react';

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
        <div className={`flex w-full h-1/5 `}> {/****This is the whole header****/}
            <div className={`flex justify-center items-center`}> {/***This is a single element for header*****/}
                <button className={`p-1 m-1 border-2 border-black rounded font-semibold`} onClick={change_theme}>{darkTheme ? 'Go light' : 'Go dark'}</button>
            </div>
            <div>
                <button className={`p-1 m-1 border-2 border-black rounded font-semibold`}>About Me</button>
            </div>
            <div>
                <button className={`p-1 m-1 border-2 border-black rounded font-semibold`}>My Projects</button>
            </div>
            <div>
                <button className={`p-1 m-1 border-2 border-black rounded font-semibold`}>Contact Me</button>
            </div>
        </div>
    </>
  )
}
export default Header;