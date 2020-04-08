import React from "react";
import Categories from "../../Containers/Categories/Categories";
import ErrorBoundary from "react-error-boundary";

import "./HomePage.styles.scss";

const HomePage = () => {
  return (
    <div className="homepage">
      <ErrorBoundary>
        <Categories />
      </ErrorBoundary>
    </div>
  );
};

export default HomePage;
