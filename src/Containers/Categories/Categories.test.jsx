import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import rootReducer from "../../redux/reducers";

import Categories from "./Categories";

const store = createStore(rootReducer);

test("renders the directory", () => {
  const { container } = render(
    <Provider store={store}>
      <BrowserRouter>
        <Categories />
      </BrowserRouter>
    </Provider>
  );
  expect(container).toBeInTheDocument();
  expect(container.firstChild).toBeInTheDocument('<h1 class="title">HATS</h1>');
});
