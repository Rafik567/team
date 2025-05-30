import React from 'react'

const tariffsData = [
  {
    title: "Նախընտրելի",
    description: "Ֆիքսված հեռախոսակապ տան համար",
    height: 222,
  },
  {
    title: "Բազային 1",
    description: "Ֆիքսված հեռախոսակապ տան համար",
    height: 222,
    
  },
  {
    title: "Բազային 2",
    description: "Ֆիքսված հեռախոսակապ տան համար",
    height: 222,
    
  },
  {
    title: "Այլընտրանքային 1",
    description: "Ֆիքսված հեռախոսակապ տան համար",
    height: 222,
    
  },
  {
    title: "Այլընտրանքային 2",
    description: "Ֆիքսված հեռախոսակապ տան համար",
    height: 214,
    
  },
  {
    title: "Քարտֆոնային կապ",
    description: "Հեռախոսային քարտեր քարտֆոնների",
    height: 214,
  },
]

const Tariffs = () => {
  return (
    <div className="tariffs-wrapper tariffs-wrapper--fixed">
      <div>
        <h2 className="text-[20px]"><strong>Ֆիքսված հեռախոսակապ</strong></h2>
      </div>

      <div className="tab-second cb postpaid">
        <div className="grid grid--with-line">
          <section className="grid__section accordion">
            <ul
              className="grid__list equal-list accordion__content"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)', 
                gap: '20px',                           
                padding: 0,
                margin: 0,
                listStyle: 'none',
              }}
            >
              {tariffsData.map(({ title, description, link, height }, index) => (
                <li key={index} className="grid__item ver-top-box" style={{}}>
                  <a
                    href={link}
                    className="grid__link db pr equal-list__item"
                    style={{
                      height: `${height}px`,
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      padding: '16px',
                      border: '1px solid #ccc',
                      borderRadius: '6px',
                      textDecoration: 'none',
                      color: 'inherit',
                      backgroundColor: '#fff',
                      boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
                      transition: 'box-shadow 0.3s ease',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.2)')}
                    onMouseLeave={e => (e.currentTarget.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)')}
                  >
                    <span className="grid__top-title db fs26 trans-background mb-none">{title}</span>
                    <span className="grid__description db three-dots" style={{ overflowWrap: 'break-word' }}>
                      {description}
                    </span>
                    <span
                      className="btn btn--red btn--red-transparent btn--red-short ver-top-box tc trans-background"
                      style={{ marginTop: 'auto', alignSelf: 'center', cursor: 'pointer' }}
                    >
                      Մանրամասն
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Tariffs
