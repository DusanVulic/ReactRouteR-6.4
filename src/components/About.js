import React, { useState } from "react";
import { Navigate } from "react-router-dom";

const About = () => {
  const [user, setUser] = useState(" we have user");

  if (!user) {
    return <Navigate to="/" replace={true} />;
  }

  return (
    <section className="about">
      <h3>About us </h3>
      <div className="content">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui
          provident consequuntur vel omnis quisquam rem harum, maxime expedita,
          ullam ut dolore! Distinctio eos minima voluptatum totam id hic!
          Sapiente debitis quia illum officia obcaecati provident nulla odio
          molestiae suscipit quasi.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui
          provident consequuntur vel omnis quisquam rem harum, maxime expedita,
          ullam ut dolore! Distinctio eos minima voluptatum totam id hic!
          Sapiente debitis quia illum officia obcaecati provident nulla odio
          molestiae suscipit quasi.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui
          provident consequuntur vel omnis quisquam rem harum, maxime expedita,
          ullam ut dolore! Distinctio eos minima voluptatum totam id hic!
          Sapiente debitis quia illum officia obcaecati provident nulla odio
          molestiae suscipit quasi.
        </p>
      </div>
      <button onClick={() => setUser(null)}> Logout/ remove user </button>
      <p>{user}</p>
    </section>
  );
};

export default About;
