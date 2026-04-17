import React from "react";
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";

export const Footer = () => {
  const gmailComposeUrl =
    "https://mail.google.com/mail/?view=cm&fs=1&to=abdulrehmaan7151@gmail.com&su=Contact%20from%20Portfolio&body=Hello%20Abdul%2C%0A%0AMy%20name%20is%20...";

  return (
    <div className="bg-primary lg:flex lg:flex-row flex flex-col justify-evenly items-center gap-4 text-center color-white p-4">
      <div>&copy; {new Date().getFullYear()} Abdul Rehman</div>
      <div className="flex justify-evenly lg:w-1/5 w-2/3">
        <a href="https://github.com/abdulrehman7151" target="_blank" rel="noreferrer">
          <AiFillGithub
            className="hover:scale-125 transform transition-transform"
            size={30}
            color="white"
          />
        </a>
        <a
          className="hover:scale-125 transform transition-transform"
          href={gmailComposeUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Compose email in Gmail"
          title="abdulrehmaan7151@gmail.com"
        >
          <AiOutlineMail size={30} color="white" />
        </a>
        <a
          className="hover:scale-125 transform transition-transform"
          href="https://www.linkedin.com/in/abdul-rehman-864b51395/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin size={30} color="white" />
        </a>
      </div>
    </div>
  );
};
