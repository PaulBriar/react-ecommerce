import React from "react";
import { render } from "@testing-library/react";

import CollectionPreview from "./CollectionPreview";

test("Render Preview Collection", () => {
  const { container } = render(<CollectionPreview />);
  expect(container).toBeInTheDocument();
});
