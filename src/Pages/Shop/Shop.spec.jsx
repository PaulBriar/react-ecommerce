import React from "react";
import { render } from "@testing-library/react";

import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "../../redux/reducers";
import Shop from "./Shop";

const store = createStore(rootReducer);

test("Render the Shop page", () => {
  const { container } = render(
    <Provider store={store}>
      <Shop />
    </Provider>
  );
  expect(container).toBeInTheDocument();
});
