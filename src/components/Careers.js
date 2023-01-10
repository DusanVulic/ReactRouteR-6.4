import React from "react";
import { useLoaderData, Link } from "react-router-dom";

const Careers = () => {
  const careersData = useLoaderData();

  return (
    <section className="careers">
      <h3> welcome to Careers page</h3>
      {careersData.map((data) => {
        const { id, title, salary, location } = data;

        return (
          <Link to={id.toString()} key={id}>
            <article>
              <h4>{title}</h4>
              <p>{salary} credits</p>
              <p> based in {location}</p>
            </article>
          </Link>
        );
      })}
    </section>
  );
};

export default Careers;

//loader function

export const careerLoader = async () => {
  const response = await fetch("http://localhost:4000/careers");

  if (!response.ok) {
    throw Error(
      "NO DATA AT THIS MOMENT - Please check did you run json server in VSC terminal"
    );
  }
  return response.json();
};
