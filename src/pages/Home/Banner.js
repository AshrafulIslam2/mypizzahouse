import React from "react";
import { Link } from "react-router-dom";
import customer1 from "./../../image/customer1.png";
import customer2 from "./../../image/customer2.png";
import customer3 from "./../../image/customer3.png";
import "./banner.css";

const Banner = () => {
  return (
    <section className="bg-gray-800 text-gray-100 bgimg">
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-5xl font-bold font-mono leading-none sm:text-6xl">
            WEllCOME <br />
            <span className="text-blue-400">PARTY PIZZA</span>{" "}
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12">
            You Love Give World Best
            <br className="hidden md:inline lg:hidden" />
            Testy Tender and Juicy Pizza ,We belive if you will eat Onece you
            want more and more
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <Link
              rel="noopener noreferrer"
              href="#"
              className="px-8 py-3 homebtn text-lg font-bold rounded bg-blue-400 text-white"
            >
              Add Review
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-80 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          {/* <img
            src={banner}
            alt=""
            className="object-contain rounded-2xl shadow-2xl h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
          /> */}
          <div className="carousel carousel-center max-w-lg  p-4 space-x-4 bg-neutral rounded-box">
            <div className="carousel-item">
              <img src={customer1} className="rounded-box" alt="" />
            </div>
            <div className="carousel-item">
              <img src={customer2} alt="" className="rounded-box" />
            </div>
            <div className="carousel-item">
              <img src={customer3} alt="" className="rounded-box" />
            </div>
            <div className="carousel-item">
              <img src={customer1} alt="" className="rounded-box" />
            </div>
            <div className="carousel-item">
              <img src={customer2} alt="" className="rounded-box" />
            </div>
            <div className="carousel-item">
              <img src={customer3} alt="" className="rounded-box" />
            </div>
            <div className="carousel-item">
              <img src={customer1} alt="" className="rounded-box" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
