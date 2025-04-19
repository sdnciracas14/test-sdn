"use client";
import AnalogClock from "@/common/components/analog";
import Carousel from "@/common/components/carousel-header";
import CountSection from "@/common/layouts/statistik-sekolah";
import { auth } from "@/common/service/auth";
import HomeComponent from "@/modules/home/home";
import Navbar from "@/modules/navbar/navbar";
import { getSession, useSession } from "next-auth/react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function Home() {
  const images = [
    "https://res.cloudinary.com/dkfnmnao2/image/upload/v1744800742/Gambar_WhatsApp_2025-04-16_pukul_10.21.49_6239953b_ac341d.jpg",
    "https://res.cloudinary.com/dkfnmnao2/image/upload/v1744800738/Gambar_WhatsApp_2025-04-16_pukul_07.40.45_2fa18a84_etbkuf.jpg",
    "https://res.cloudinary.com/dkfnmnao2/image/upload/v1744801501/503a3e52-894a-4709-b937-4af7d68e6899.png",
    "https://res.cloudinary.com/dkfnmnao2/image/upload/v1744801612/Gambar_WhatsApp_2025-04-16_pukul_07.40.57_088ed430_imqnty.jpg",
    "https://res.cloudinary.com/dkfnmnao2/image/upload/v1744801623/Gambar_WhatsApp_2025-04-16_pukul_10.21.49_d450fc50_jsqxx8.jpg",
  ];
  return (
    <>
      <Navbar />
      <Carousel images={images} />
      <main>
        <div className="text-primary p-4 md:px-20">
          <Marquee speed={100} pauseOnHover className="flex">
            <div className="ml-96"></div>
            <div className="text-lg md:text-2xl font-semibold flex gap-3">
              Selamat Datang di Website SD NEGERI 14 CIRACAS.
              <i>
                &quot;Guru bukan sekadar pengajar, tapi juga penumbuh karakter,
                akal sehat, dan kekuatan moral anak bangsa.&quot;
              </i>
              <p>(Mohammad Hatta)</p>
            </div>
          </Marquee>
        </div>

        <div></div>

        <div>
          <Image
            src={
              "https://res.cloudinary.com/dkfnmnao2/image/upload/v1744798430/5eee8cd8-2db4-4480-ada6-06d9e32942a3-removebg-preview_nu2nkw.png"
            }
            width={1000}
            height={1000}
            alt="anak sekolah dasar"
            className=" md:w-navcontainerlg rounded-md mx-auto object-cover"
          />
        </div>
      </main>
      <AnalogClock />
      <CountSection />
      <HomeComponent />
    </>
  );
}
