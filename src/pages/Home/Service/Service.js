import React, { useContext, useEffect, useState } from "react";
import { authContext } from "../../../AuthProvider/AuthProvider";
import Allservice from "./Allservice";

const Service = () => {
  const [allservices, SetService] = useState([]);
  const { loader, setLodaer } = useContext(authContext);
  console.log(loader);

  useEffect(() => {
    fetch("http://localhost:4000/api/services")
      .then((res) => res.json())
      .then((data) => SetService(data));
  }, []);
  console.log(allservices);
  return (
    <div className="grid grid-cols-2 gap-10">
      {allservices.map((service) => (
        <Allservice service={service}></Allservice>
      ))}
    </div>
  );
};

export default Service;
