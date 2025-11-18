"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import "@/components/navigation/navigation.css";

import { IoIosCall } from "react-icons/io";
import { RiCustomerService2Fill } from "react-icons/ri";
import { ImWhatsapp } from "react-icons/im";
import { FaYoutube, FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Navigation = () => {
  return (
    <>
      {/* TOP SOCIAL NAV */}
      <div className="w-full bg-white border-b border-gray-200 first-nav-glass">
        <nav className="flex justify-between items-center px-6 h-[40px]">
          <Link href="#" className="text-[#eb5a25] text-xs hover:scale-110 transition-transform">
            <IoIosCall />
          </Link>
          <Link href="#" className="text-[#eb5a25] text-xs hover:scale-110 transition-transform">
            <FaXTwitter />
          </Link>
          <Link href="#" className="text-[#eb5a25] text-xs hover:scale-110 transition-transform">
            <FaInstagram />
          </Link>
          <Link href="#" className="text-[#eb5a25] text-xs hover:scale-110 transition-transform">
            <FaFacebook />
          </Link>
          <Link href="#" className="text-[#eb5a25] text-xs hover:scale-110 transition-transform">
            <FaYoutube />
          </Link>
          <Link href="#" className="text-[#eb5a25] text-xs hover:scale-110 transition-transform">
            <ImWhatsapp />
          </Link>
          <Link href="#" className="text-[#eb5a25] text-xs hover:scale-110 transition-transform">
            <RiCustomerService2Fill />
          </Link>
        </nav>
      </div>

      {/* MAIN LOGO STICKY NAV */}
      <nav className="sticky top-0 w-full bg-white/30 shadow-md second-nav-glass">
        <div className="flex justify-between items-center px-6 h-[60px]">
          <Link href="/">
            <Image
              src="/images/ekjahan.jpeg"
              alt="Ekjahan Enterprises"
              width={120}
              height={40}
              className="object-contain hover:scale-105 transition-all"
            />
          </Link>

          <Link href="/">
            <Image
              src="/images/ekjahpar.png"
              alt="Ekjahan Partnership"
              width={120}
              height={40}
              className="object-contain hover:scale-105 transition-all"
            />
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
