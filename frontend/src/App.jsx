import './style/App.css'
import Error404 from './view/Error404'
import LandingPage from './view/LandingPage'
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
      <Header />
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