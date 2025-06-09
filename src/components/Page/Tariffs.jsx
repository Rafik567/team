import React from 'react'

const tariffsData = [
  {
    title: "Նախընտրելի",
    description: "Ֆիքսված հեռախոսակապ տան համար",
    height: 222,
button: "Մանրամասն"
  },
  {
    title: "Բազային 1",
    description: "Ֆիքսված հեռախոսակապ տան համար",
    height: 222,
    button: "Մանրամասն"
  },
  {
    title: "Բազային 2",
    description: "Ֆիքսված հեռախոսակապ տան համար",
    height: 222,
    button: "Մանրամասն"
  },
  {
    title: "Այլընտրանքային 1",
    description: "Ֆիքսված հեռախոսակապ տան համար",
    height: 222,

    button: "Մանրամասն"
  },
  {
    title: "Այլընտրանքային 2",
    description: "Ֆիքսված հեռախոսակապ տան համար",
    height: 214,
    button: "Մանրամասն"
  },
  {
    title: "Քարտֆոնային կապ",
    description: "Հեռախոսային քարտեր քարտֆոնների",
    height: 214,
    button: "Մանրամասն"
  },
]

const Tariffs = () => {
  return (
    <>
       <div className="p-8 ">
            <h2 className="text-[24px] font-bold mb-6 text-center">Օգտակար տեղեկատվություն</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
                {tariffsData.map((item, index) => (
                    <div key={index} className="bg-white shadow-lg rounded-2xl p-4 w-full max-w-[220px] text-center border border-gray-200">
                        <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                        <p className="text-sm text-gray-600">{item.description}</p>
                        <button className='bg-red-500 rounded-[20px] w-[120px] mt-[10px]'>{item.button}</button>
                    </div>
                ))}
            </div>
        </div>
    </>
  )
}

export default Tariffs
