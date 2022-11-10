import React, { useContext } from "react";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import { authContext } from "../../AuthProvider/AuthProvider";
import UseSetTile from "../../Hooks/UseSetTitle";

const Addreviews = () => {
  const navigate = useNavigate();
  const location = useLocation();
  UseSetTile("Add review");
  const from = location.state?.from?.pathname || "/service";
  const { user } = useContext(authContext);
  const { _id, img, title } = useLoaderData();
  const handlereview = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.placeholder;
    const service = form.service.placeholder;
    const rating = form.rating.value;
    const review = form.review.value;
    const allreview = {
      name,
      email,
      service,
      rating,
      review,
      img,
      title,
    };
    fetch("https://my-pizza-house-server-side.vercel.app/api/reviews", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(allreview),
    })
      .then((res) => res.json())
      .then((data) => {
        form.reset();
        console.log(data);
        navigate(from, { replace: true });
      })
      .catch((err) => console.error(err));
  };
  return (
    <section className="p-6 text-amber-600">
      <div className="text-center text-4xl font-bold  leading-loose tracking-widest">
        <h1> {title}</h1>
        <img className="mx-auto my-4" src={img} alt="" width={200} srcset="" />
      </div>
      <form
        className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow bg-gray-900 ng-untouched ng-pristine ng-valid"
        onSubmit={handlereview}
      >
        <h2 className="w-full text-3xl font-bold leading-tight">
          Add Your Desire Review
        </h2>
        <div>
          <label for="name" className="block mb-1 ml-1">
            Your Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Your name"
            name="name"
            required=""
            className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-blue-400 bg-gray-800"
          />
        </div>
        <div>
          <label for="email" className="block mb-1 ml-1">
            Email
          </label>
          <input
            id="email"
            type="text"
            placeholder={user.email}
            readOnly
            required=""
            name="email"
            className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-blue-400 bg-gray-800"
          />
        </div>
        <div>
          <label for="email" className="block mb-1 ml-1">
            Service
          </label>
          <input
            id="service"
            type="text"
            placeholder={_id}
            readOnly
            required=""
            name="service"
            className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-blue-400 bg-gray-800"
          />
        </div>
        <div>
          <label for="rating" className="block mb-1 ml-1">
            Rating
          </label>
          <input
            id="rating"
            type="text"
            placeholder="rating"
            required=""
            name="rating"
            className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-blue-400 bg-gray-800"
          />
        </div>
        <div>
          <label for="description" className="block mb-1 ml-1">
            Your Review
          </label>
          <textarea
            id="review"
            type="text"
            name="review"
            placeholder="your opinion..."
            className="block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-blue-400 bg-gray-800"
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 bg-blue-400 focus:ring-blue-400 hover:ring-blue-400 text-gray-900"
          >
            Send
          </button>
        </div>
      </form>
    </section>
  );
};

export default Addreviews;
