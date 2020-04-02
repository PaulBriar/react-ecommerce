import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import HomePage from "./HomePage";

test("Rendering the HomePage", () => {
  const { container } = render(
    <BrowserRouter>
      <HomePage />
    </BrowserRouter>
  );
  expect(container).toBeInTheDocument();
});
