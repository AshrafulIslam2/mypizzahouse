import React from "react";
import { useLoaderData } from "react-router-dom";

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
        <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
          <img
            src="https://source.unsplash.com/random/300x300/?1"
            alt=""
            className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
          />
          <div className="mt-6 mb-2">
            <span className="block text-xs font-medium tracking-widest uppercase dark:text-blue-400">
              Quisque
            </span>
            <h2 className="text-xl font-semibold tracking-wide">
              Nam maximus purus
            </h2>
          </div>
          <p className="dark:text-gray-100">
            Mauris et lorem at elit tristique dignissim et ullamcorper elit. In
            sed feugiat mi. Etiam ut lacinia dui.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SigleService;
