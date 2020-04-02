import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter, Router } from "react-router-dom";

import Directory from "./Directory";

test("renders the directory", () => {
  const { container } = render(
    <BrowserRouter>
      <Directory />
    </BrowserRouter>
  );
  expect(container).toBeInTheDocument();
  expect(container.firstChild).toBeInTheDocument('<h1 class="title">HATS</h1>');
});
