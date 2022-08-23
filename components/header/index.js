import { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

import DropdownProperties from './DropdownProperties';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="fixed w-full h-[80px] z-[200] bg-myBlack flex justify-between items-center px-4 md:px-10 lg:px-16 transition duration-500">
      <Link href="/">
        <a className="text-myWihte flex flex-col">
          <span className="text-4xl hover:fond-bold">Jesus Guevara</span>
          <span>Bienes Raices</span>
        </a>
      </Link>

      <nav>
        <button
          className="hover:text-myRose md:hidden"
          onClick={handleShowToggleMenu}
        >
          {!showMenu ? <FaBars size={24} /> : <FaTimes size={24} />}
        </button>
        <ul
          className={`menuMobile ${
            showMenu ? ' translate-x-0 ' : 'translate-x-full'
          } md:menuDesktop`}
        >
          <li onClick={handleShowToggleMenu} className="headerLink">
            <Link href="/search">
              <a className="">Buscar</a>
            </Link>
          </li>
          <li onClick={handleShowToggleMenu} className="headerLink">
            <DropdownProperties link={'Nuestras Propiedades'} />
          </li>
          <li onClick={handleShowToggleMenu} className="headerLink">
            <DropdownProperties link={'Trabajemos juntos'} />
          </li>
          <li onClick={handleShowToggleMenu} className="headerLink">
            <Link href="/#contact">
              <a className="">Contacto</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
