import React from "react";

import { Outlet } from "react-router-dom";

const CareerLayout = () => {
  return (
    <div>
      <h3> CareerLayout page</h3>
      <Outlet />
    </div>
  );
};

export default CareerLayout;
