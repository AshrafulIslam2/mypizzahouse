import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const SigleService = () => {
  const { _id, img, title, price, description, Size, Spicy, Slice } =
    useLoaderData();
  console.log(_id, img);
  return (
    <div className="grid grid-cols-12 ">
      <div className="col-span-9">
        <section className="dark:bg-gray-800  dark:text-gray-100 ">
          <div className="container flex flex-col-reverse mx-auto w-full  lg:flex-row">
            <div className="flex flex-col px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5 dark:bg-blue-400 dark:text-gray-900">
              <div className="flex space-x-2 sm:space-x-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="flex-shrink-0 w-6 h-6 text-green-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  ></path>
                </svg>
                <div className="space-y-2">
                  <p className="text-lg font-medium leading-snug">Price</p>
                  <p className="leading-snug ">
                    <span className="text-4xl font-bold">{price}</span> TK
                  </p>
                </div>
              </div>
              <div className="flex space-x-2 sm:space-x-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="flex-shrink-0 w-6 h-6  text-red-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  ></path>
                </svg>
                <div className="space-y-2">
                  <p className="text-lg font-medium leading-snug">
                    Spicy Level
                  </p>
                  <p className="leading-snug text-4xl font-bold">{Spicy}</p>
                </div>
              </div>
              <div className="flex space-x-2 sm:space-x-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="flex-shrink-0 w-6 h-6  text-green-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  ></path>
                </svg>
                <div className="space-y-2">
                  <p className="text-lg font-medium leading-snug">Size</p>
                  <p className="leading-snug text-5xl font-bold">{Size}</p>
                </div>
              </div>
              <div className="flex space-x-2 sm:space-x-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="flex-shrink-0 w-6 h-6  text-yellow-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  ></path>
                </svg>
                <div className="space-y-2">
                  <p className="text-lg font-medium leading-snug">Slice</p>
                  <p className="leading-snug text-5xl font-bold">{Slice}</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 xl:w-3/5 dark:bg-gray-800">
              <div className="flex items-center justify-center p-4 md:p-8 lg:p-12">
                <img
                  src={img}
                  alt=""
                  className="rounded-lg shadow-lg dark:bg-gray-500 aspect-video sm:min-h-96"
                />
              </div>
              <div className="flex space-x-2 sm:space-x-4">
                <div className="space-y-2 text-center  w-full">
                  <p className="leading-snug text-4xl font-bold text-red-600">
                    {title}
                  </p>
                </div>
              </div>

              <div className="flex space-x-2 sm:space-x-4">
                <div className="space-y-2">
                  <p className="text-lg font-medium leading-snug border-b-8 border-red-600 inline">
                    Description
                  </p>
                  <p className="leading-loose tracking-widest">{description}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="col-span-3 ">
        <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 dark:bg-gray-900 dark:text-gray-100">
          <div className="flex justify-between p-4">
            <div className="flex space-x-4">
              <div>
                <img
                  src="https://source.unsplash.com/100x100/?portrait"
                  alt=""
                  className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
                />
              </div>
              <div>
                <h4 className="font-bold">Leroy Jenkins</h4>
                <span className="text-xs dark:text-gray-400">2 days ago</span>
              </div>
            </div>
            <div className="flex items-center space-x-2 dark:text-yellow-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-5 h-5 fill-current"
              >
                <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
              </svg>
              <span className="text-xl font-bold">4.5</span>
            </div>
          </div>
          <div className="p-4 space-y-2 text-sm dark:text-gray-400">
            <p>
              Vivamus sit amet turpis leo. Praesent varius eleifend elit, eu
              dictum lectus consequat vitae. Etiam ut dolor id justo fringilla
              finibus.
            </p>
            <p>
              Donec eget ultricies diam, eu molestie arcu. Etiam nec lacus eu
              mauris cursus venenatis. Maecenas gravida urna vitae accumsan
              feugiat. Vestibulum commodo, ante sit urna purus rutrum sem.
            </p>
          </div>
        </div>
        <Link
          type="button"
          to={`/addreviews/${_id}`}
          className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md homebtn text-white"
        >
          Add Your's
        </Link>
      </div>
    </div>
  );
};

export default SigleService;
