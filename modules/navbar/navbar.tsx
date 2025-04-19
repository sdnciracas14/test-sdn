"use client";
import SearchBar from "@/common/components/search";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  FaChalkboardTeacher,
  FaNewspaper,
  FaSearch,
  FaUserCircle,
} from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";

export default function Navbar() {
  const [scroll, setScroll] = useState(false);
  const [handleSearch, setHandleSearch] = useState(false);

  const handleToggle = () => setHandleSearch(!handleSearch);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={`p-2 bg-primary fixed top-0 left-0 right-0 z-50 md:text-white md:flex md:justify-around md:items-center ${
        scroll ? "md:bg-primary " : "md:bg-transparent  "
      }`}
    >
      <Link
        href={"/"}
        className="text-lg font-semibold text-white flex items-center justify-center"
      >
        <Image
          src="https://res.cloudinary.com/dkfnmnao2/image/upload/v1744373841/Gambar_WhatsApp_2025-04-10_pukul_19.15.07_786a139d-removebg-preview_oamhmn.png"
          width={800}
          height={800}
          alt="logo"
          className="w-10"
        />
        <h1 className="">SD Negeri Ciracas 14</h1>
      </Link>

      <div className="bg-primary text-white fixed bottom-0 left-0 right-0 px-2 pt-4 grid grid-cols-4 items-center gap-4 justify-around font-bold text-sm md:bg-transparent md:static md:p-0">
        <Link href={"/"} className="grid justify-items-center">
          <IoHomeOutline size={20} className="md:hidden" />
          <h3 className="">Home</h3>
        </Link>
        <Link href={"/profile-sekolah"} className="grid justify-items-center">
          <FaUserCircle size={20} className="md:hidden" />
          <h3 className="">Profile</h3>
        </Link>
        <Link href={"/guru"} className="grid justify-items-center">
          <FaChalkboardTeacher size={20} className="md:hidden" />
          <h3>Guru</h3>
        </Link>
        <Link href={"/article"} className="grid justify-items-center">
          <FaNewspaper size={20} className="md:hidden" />
          <h3 className="">Article</h3>
        </Link>
        <button
          onClick={handleToggle}
          className="absolute cursor-pointer -top-8 text-xs  border-x-4 border-white left-1/2 transform -translate-x-1/2 md:hidden bg-primary p-3 rounded-full grid justify-items-center"
        >
          <FaSearch size={18} />
          <p>Search</p>
        </button>
      </div>
      <div className="">
        {handleSearch && <SearchBar placeholder="Cari artikel" />}
      </div>
    </nav>
  );
}
