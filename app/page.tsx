import React from "react";
import Company from "../pages/Company";
import Button from "@/components/Button";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import { Inter } from "@next/font/google";
import { IoMdCafe } from "react-icons/io";
import { FaEye, FaSave } from "react-icons/fa";
import Banner from "@/components/Image";

const inter = Inter({ subsets: ["latin"], weight: ["400", "700"] });

export default function Page() {
  return (
    <div className={inter.className}>
      <Header />
      Họ và tên : Phạm Văn Minh
      <Company />
      <Button />
      <br />
      Danh sách các icon
      <span>
        <IoMdCafe />
      </span>
      <span>
        <FaEye />
      </span>
      <span>
        <FaSave />
      </span>
      <Footer />
      <div>
        <header>
          <p className="w-full h-10 bg-gray-500 flex justify-center items-center">
            Header
          </p>
        </header>
        <menu className="flex w-full">
          <div className="w-[20%] h-[100vh] bg-blue-300 flex justify-center items-center">
            Menu
          </div>
          <div className="w-[80%] flex justify-center items-center flex-col bg-red-600">
            <div className="w-[90%] h-[75%] flex justify-center items-center bg-white">
              Main
            </div>
            <div className=" bg-slate-400 w-[90%] flex justify-center items-center h-[15%]">
              Footer
            </div>
          </div>
        </menu>
      </div>
      <div>
        <Banner></Banner>
      </div>
    </div>
  );
}
