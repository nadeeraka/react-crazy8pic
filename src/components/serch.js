import React from "react";
import { Jumbotron } from "reactstrap";
import MyInput from "./input";
const SearchBar = () => (
  <div>
    <Jumbotron>
      <h1 className="display-3">Search Pics</h1>
      <p className="lead">hey! search your needs hear</p>
      <hr className="my-2" />

      <MyInput />
    </Jumbotron>
  </div>
);

export default SearchBar;
