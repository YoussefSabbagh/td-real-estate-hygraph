import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="container mx-auto flex flex-col justify-center items-center px-6 py-4">
        <div className="w-full">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <Link href="/">
              <a className="text-myWihte flex flex-col cursor-pointer mb-8 md:mb-0">
                <span className="text-4xl hover:fond-bold">
                  Jesus Contreras
                </span>
                <span>Bienes Raices</span>
              </a>
            </Link>
            <div className="flex justify-between items-center w-64 text-myWhite text-2xl">
              <a
                className="hover:scale-125"
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>

              <a
                className="hover:scale-125"
                href="https://www.instagram.com/taguara_digital/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>

              <a
                className="hover:scale-125"
                href="https://twitter.com/TaguaraDigital"
                target="_blank"
                aria-label="Twitter"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-10 bg-black shadow-inner justify-center items-center">
        <p className="text-white">
          Todos los derechos reservados - &copy; 2022 Desarrollado por Tagura
          Digital
        </p>
      </div>
    </footer>
  );
};

export default Footer;
