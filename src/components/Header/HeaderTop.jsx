import React from "react";
import { Link } from "react-router-dom"; // Ներմուծում ենք Link-ը

const HeaderTop = () => {
    return (
        <div className="relative shadow-[2px_2px_4px_rgba(0,0,0,0.2)] text-[#2c3843] h-[60px] z-10">
            <div className="flex gap-[220px] items-center px-4 h-full">
                <div className="ml-[200px]">
                    <img
                        src="https://abbc.am/wp-content/uploads/2023/07/Team_Telecom_Armenia.png"
                        className="w-[150px]"
                        alt="Logo"
                    />
                </div>

                <nav>
                    <ul className="flex gap-[20px] list-none m-0 p-0">
                        <li className="text-sm leading-[1.4]">
                            <Link to="/tariffs" className="cursor-pointer">Սակագներ</Link>
                        </li>
                        <li className="text-sm leading-[1.4]">
                            <Link to="/internet" className="cursor-pointer">Ինտերնետ</Link>
                        </li>
                        <li className="text-sm leading-[1.4]">
                            <Link to="/services" className="cursor-pointer">Ծառայություններ</Link>
                        </li>
                        <li className="text-sm leading-[1.4]">
                            <Link to="/roaming" className="cursor-pointer">Ռոումինգ</Link>
                        </li>
                        <li className="text-sm leading-[1.4]">
                            <Link to="/shop" className="cursor-pointer">Առցանց խանութ</Link>
                        </li>
                        <li className="text-sm leading-[1.4]">
                            <Link to="/offers" className="cursor-pointer">Առաջարկներ</Link>
                        </li>
                        <li className="text-sm leading-[1.4]">
                            <Link to="/help" className="cursor-pointer">Օգնություն</Link>
                        </li>
                    </ul>
                </nav>

                <div>
                    <Link
                        to="/payments"
                        className="text-sm text-[#2c3843] px-4 py-2 border rounded hover:bg-gray-100 transition"
                    >
                        Վճարումներ
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HeaderTop;
