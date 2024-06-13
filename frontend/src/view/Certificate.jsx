import { useEffect, useState } from 'react';
import Font, { Text } from 'react-font'
import certificate from '../assets/certif.png';
import wave2 from '../assets/wave2.png';

function Certificate() {
  return (
      <>
        <div className={`flex flex-col justify-center items-center w-full h-full relative`}>
        <h1 className={`text-4xl font-semibold mb-32 text-center`}>Certifications</h1>
          <div className={`flex sm:flex-row flex-col justify-center items-center mb-32 h-full w-full`}>
            <img className={`sm:w-2/5 sm:h-4/5 p-2`} src={certificate} />
              <h2 className={`text-2xl font-semibold sm:mx-32 mx-12`}>Will graduate VTDT in 2025 as a programmer.</h2>
            </div>
        </div>
      </>
    )
}
export default Certificate;