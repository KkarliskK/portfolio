import './style/App.css'
import Error404 from './view/Error404'
import LandingPage from './view/LandingPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import emailjs from 'emailjs-com';


function App() {

// Initialize emailjs with your public key
emailjs.init('9e7qEU_VJ7bIdw9qJ');

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}/>
          <Route path='*' element={<Error404 />} />
        </Routes>
      <Footer />
      </BrowserRouter>
    </>
  )
}

export default App