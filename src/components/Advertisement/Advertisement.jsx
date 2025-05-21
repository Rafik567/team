import React from 'react';

const Advertisement = () => {
  return (
    <div className="bg-[#01415f] min-h-[60vh] w-full flex items-center justify-between px-12 gap-8 overflow-hidden">
      

      <div className="text-white w-1/2 ml-[200px]">
        <h2 className="font-bold text-4xl mb-4">SONY Smart TV</h2>
        <p className="text-2xl mb-6">ԿՈՍՄՈ/ԿՈՄԲՈ փաթեթներ</p>
        <a
          href="/hy/sony-combo-cosmo"
          className="inline-block bg-red-400 text-black font-semibold px-6 py-3 rounded hover:bg-yellow-500 transition"
        >
          Մանրամասն
        </a>
      </div>


      <div className="w-1/2 flex ">
        <img
          src="https://www.telecomarmenia.am/images/advanced_slider/1/17054709118389.png"
          alt="SONY Smart TV"
          className="max-w-[550px] object-contain"
        />
      </div>
    </div>
  );
};

export default Advertisement;
