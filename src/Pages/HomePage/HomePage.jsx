import React from "react";
import ErrorBoundary from "react-error-boundary";

import Categories from "../../Containers/Categories/Categories";
import Banner from "../../components/Banner/Banner";

import "./HomePage.styles.scss";

const HomePage = () => {
  return (
    <div className="homepage">
      <ErrorBoundary>
        <Banner />
        <Categories />
      </ErrorBoundary>
    </div>
  );
};

export default HomePage;
