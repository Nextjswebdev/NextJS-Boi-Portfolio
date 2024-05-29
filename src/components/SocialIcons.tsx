

import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram, FaGithub, FaMedium, FaReddit } from 'react-icons/fa';

const SocialIcons = () => {
  return (
    <div className="flex justify-center items-center space-x-4 h-20">
      <a href="#" target="_blank" >
        <FaTwitter className="w-6 h-6 md:w-8 md:h-8" />
      </a>
      <a href="#" target="_blank" >
        <FaFacebook className="w-6 h-6 md:w-8 md:h-8" />
      </a>
      <a href="#" target="_blank" >
        <FaInstagram className="w-6 h-6 md:w-8 md:h-8" />
      </a>
      <a href="#" target="_blank" >
        <FaGithub className="w-6 h-6 md:w-8 md:h-8" />
      </a>
      <a href="#" target="_blank"  >
        <FaMedium className="w-6 h-6 md:w-8 md:h-8" />
      </a>
      <a href="#" target="_blank" >
        <FaReddit className="w-6 h-6 md:w-8 md:h-8" />
      </a>
    </div>
  );
};

export default SocialIcons;
