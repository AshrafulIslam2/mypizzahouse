import React from "react";

const ReviewTable = ({ review, handleDelete }) => {
  return (
    <tbody>
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
          <span className="px-3 mx-4 py-1 font-semibold rounded-md bg-yellow-400 dark:text-gray-900">
            <button>Edit</button>
          </span>
          <span className="px-3 py-1 font-semibold rounded-md bg-red-400 dark:text-gray-900">
            <button onClick={() => handleDelete(review._id)}>Delete</button>
          </span>
        </td>
      </tr>
    </tbody>
  );
};

export default ReviewTable;
