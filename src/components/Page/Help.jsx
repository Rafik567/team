import React from 'react'
import Footer from '../Footer/Footer'

const Help = () => {
  return (
    <>
      <div className='ml-[200px] mt-[100px]'>
        <h1 className="text-[30px] ">
          <strong>Սարքերի կարգավորումներ</strong>
        </h1>
        <div className='mt-[20px]'>
          <input
            id="search-input-value"
            className="p-[0px,10px,0px,35px] bg-gray-100 w-[550px] h-[30px] rounded-[10px]"
            type="text"
            name="text-input"
            placeholder="Որոնել"
          />
          <button className='bg-red-400 w-[120px] rounded-[10px] ml-[10px]'>Որոնել</button>
          
        </div>
        <div className='mt-[10px]'>
            <p>Ընտրեք ձեզ հետաքրքրող հարցը կամ սարքի մոդելը, կարգավորումները տեսնելու համար</p>
        </div>
        <div className='mt-[10px]'>
        <input
            id="search-input-value"
            className="p-[0px,10px,0px,35px] bg-gray-100 w-[340px] h-[30px] rounded-[10px]"
            type="text"
            name="text-input"
            placeholder="Ինչ անել"
          />
          <input
            id="search-input-value"
            className="p-[0px,10px,0px,35px] bg-gray-100 w-[300px] ml-[40px] h-[30px] rounded-[10px]"
            type="text"
            name="text-input"
            placeholder="Ինչ անել"
          />
        </div>
      </div>
      
    </>
  )
}

export default Help
