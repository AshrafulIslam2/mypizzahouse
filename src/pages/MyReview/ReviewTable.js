import React, { useContext } from "react";
import { authContext } from "../../AuthProvider/AuthProvider";

const ReviewTable = ({ review, handleDelete, handleupdate }) => {
  const { user } = useContext(authContext);
  const handleUpdateReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const rating = form.rating.value;
    const review = form.review.value;
    const reviewid = form.reviewid.placeholder;
    console.log(reviewid);

    handleupdate(reviewid, rating, review);
    form.reset();
  };
  console.log(review);
  return (
    <tbody>
      <input type="checkbox" id="my-modal-5" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <form
            className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow bg-gray-900 ng-untouched ng-pristine ng-valid text-white"
            onSubmit={handleUpdateReview}
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
                Review Id
              </label>
              <input
                id="reviewid"
                type="text"
                placeholder={review._id}
                readOnly
                required=""
                name="reviewid"
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
          <div className="modal-action">
            <label htmlFor="my-modal-5" className="btn">
              Close
            </label>
          </div>
        </div>
      </div>
      <tr className="border-b border-opacity-20 border-gray-700 bg-gray-900">
        <td className="p-3">
          <img src={review.img} width="100" alt="" srcset="" />
        </td>
        <td className="p-3 text-white">
          <p>{review.title}</p>
        </td>
        <td className="p-3 text-white w-72">
          <p>{review.review}</p>
        </td>
        <td className="p-3 text-white">
          <p>{review.rating}</p>
        </td>
        <td className="p-3">
          <label
            htmlFor="my-modal-5"
            className="btn  font-semibold rounded-md bg-yellow-400"
          >
            EDit
          </label>
          <span className="px-3 py-4 font-semibold rounded-md bg-red-400 text-white">
            <button onClick={() => handleDelete(review._id)}>Delete</button>
          </span>
        </td>
      </tr>
    </tbody>
  );
};

export default ReviewTable;
