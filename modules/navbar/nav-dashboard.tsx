import Image from "next/image";
import Link from "next/link";
import { LuFilePlus, LuTrash2 } from "react-icons/lu";
import { RiFileEditLine } from "react-icons/ri";

export default function NavbarDashboard() {
  return (
    <nav className="p-2 bg-primary fixed top-0 left-0 right-0 z-50 text-white md:w-navcontainermd lg:w-navcontainerlg md:bottom-0 md:grid md:items-center md:justify-center">
      <div className="grid gap-12 w-full]">
        <div className="text-lg font-semibold md:flex md:items-center md:justify-center hidden">
          <Image
            src="https://res.cloudinary.com/dkfnmnao2/image/upload/v1744373841/Gambar_WhatsApp_2025-04-10_pukul_19.15.07_786a139d-removebg-preview_oamhmn.png"
            width={800}
            height={800}
            alt="logo"
            className="w-10"
          />
          <h1 className="">SD NEGERI 14 CIRACAS</h1>
        </div>

        <div className="text-lg font-semibold flex items-center justify-center">
          <Image
            src="https://res.cloudinary.com/dkfnmnao2/image/upload/v1744373841/Gambar_WhatsApp_2025-04-10_pukul_19.15.07_786a139d-removebg-preview_oamhmn.png"
            width={800}
            height={800}
            alt="logo"
            className="w-10 block md:hidden"
          />
          <h1 className="">DASHBOARD ARTICLE</h1>
        </div>

        <div className="bg-primary text-white fixed bottom-0 left-0 right-0 px-2 pt-4 grid grid-cols-2   gap-8 justify-around font-bold text-sm md:bg-transparent md:static md:p-0 md:grid-cols-1 md:items-center md:justify-center md:px-12">
          <Link
            href={"/dashboard/add-article"}
            className="grid justify-items-center md:grid-cols-3 md:gap-4 hover:bg-blue-950 md:p-3 transition-all duration-300 ease-in-out rounded-md "
          >
            <LuFilePlus size={20} className="col-span-1" />
            <div className="flex =r md:gap-2 md:col-span-2 gap-2">
              <h3 className="">ADD</h3>
              <h3 className="">ARTICLE</h3>
            </div>
          </Link>
          <Link
            href={"/dashboard/edit-article"}
            className="grid justify-items-center md:grid-cols-3 md:gap-4 hover:bg-blue-950 md:p-3 transition-all duration-300 ease-in-out rounded-md "
          >
            <RiFileEditLine size={20} className="col-span-1" />
            <div className="md:flex md:items-center md:gap-2 md:col-span-2">
              <h3 className="">EDIT & DELETE</h3>
              <h3 className="hidden md:block">ARTICLE</h3>
            </div>
          </Link>

          <Link
            href={"/"}
            className="grid justify-items-center md:grid-cols-3 md:gap-4 hover:bg-blue-950 md:p-3 transition-all duration-300 ease-in-out rounded-full border-4 border-white w-20 h-20 -top-14 left-navcontainermd items-center justify-center p-2 text-xs absolute bottom-20 text-white  bg-primary md:hidden"
          >
            <h3 className="">ARTICLES</h3>
          </Link>
        </div>
      </div>
    </nav>
  );
}
