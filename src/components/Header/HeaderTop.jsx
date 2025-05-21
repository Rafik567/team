import React from "react";

const HeaderTop = () => {
    return (
        <div
            className="relative shadow-[2px_2px_4px_rgba(0,0,0,0.2)] text-[#2c3843] h-[60px] z-10"
        >
            <div className="flex gap-[220px] items-center px-4 h-full">
                <div className="ml-[200px]">
                    <img src="https://abbc.am/wp-content/uploads/2023/07/Team_Telecom_Armenia.png" className="w-[150px]" />
                </div>

                <nav>
                    <ul className="flex gap-[20px] list-none m-0 p-0">
                        <li className="cursor-pointer text-sm leading-[1.4]">Սակագներ</li>
                        <li className="cursor-pointer text-sm leading-[1.4]">Ինտերնետ</li>
                        <li className="cursor-pointer text-sm leading-[1.4]">Ծառայություններ</li>
                        <li className="cursor-pointer text-sm leading-[1.4]">Ռոումինգ</li>
                        <li className="cursor-pointer text-sm leading-[1.4]">Առցանց խանութ</li>
                        <li className="cursor-pointer text-sm leading-[1.4]">Առաջարկներ</li>
                        <li className="cursor-pointer text-sm leading-[1.4]">Օգնություն</li>
                    </ul>
                    
                </nav>
                <div>
                    <a className="text-sm text-[#2c3843] px-4 py-2 border rounded hover:bg-gray-100 transition" >
                        Վճարումներ
                    </a>
                </div>
                
            </div>
        </div>
    );
};

export default HeaderTop;
