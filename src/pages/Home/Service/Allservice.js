import React from "react";
import { Link } from "react-router-dom";

const Allservice = ({ service }) => {
  const { img, title, description, _id } = service;
  return (
    <div className="max-w-lg mx-auto my-10 rounded-md shadow-md bg-gray-800 text-gray-100">
      <img
        src={img}
        alt=""
        className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
      />
      <div className="flex flex-col justify-between p-6 space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold tracking-wide">{title}</h2>
          <p className="text-white">{description.slice(0, 70)}...</p>
        </div>
        <Link
          type="button"
          className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md homebtn text-white"
          to={`/service/${_id}`}
        >
          Read more
        </Link>
      </div>
    </div>
  );
};

export default Allservice;
