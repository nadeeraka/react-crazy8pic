import React from "react";
import { Jumbotron } from "reactstrap";
import MyInput from "./input";
const SearchBar = () => (
  <div>
    <Jumbotron>
      <h3>hey! search your needs bellow</h3>
      <hr className="my-2" />

      <MyInput />
    </Jumbotron>
  </div>
);

export default SearchBar;
