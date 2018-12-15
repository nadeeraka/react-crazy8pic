import React, { Component } from "react";
import axios from "axios";
import uuid from "uuid";
import E_Modal from "./error";
const API_KEY = "2531892-4cdfe45a284aadca5232e3015";
class MyInput extends Component {
  state = {
    keyWord: "",
    data: [],
    error: false
  };
  componentDidMount() {
    console.log("did mount");
  }
  componentDidUpdate() {
    console.log("component did update");
  }
  onSubmit = e => {
    e.preventDefault();
    let value = e.target.elements.data.value.trim();
    if (value) {
      let URL =
        "https://pixabay.com/api/?key=" +
        API_KEY +
        "&q=" +
        encodeURIComponent(value);
    } else {
      //modal
      this.setState({ error: true });
    }
  };
  onToggle = () => {
    this.setState({ error: false });
  };

  render() {
    return (
      <>
        <E_Modal error={this.state.error} onToggle={this.onToggle} />
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8">
            <form className="card card-sm" onSubmit={this.onSubmit}>
              <div className="card-body row no-gutters align-items-center">
                <div className="col-auto">
                  <i className="fas fa-search h4 text-body" />
                </div>
                <div className="col">
                  <input
                    className="form-control form-control-lg form-control-borderless"
                    type="search"
                    name="data"
                    placeholder="Search Name or keywords"
                  />
                </div>

                <div className="col-auto">
                  <button className="btn btn-lg btn-success" type="submit">
                    Search
                  </button>
                </div>
                {this.state.data}
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}
export default MyInput;
