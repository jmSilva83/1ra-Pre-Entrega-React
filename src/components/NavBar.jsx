import { useState } from "react";
import CartWidget from "./CartWidget";
import Search from "../assets/SearchIcon.svg";
import Logo from "../assets/XboxLogo.svg";
const Navbar = () => {
    const [showCategories, setShowCategories] = useState(false);

    return (
        <nav className="bg-green-500 py-4">
            <div className="container mx-auto flex items-center justify-between">
                <div className="mr-20">
                    <img src={Logo} alt="Logo" />
                </div>
                <div className="ml-20">
                    <img src={Search} alt="" />
                </div>
                <div className="flex items-center justify-center flex-grow">
                    <img src="" alt="" />
                    <form className="bg-white p-2 h-[20%] w-full rounded-lg">
                        <input type="text" />
                    </form>
                </div>
                <div className="ml-20 flex items-center justify-end">
                    <ul className="flex space-x-4 justify-end">
                        <li>
                            <button
                                className="text-white"
                                href=""
                                onClick={() =>
                                    setShowCategories(!showCategories)
                                }
                            >
                                Categorías
                            </button>
                            {showCategories && (
                                <ul className="absolute bg-yellow-600 text-gray-800 rounded-lg">
                                    <li>
                                        <button className="hover:underline">
                                            Oferta Semanal
                                        </button>
                                    </li>
                                    <li>
                                        <button className="hover:underline">
                                            Juegos AAA
                                        </button>
                                    </li>
                                    <li>
                                        <button className="hover:underline">
                                            Juegos Indies
                                        </button>
                                    </li>
                                </ul>
                            )}
                        </li>
                        <li>
                            <button className="text-white">Productos</button>
                        </li>
                        <li>
                            <button className="text-white">Contacto</button>
                        </li>
                        <li>
                            <button>
                                <CartWidget />
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
