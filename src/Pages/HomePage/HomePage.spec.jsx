import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import rootReducer from "../../redux/reducers";

import HomePage from "./HomePage";

const store = createStore(rootReducer);

test("Rendering the HomePage", () => {
  const { container } = render(
    <Provider store={store}>
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    </Provider>
  );
  expect(container).toBeInTheDocument();
});
