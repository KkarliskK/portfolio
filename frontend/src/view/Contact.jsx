function Contact() {
    return (
        <>
            <div className={`flex flex-col w-full h-4/5`}>
                <div className={`flex w-full justify-center items-center`}><h1 className={`text-4xl font-semibold`}>Contact me!</h1></div>
                <div className={`flex justify-center items-center w-full h-full`}>
                    <form className={`flex flex-col justify-center items-center w-2/5`}>
                        <input 
                            className={`m-2 w-3/5 p-1`} 
                            type="text" 
                            placeholder="First name"
                        />
                        <input 
                            className={`m-2 w-3/5 p-1`}
                            type="text" 
                            placeholder="Last name" 
                        />
                        <input 
                            className={`m-2 w-3/5 p-1`}
                            type="email" 
                            placeholder="Email" 
                        />
                        <input 
                            className={`m-2 w-3/5 p-1`}
                            type="text" 
                            placeholder="Subject" 
                        />
                        <textarea placeholder="Your message" required></textarea>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact;
