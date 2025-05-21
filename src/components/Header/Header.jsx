import React from 'react'
import HeaderTop from './HeaderTop'

const Header = () => {
  return (
    <>
      <div className="bg-[#01415f]">
        <div className="container mx-auto flex justify-between items-center px-3 py-2 max-[1150px]:h-[60px]">
          <div className="flex space-x-4">
            <ul className="flex space-x-4 text-sm text-white">
              <li>
                <a >
                  Անհատներին
                </a>
              </li>
              <li>
                <a >
                  Բիզնես
                </a>
              </li>
              <li>
                <a >
                  E-shop
                </a>
              </li>
            </ul>
          </div>

          <div className="flex items-center space-x-6">
            <form method="get" autoComplete="off" className="hidden md:flex items-center border rounded px-2 py-1">
              <input type="text" name="q" placeholder="Որոնել" className="text-sm p-1 outline-none" />

            </form>


            <ul className="flex space-x-2 text-sm text-white">
              <li className='border-r pr-2 border-gray-300'>Հայ</li>
              <li className='border-r pr-2 border-gray-300'><a >Рус</a></li>
              <li className='border-r pr-2 border-gray-300'><a >Eng</a></li>
            </ul>
            <i class="fa fa-user"></i>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZg2qVWPh1HQc_tzr3QkXXRj9koKN8bhVMog&s' className='w-[20px]' />
            <p className="text-sm text-white ">Անձնական գրասենյակ</p>

            <div className="hidden max-md:flex flex-col space-y-1 cursor-pointer">
              <span className="w-5 h-0.5 bg-white"></span>
              <span className="w-5 h-0.5 bg-white"></span>
              <span className="w-5 h-0.5 bg-white"></span>
            </div>
          </div>
        </div>
      </div>
      <HeaderTop />
      </>
      )
}

      export default Header
