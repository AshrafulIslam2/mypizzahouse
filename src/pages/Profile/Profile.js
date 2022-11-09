import React from "react";

const Profile = () => {
  return (
    <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 bg-cyan-300 text-black">
      <div className="flex flex-col justify-between">
        <div className="space-y-2">
          <h2 className="text-4xl font-extrabold leading-tight lg:text-5xl">
            Let's talk!
          </h2>
          <div className="text-black-400 shadow-2xl text-fuchsia-900">
            Wellcome to your Profile
          </div>
        </div>
        <img src="assets/svg/doodle.svg" alt="" className="p-6 h-52 md:h-64" />
      </div>
      <form
        novalidate=""
        className="space-y-6 ng-untouched ng-pristine ng-valid"
      >
        <div>
          <label for="name" className="text-sm">
            Full name
          </label>
          <input
            id="name"
            type="text"
            placeholder=""
            className="w-full p-3 rounded bg-gray-800 text-white"
          />
        </div>
        <div>
          <label for="email" className="text-sm">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="w-full p-3 rounded bg-gray-800 text-white"
          />
        </div>
        <div>
          <label for="message" className="text-sm">
            Image Url
          </label>
          <input
            id="text"
            type="text"
            className="w-full p-3 rounded bg-gray-800 text-white"
          />
        </div>
        <button
          type="submit"
          className="w-full p-3 text-xl font-extrabold tracking-wide uppercase rounded bg-blue-400 text-white leading-loose "
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default Profile;
