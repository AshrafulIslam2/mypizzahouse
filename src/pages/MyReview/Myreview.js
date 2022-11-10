import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../../AuthProvider/AuthProvider";
import ReviewTable from "./ReviewTable";

const Myreview = () => {
  const { user } = useContext(authContext);
  const [myreview, Setreview] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:4000/api/reviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => Setreview(data))
      .catch((err) => console.error(err));
  }, [user?.email]);

  const handleDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:4000/api/reviews/${id}`, {
      method: "DELETE",
    }).then((res) =>
      res.json().then((data) => {
        const remaining = myreview.filter((myrv) => myrv._id !== id);
        Setreview(remaining);
        console.log(data);
      })
    );
  };
  console.log(myreview);
  return (
    <div>
      {myreview ? (
        <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
          <h2 className="mb-4 text-2xl font-semibold leading-tight">
            Invoices
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-xs">
              <thead className="dark:bg-gray-700">
                <tr className="text-left">
                  <th className="p-3">Products Picture</th>
                  <th className="p-3">Products Name </th>
                  <th className="p-3">Review</th>
                  <th className="p-3">Rating</th>
                  <th className="p-4">Status</th>
                </tr>
              </thead>
              {myreview.map((review) => (
                <ReviewTable
                  review={review}
                  handleDelete={handleDelete}
                ></ReviewTable>
              ))}
            </table>
          </div>
        </div>
      ) : (
        <div>
          {" "}
          <h1>Nooo Reviwes Found</h1>
        </div>
      )}
    </div>
  );
};

export default Myreview;
