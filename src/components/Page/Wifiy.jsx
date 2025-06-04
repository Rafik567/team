import React from 'react';

const Wifiy = () => {
  const arr = [
    {
      text: "Drive Maxi+ (200 ԳԲ)",
      text2: "Գերարագ Ինտերնետ նոութբուքերի, WiFi/USB մոդեմների համար",
    },
    {
      text: "Drive Maxi+ (200 ԳԲ)",
      text2: "Գերարագ Ինտերնետ նոութբուքերի, WiFi/USB մոդեմների համար",
    },
    {
      text: "Drive Maxi+ (140 ԳԲ)",
      text2: "Գերարագ Ինտերնետ նոութբուքերի, WiFi/USB մոդեմների համար",
    },
    {
      text: "Drive Midi (80 ԳԲ)",
      text2: "Գերարագ Ինտերնետ նոութբուքերի, WiFi/USB մոդեմների համար",
    },
    {
      text: "Drive Mini (30 ԳԲ)",
      text2: "Գերարագ Ինտերնետ նոութբուքերի, WiFi/USB մոդեմների համար",
    },
  ];

  return (
    <div className="p-8">
      <h2 className="text-[24px] font-bold mb-6 text-center">Համակարգչի/պլանշետի համար</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
        {arr.map((item, index) => (
          <div key={index} className="bg-white shadow-lg rounded-2xl p-4 w-full max-w-[220px] text-center border border-gray-200">
            <h3 className="text-lg font-semibold mb-2">{item.text}</h3>
            <p className="text-sm text-gray-600">{item.text2}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wifiy;
