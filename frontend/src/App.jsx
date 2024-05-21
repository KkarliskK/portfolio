import './style/App.css'
import Error404 from './view/Error404'
import LandingPage from './view/LandingPage'
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<LandingPage />}/>
          <Route path='*' element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App