import { useEffect, useState } from "react";
import Banner from "./Banner";
import ServiceForHome from "./Service/ServiceForHome";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  const [service, SetServiceItem] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/api/limitservices")
      .then((res) => res.json())
      .then((data) => SetServiceItem(data));
  }, []);
  console.log(service);
  return (
    <div>
      <Banner></Banner>
      <div className="my-14">
        <h1 className="text-6xl font-bold text-center">Our Delicious PIZZA</h1>
        <p className="text-xl font-bold text-center">
          We Proivde More than 100O Differents types of pizza in our shopes
        </p>
      </div>
      <div className="grid gap-3 grid-cols-2 mx-5 my-7">
        {service.map((ser) => (
          <ServiceForHome service={ser}></ServiceForHome>
        ))}
      </div>
      <div>
        <Link
          type="button"
          to="/service"
          className="flex homebtn items-center justify-center w-96  mx-auto p-3 font-semibold tracking-wide rounded-md bg-blue-400 text-white"
        >
          See All
        </Link>
      </div>
    </div>
  );
};

export default Home;
