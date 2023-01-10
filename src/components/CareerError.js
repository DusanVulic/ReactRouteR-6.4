import React from "react";
import { Link, useRouteError } from "react-router-dom";

const CareerError = () => {
  const error = useRouteError();

  return (
    <div className="career-error">
      <h2> Rrror</h2>
      <p> {error.message}</p>
      <Link to="/"> Back top home page</Link>
    </div>
  );
};

export default CareerError;
