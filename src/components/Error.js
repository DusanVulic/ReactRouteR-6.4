import React from "react";

import { Link } from "react-router-dom";
const Error = () => {
  return (
    <div>
      <h1>404</h1>
      <h3>OOooooooops..... page not found </h3>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est temporibus
        fugiat adipisci rerum accusantium velit ipsum, in voluptate laudantium
        nesciunt.
      </p>
      <Link to="/" className="error-link">
        <button className="error-btn">go back home</button>
      </Link>
    </div>
  );
};

export default Error;
