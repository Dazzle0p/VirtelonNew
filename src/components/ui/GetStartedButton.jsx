"use client";

import { motion } from "framer-motion";

export default function GetStartedButton() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="flex items-center justify-center"
    >
      <a href="/robs">
        <div className="group cursor-pointer border-2 border-[#361D88] bg-[##3842ffa1] gap-2 h-[60px] flex items-center p-[10px] rounded-full">
          <div className="border-2 border-[#361D88] bg-linear-to-r from-[#361D88] to-blue-500 h-[40px] rounded-full flex items-center justify-center text-white">
            <p className="font-medium tracking-tight mr-3 ml-3 flex items-center gap-2 justify-center text-base">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-globe animate-spin"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                <path d="M2 12h20"></path>
              </svg>
              Get started
            </p>
          </div>
          <div className=" group-hover:ml-4 ease-in-out transition-all size-[24px] flex items-center justify-center rounded-full border-2 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-arrow-right group-hover:rotate-180 ease-in-out transition-all"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </div>
        </div>
      </a>
    </motion.div>
  );
}
