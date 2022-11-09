import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../../AuthProvider/AuthProvider";

const Header = () => {
  const { user } = useContext(authContext);
  const [navbar, setnavbar] = useState(false);
  return (
    <header className="p-2 bg-gray-800 text-gray-100">
      <div className="container flex justify-between h-16 mx-auto">
        <Link
          rel="noopener noreferrer"
          href="#"
          aria-label="Back to homepage"
          className="flex items-center p-2"
          to="/"
        >
          <img
            src="https://www.partypizza.com.bd/wp-content/uploads/2019/06/PP-Logo-3-for-Website.png"
            width={200}
            alt=""
            srcset=""
          />
        </Link>
        <ul className="items-stretch hidden space-x-3 lg:flex">
          <li className="flex">
            <Link
              rel="noopener noreferrer"
              to="/"
              className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-blue-400 border-blue-400"
            >
              Home
            </Link>
          </li>
          <li className="flex">
            <Link
              rel="noopener noreferrer"
              to="/service"
              className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
            >
              Service
            </Link>
          </li>
          {user?.email && (
            <>
              <li className="flex">
                <Link
                  rel="noopener noreferrer"
                  to="/addservice"
                  className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
                >
                  Add Service
                </Link>
              </li>
              <li className="flex">
                <Link
                  rel="noopener noreferrer"
                  to="/myreview"
                  className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
                >
                  My Review
                </Link>
              </li>
            </>
          )}
          <li className="flex">
            <Link
              rel="noopener noreferrer"
              to="/myreview"
              className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
            >
              Blogs
            </Link>
          </li>
        </ul>
        <div className="items-center flex-shrink-0 hidden lg:flex">
          {user?.email ? (
            <>
              <Link className="self-center px-8 py-3 rounded">log Out</Link>
            </>
          ) : (
            <>
              {" "}
              <Link className="self-center px-8 py-3 rounded" to="/login">
                Login in
              </Link>
              <Link
                className="self-center px-8 py-3 font-semibold rounded bg-blue-400 text-gray-900"
                to="/signup"
              >
                Sign up
              </Link>
            </>
          )}
        </div>
        <div className="lg:hidden relative">
          <button className="p-4  lg:hidden" onClick={() => setnavbar(!navbar)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 text-gray-100"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
          <ul
            className={`items-stretch absolute transition ease-in-out delay-300 ${
              navbar ? "top-10 right-1" : "top-[-400px]"
            } bg-gray-800   lg:flex`}
          >
            <li className="flex">
              <Link
                rel="noopener noreferrer"
                to="/"
                className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-blue-400 dark:border-blue-400"
              >
                Home
              </Link>
            </li>
            <li className="flex">
              <Link
                rel="noopener noreferrer"
                to="/service"
                className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
              >
                Service
              </Link>
            </li>
            {user?.email && (
              <>
                <li className="flex">
                  <Link
                    rel="noopener noreferrer"
                    to="/addservice"
                    className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
                  >
                    Add Service
                  </Link>
                </li>
                <li className="flex">
                  <Link
                    rel="noopener noreferrer"
                    to="/myreview"
                    className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
                  >
                    My Review
                  </Link>
                </li>
              </>
            )}
            <li className="flex">
              <Link
                rel="noopener noreferrer"
                to="/myreview"
                className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
              >
                Blogs
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
