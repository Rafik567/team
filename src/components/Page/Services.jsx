import React from 'react'

const Services = () => {
  const arr = [
    {
      text: "Բալանսի փոխանցում",
      text2: "Ծառայությունը թույլ է տալիս Team բջջային ցանցի կանխավճարային բաժանորդներին բջջայինի հաշվից գումար փոխանցել Team-ի մեկ այլ…",
      button: "Ավելին"
    },
    {
      text: "Զանգի՛ր ինձ",
      text2: "Ծառայությունը թույլ է տալիս Team կանխավճարային և հետվճարային հաշվարկային համակարգի բաժանորդին հաղորդագրություն…",
      button: "Ավելին"
    },
    {
      text: "Վստահության րոպեներ",
      text2: "Եթե ձեր հաշվեկշիռը մոտ է 0-ի, իսկ այդ պահին հաշիվը վերալիցքավորելու…",
      button: "Ավելին"
    },
    {
      text: "Լիցքավորի՛ր իմ հաշիվը",
      text2: "Telecom Armenia կանխավճարային և հետվճարային համակարգի…",
      button: "Ավելին"
    }

  ];

  return (
    <div className="p-8">
      <h2 className="text-[24px] font-bold mb-6 text-center">Վճարում և համալրում</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
        {arr.map((item, index) => (
          <div key={index} className="bg-white shadow-lg rounded-2xl p-4 w-full max-w-[220px] text-center border border-gray-200">
            <h3 className="text-lg font-semibold mb-2">{item.text}</h3>
            <p className="text-sm text-gray-600">{item.text2}</p>
            <button className='bg-red-500 rounded-[20px] w-[80px] mt-[10px]'>{item.button}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services