import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import Categories from "./Categories";

test("renders the directory", () => {
  const { container } = render(
    <BrowserRouter>
      <Categories />
    </BrowserRouter>
  );
  expect(container).toBeInTheDocument();
  expect(container.firstChild).toBeInTheDocument('<h1 class="title">HATS</h1>');
});
