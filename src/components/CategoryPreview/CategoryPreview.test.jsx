import React from "react";
import { render } from "@testing-library/react";

import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "../../redux/reducers";

import CategoryPreview from "./CategoryPreview";

const store = createStore(rootReducer);

const items = [
  {
    id: 1,
    name: "Brown Brim",
    imageUrl: "https://i.ibb.co/ZYW3VTp/brown-brim.png",
    price: 25
  },
  {
    id: 2,
    name: "Blue Beanie",
    imageUrl: "https://i.ibb.co/ypkgK0X/blue-beanie.png",
    price: 18
  }
];
test("Render Preview Collection", () => {
  const { container } = render(
    <Provider store={store}>
      <CategoryPreview title="hats" items={items} />
    </Provider>
  );
  expect(container).toBeInTheDocument();
});
