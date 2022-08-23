import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Locations = () => {
  return (
    <article className="flex flex-col justify-start items-center text-myRose">
      <h2 className="text-4xl mb-8"> Follow us on: </h2>
      <div className="flex justify-center items-center text-4xl space-x-4">
        <a
          className="transition duration-500 hover:text-myCyan hover:scale-125"
          href="https://www.linkedin.com/in/youssef-sabbagh/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          className="transition duration-500 hover:text-myCyan hover:scale-125"
          href="https://github.com/YoussefSabbagh"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
        <a
          className="transition duration-500 hover:text-myCyan hover:scale-125"
          href="https://twitter.com/TaguaraDigital"
          target="_blank"
          rel="noreferrer"
        >
          <FaTwitter />
        </a>
      </div>
    </article>
  );
};

export default Locations;
