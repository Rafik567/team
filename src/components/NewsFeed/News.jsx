import React from 'react'

const News = () => {
 const news = [
    {
      title: '«Տելեկոմ Արմենիա» ԲԲԸ-ն Հայաստանում առաջինն է թողարկում Կայուն զարգացման պարտատոմսեր',
      image: 'https://www.telecomarmenia.am/images/news/2/17333931457674.jpeg',
    },
    {
      title: 'Team Telecom Armenia-ն Տավուշում ամբողջովին վերազինել է բջջային ցանցը',
      image: 'https://www.telecomarmenia.am/images/news/1/17478128501455.jpeg',
    },
    {
      title: 'Արի՛ ժամանակի միջով ճամփորդելու. Team-ի Կապի թանգարանը միացել է թանգարանային տոներին',
      image: 'https://www.telecomarmenia.am/images/news/1/17474608108675.png',
    }
  ];

  return (
    <div className=" py-10">
      <div className="container mx-auto flex flex-wrap  justify-center gap-[100px]">
        {news.map((service, index) => (
          <a
            key={index}
            href={service.link}
            className="w-[220px] bg-[#01415f] text-white rounded-md overflow-hidden hover:scale-105 transition transform duration-300 shadow-md"
          >
            <div
              className="h-[140px] bg-center bg-no-repeat bg-cover"
              style={{ backgroundImage: `url(${service.image})` }}
            />
            <div className="p-4 text-center">
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <span className="inline-block mt-2 px-4 py-1 border border-white rounded hover:bg-white hover:text-[#01415f] transition">
                Ավելին
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default News