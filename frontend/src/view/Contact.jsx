import emailjs from 'emailjs-com';
import React, { useRef, useState } from 'react';
import Confetti from 'react-dom-confetti';
import css from '../style/Contact.module.css';
import { FacebookLogo, GithubLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react";
import { MdEmail } from "react-icons/md";

const config = {
  angle: 90,
  spread: 45,
  startVelocity: 45,
  elementCount: 50,
  decay: 0.9,
  colors: ['#a864fd', '#29cdff', '#78ff44', '#ff718d', '#fdff6a']
};

function Contact() {
    const form = useRef();
    const [message, setMessage] = useState(null);
    const [messageType, setMessageType] = useState(null);
    const [showConfetti, setShowConfetti] = useState(false);
    const [slideOut, setSlideOut] = useState(false);

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_8i87ncr', 'template_twdjpmf', form.current)
      .then(
        () => {
          console.log('SUCCESS!');
          setMessage('🎉Email successfully sent!🎉');
          setMessageType('success');
          setShowConfetti(true);
          setTimeout(() => setShowConfetti(false), 2000);
          setTimeout(() => setMessageType(null), 5000);
          setTimeout(() => setSlideOut(true), 4500);

          form.current.reset();
          
        },
        (error) => {
          console.log('FAILED...', error.text);
          setMessage('Something went wrong, please try again.');
          setMessageType('error');
        },
      );
    };

    return (
        <>
            <div className={`flex flex-col w-full h-4/5`}>
                <div class="grid sm:grid-cols-2 items-center gap-16 p-8 mx-auto max-w-4xl bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md text-[#333] font-[sans-serif]">
                    <div>
                        <h1 class="text-3xl font-extrabold">Contact Me!</h1>
                        <p class="text-sm text-gray-400 mt-3">Have some big idea or project to develop and need help? Then reach out I'd love to hear about your project and provide help.</p>
                        <div class="mt-12">
                            <h2 class="text-lg font-extrabold">Email</h2>
                            <ul class="mt-3">
                                <li class="flex items-center">
                                    <div class="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                        <MdEmail size={32} color='#007bff' />
                                    </div>
                                    <a href="mailto:karlisbirk@gmail.com" class="text-[#007bff] text-sm ml-3">
                                        <small class="block">Mail</small>
                                        <strong>karlisbirk@gmail.com</strong>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div class="mt-12">
                            <h2 class="text-lg font-extrabold">Social links</h2>
                                <ul class="flex mt-3 space-x-4">
                                    <li class="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                        <a href="https://www.facebook.com/profile.php?id=100008563723697">
                                            <FacebookLogo size={32} color='#007bff' />
                                        </a>
                                    </li>
                                    <li class="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                        <a href="https://www.linkedin.com/in/k%C4%81rlis-birkavs-83301a26b/">
                                            <LinkedinLogo size={32} color='#007bff' />
                                        </a>
                                    </li>
                                    <li class="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                        <a href="https://www.instagram.com/kkarliskk/">
                                            <InstagramLogo size={32} color="#007bff" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <form className={`ml-auto space-y-4`} ref={form} onSubmit={sendEmail}>
                            <input 
                                className={`m-2 w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff] `} 
                                type="text" 
                                name="user_name"
                                id="user_email"
                                placeholder="First name"
                            />
                            <input 
                                className={`m-2 w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff] `} 
                                type="email" 
                                name="user_email"
                                id="user_email"
                                placeholder="Email" 
                            />
                            <input 
                                className={`m-2 w-full h-32 rounded-md px-4 border text-sm pt-2.5 outline-[#007bff]`} 
                                type="text" 
                                name="message"
                                id='message'
                                placeholder="Message ..." 
                            />
                            <button className={`text-white bg-[#007bff] hover:bg-blue-600 font-semibold rounded-md text-sm px-4 py-2.5 w-full`} type="submit">Submit</button>
                            {message && <div className={`m-2 w-full p-1 rounded flex justify-center items-center text-lg font-semibold transition-opacity duration-500 px-4 border  ${slideOut ? css['slide-out'] : ''} ${messageType === 'success' ? css['bg-green-500'] + ' ' + css['slide-in'] : css['bg-red-500'] + ' ' + css['slide-in']}`}>{message}</div>}
                            <div className="confetti-container">
                                <Confetti active={showConfetti} config={config} />
                            </div>
                        </form>
                </div>
            </div>
        </>
    )
}

export default Contact;