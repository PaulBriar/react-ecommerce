import React from "react";
import { render } from "@testing-library/react";

import Shop from "./Shop";

test("Render the Shop page", () => {
  const { container } = render(<Shop />);
  expect(container).toBeInTheDocument();
});
