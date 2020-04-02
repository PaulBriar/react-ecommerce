import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

test("renders the home page", () => {
  const { container } = render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  expect(container).toBeInTheDocument();
});
