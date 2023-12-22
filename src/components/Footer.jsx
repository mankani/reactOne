import React from "react";
import {
  AiFillYoutube,
  AiFillInstagram,
  AiFillTwitterCircle,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <h1>CrispyCoir's Tech</h1>
        <p>@all rights reserved</p>
      </div>
      <div>
        <h5>Follow us</h5>
        <div>
          <a href="https://youtube.com/@jcole" target="_blank">
            <AiFillYoutube />
            Youtube
          </a>
          <a href="https://instagram.com/realcoleworld" target="_blank">
            <AiFillInstagram />
            Instagram
          </a>
          <a href="https://twitter.com/JColeNC" target="_blank">
            <AiFillTwitterCircle />X
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
