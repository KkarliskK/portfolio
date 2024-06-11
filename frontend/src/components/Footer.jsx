
import logo from '../assets/logo.png';
import { FacebookLogo, GithubLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react";
import { FaDiscord } from 'react-icons/fa';
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

function Footer() {

  return (
    <>
        <div className={`flex bg-black w-full h-1/5 shadow-lg justify-between `}> {/****This is the whole footer****/}
          <div className={`flex justify-center items-center h-full`}> <img className={`rounded-full h-3/5 ml-32`} src={logo} /> </div>{/****Logo****/}
          <div className={`flex justify-center flex-col items-center h-full`}>
            <div className={`flex justify-center items-center w-full`}><IoCall className={`text-white m-3`} /><p className={`font-normal text-white`}><a href="tel:+37126633967">+371 26633967</a></p></div>
            <div className={`flex justify-center items-center`}><MdEmail className={`text-white m-3`} /><p className={`font-normal text-white`}><a href="mailto:karlisbirk@gmail.com">karlisbirk@gmail.com</a></p></div>
            <div className={`flex justify-center items-center`}><FaDiscord className={`text-white m-3`} /><p className={`font-normal text-white`}><a href='https://discordapp.com/users/359723957269692416'>Contact me in Discord</a></p></div>
          </div>
            <div className={`flex `}> {/****Social media container****/}
              <div className={`flex justify-center items-center`}>
                <a className={`m-3`} href='https://www.facebook.com/profile.php?id=100008563723697'><FacebookLogo size={32} color="#f7f7f7" /></a>
                <a className={`m-3`} href='https://www.linkedin.com/in/k%C4%81rlis-birkavs-83301a26b/'><LinkedinLogo size={32} color="#f7f7f7" /></a>
                <a className={`m-3`} href='https://www.instagram.com/kkarliskk/'><InstagramLogo size={32} color="#f7f7f7" /></a>
                <a className={`m-3`} href='https://github.com/KkarliskK/'><GithubLogo size={32} color="#f7f7f7" /></a>
              </div>
            </div>
        </div>
    </>
  )
}
export default Footer;