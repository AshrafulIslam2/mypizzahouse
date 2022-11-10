import React from "react";

const Blogs = () => {
  return (
    <div className="grid grid-cols-2 gap-4 mx-10 my-10">
      <div className="max-w-lg p-6 overflow-hidden rounded-lg shadow dark:bg-gray-900 dark:text-gray-100">
        <article>
          <h2 className="text-xl font-bold">
            Difference between SQL and NoSQL
          </h2>
          <p className="mt-4 dark:text-gray-400">
            SQL is the programming language used to interface with relational
            databases. (Relational databases model data as records in rows and
            tables with logical links between them). NoSQL is a class of DBMs
            that are non-relational and generally do not use SQL.
          </p>
          <div className="flex items-center mt-8 space-x-4">
            <img
              src="https://source.unsplash.com/100x100/?portrait"
              alt=""
              className="w-10 h-10 rounded-full dark:bg-gray-500"
            />
            <div>
              <h3 className="text-sm font-medium">Leroy Jenkins</h3>
              <time
                datetime="2021-02-18"
                className="text-sm dark:text-gray-400"
              >
                Feb 18th 2021
              </time>
            </div>
          </div>
        </article>
      </div>
      <div className="max-w-lg p-6 overflow-hidden rounded-lg shadow dark:bg-gray-900 dark:text-gray-100">
        <article>
          <h2 className="text-xl font-bold">
            What is JWT, and how does it work?
          </h2>
          <p className="mt-4 dark:text-gray-400">
            JSON Web Token (JWT) is an open standard (RFC 7519) for securely
            transmitting information between parties as JSON object. It is
            compact, readable and digitally signed using a private key/ or a
            public key pair by the Identity Provider(IdP). So the integrity and
            authenticity of the token can be verified by other parties involved.
          </p>
          <div className="flex items-center mt-8 space-x-4">
            <img
              src="https://source.unsplash.com/100x100/?portrait"
              alt=""
              className="w-10 h-10 rounded-full dark:bg-gray-500"
            />
            <div>
              <h3 className="text-sm font-medium">Leroy Jenkins</h3>
              <time
                datetime="2021-02-18"
                className="text-sm dark:text-gray-400"
              >
                Feb 18th 2021
              </time>
            </div>
          </div>
        </article>
      </div>
      <div className="max-w-lg p-6 overflow-hidden rounded-lg shadow dark:bg-gray-900 dark:text-gray-100">
        <article>
          <h2 className="text-xl font-bold">
            What is the difference between javascript and Node JS
          </h2>
          <p className="mt-4 dark:text-gray-400">
            JavaScript is a simple programming language that can be used with
            any browser that has the JavaScript Engine installed. Node. js, on
            the other hand, is an interpreter or execution environment for the
            JavaScript programming languag
          </p>
          <div className="flex items-center mt-8 space-x-4">
            <img
              src="https://source.unsplash.com/100x100/?portrait"
              alt=""
              className="w-10 h-10 rounded-full dark:bg-gray-500"
            />
            <div>
              <h3 className="text-sm font-medium">Leroy Jenkins</h3>
              <time
                datetime="2021-02-18"
                className="text-sm dark:text-gray-400"
              >
                Feb 18th 2021
              </time>
            </div>
          </div>
        </article>
      </div>
      <div className="max-w-lg p-6 overflow-hidden rounded-lg shadow dark:bg-gray-900 dark:text-gray-100">
        <article>
          <h2 className="text-xl font-bold">
            How does Node JS handle multiple requests at the same time?
          </h2>
          <p className="mt-4 dark:text-gray-400">
            Nodes main JavaScript thread uses an event loop. When multiple
            requests are made, the first is processed while the rest are blocked
            (until the first is complete). Each request is processed one loop at
            a time until theyre all processed. The loop executes very quickly
            and you kind of have to go out of your way to create apps that
            block. Theres an important caveat to this: user requests (like web
            requests) are not the same as function requests. Multiple users can
            submit requests and theyll be processed within nanoseconds of each
            other (not noticeable without tooling). This differs from a process
            calling the same function/memory space at the same time.
          </p>
          <div className="flex items-center mt-8 space-x-4">
            <img
              src="https://source.unsplash.com/100x100/?portrait"
              alt=""
              className="w-10 h-10 rounded-full dark:bg-gray-500"
            />
            <div>
              <h3 className="text-sm font-medium">Leroy Jenkins</h3>
              <time
                datetime="2021-02-18"
                className="text-sm dark:text-gray-400"
              >
                Feb 18th 2021
              </time>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Blogs;
