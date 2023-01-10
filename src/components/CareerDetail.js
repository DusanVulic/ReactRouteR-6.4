import React from "react";
import { useLoaderData } from "react-router-dom";

const CareerDetail = () => {
  const career = useLoaderData();
  return (
    <div className="carrer-details">
      <h3>CareerDetail for {career.title}</h3>
      <p>starting salary : {career.salary}</p>
      <p>location : {career.location}</p>
      <div className="details">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, sint.
      </div>
    </div>
  );
};

export default CareerDetail;

///loader function

export const carrerDetailsLoader = async ({ params }) => {
  const { id } = params;

  const res = await fetch("http://localhost:4000/careers/" + id);

  if (!res.ok) {
    throw Error("could not found that specific career");
  }

  return res.json();
};
