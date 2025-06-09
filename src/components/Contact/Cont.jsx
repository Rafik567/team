import React from 'react';

const Cont = () => {
  const services = [
    {
      title: 'Բջջային կապ',
      image: '',
    },
    {
      title: 'Ֆիքսված կապ',
      image: '',
    },
    {
      title: 'Հավելվածներ',
      image: '',
    },
    {
      title: 'Ինտերնետ և TV',
      image: '',
    },
  ];

  return (
    <div className=" py-10">
      <div className="container mx-auto flex flex-wrap justify-center gap-6">
        {services.map((service, index) => (
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

export default Cont;
