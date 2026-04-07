"use client";

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-100 text-black dark:text-white dark:bg-black py-6 mt-20">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mx-5">
          <div>
            <p>Copyright &copy; {new Date().getFullYear()}</p>
          </div>
          <div>
            <p>Developed with ❤️ by Md.Al-Amin Sahed</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
