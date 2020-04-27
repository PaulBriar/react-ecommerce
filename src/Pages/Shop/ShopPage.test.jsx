import React from "react";
import { render } from "@testing-library/react";

import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "../../redux/reducers";
import ShopPage from "./ShopPage";

const store = createStore(rootReducer);

test("Render the Shop page", () => {
  const { container } = render(
    <Provider store={store}>
      <ShopPage />
    </Provider>
  );
  expect(container).toBeInTheDocument();
});
