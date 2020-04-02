import React from "react";
import MenuItem from "../../components/MenuItem/MenuItem";

import { sections } from "./data";

import "./Directory.styles.scss";

const Directory = () => {
  return (
    <div className="directory-menu">
      {sections &&
        sections.map(({ id, ...rest }) => <MenuItem key={id} {...rest} />)}
    </div>
  );
};

export default Directory;
