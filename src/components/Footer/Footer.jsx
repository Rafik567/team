import React from 'react';

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white pt-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="space-y-4 lg:w-1/3">
            <a  className="text-2xl font-bold">Team</a>
                   

            <div className="flex items-center space-x-6 mt-4">
              <img src="https://www.telecomarmenia.am/img/redesign/qr.svg" alt="qr" className="w-20 h-20" />
              <div className="flex flex-col space-y-2">
                
                  <img src="https://www.telecomarmenia.am/img/redesign/app_store.png" alt="App Store" className="h-10" />
               
               
                  <img src="https://www.telecomarmenia.am/img/redesign/google_play.png" alt="Google Play" className="h-10" />
               
              </div>
            </div>

            <div className="flex space-x-4 mt-4">
              <a target="_blank">
                <img className="h-12" src="https://www.telecomarmenia.am/img/redesign/iso_1.png" alt="ISO 27001" />
              </a>
              <a target="_blank">
                <img className="h-12" src="https://www.telecomarmenia.am/img/redesign/iso_2.png" alt="ISO 9001" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 lg:mt-0 text-sm">
            
            <div>
              <div className="font-semibold mb-2">Ընկերության մասին</div>
              <ul className="space-y-1">
                <li><a>Մեր մասին</a></li>
                <li><a>Կապի թանգարան</a></li>
                <li><a>Նորություններ</a></li>
                <li><a >Աշխատանք Տելեկոմ Արմենիայում</a></li>
                <li><a >Արդյունքներ և հաշվետվություններ</a></li>
                <li><a >Գործարար Էթիկա և Կոմպլայենս</a></li>
                <li><a >Կայուն զարգացում</a></li>
                <li><a >Բաժնետերերին</a></li>
              </ul>
            </div>

           
            <div>
              <div className="font-semibold mb-2">Տեղեկատվություն</div>
              <ul className="space-y-1">
                <li><a >Ընդհանուր դրույթներ և պայմաններ</a></li>
                <li><a >Անվտանգություն</a></li>
                <li><a >E-shop պայմաններ</a></li>
                <li><a >Ապառիկ վաճառքի պայմաններ</a></li>
                <li><a >Առաքման պայմաններ</a></li>
                <li><a >Վաճառքի և սպասարկման կենտրոններ</a></li>
                <li><a >Ծածկույթ</a></li>
                <li><a >Բջջային ցանցի ծածկույթ</a></li>
                <li><a >Team ինտերնետի ծածկույթ</a></li>
                <li><a >Օգտակար փաստաթղթեր</a></li>
                <li><a >Գործընկերներին և մատակարարներին</a></li>
                <li><a >Գաղտնիության քաղաքականություն</a></li>
                <li><a >ՀՀ մարզերի կոդեր</a></li>
              </ul>
            </div>

            {/* Սյունակ 3 - Team հավելվածներ */}
            <div>
              <div className="font-semibold mb-2">
                <a >Team հավելվածներ</a>
              </div>
              <ul className="space-y-1">
                <li><a >TeamTV</a></li>
                <li><a >My Team</a></li>
                <li><a >TeamPay</a></li>
                <li><a >Team Energy</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-700 pt-4 text-center text-xs text-gray-400">
          Team © 2025
        </div>
      </div>
    </div>
  );
};

export default Footer;
