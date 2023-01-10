import React from "react";
import { useParams, useLoaderData } from "react-router-dom";

const CareerDetail = () => {
  const { id } = useParams();

  const career = useLoaderData();
  return (
    <div className="carrer-details">
      <h3>CareerDetail for {career.title}</h3>
      <p>starting salary {career.salary}</p>
      <p>location :{career.location}</p>
      <div className="details">lorem10</div>
    </div>
  );
};

export default CareerDetail;

///loader function

export const carrerDetailsLoader = async ({ params }) => {
  const { id } = params;

  const res = await fetch("http://localhost:4000/careers/" + id);

  return res.json();
};
