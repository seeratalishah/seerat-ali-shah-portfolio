import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; 2023. All rights reserved.
      </small>
      <div className="flex items-center justify-center gap-2">
       <a
          className="bg-blue-500 p-2 rounded-6 hover:text-gray-950 flex w-16 justify-center items-center focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://www.linkedin.com/in/seerat-ali-7b56a2212/"
          target="_blank"
        >
          <FaLinkedinIn color="white" />
        </a>

        <a
          className="bg-black p-2 rounded-6 text-gray-700 flex w-16 justify-center items-center focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com/seeratalishah"
          target="_blank"
        >
          <TbBrandGithubFilled color="white" />
        </a>
       </div>
    </footer>
  );
}
