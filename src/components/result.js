import React from "react";

const Result = props => (
  <div>
    <div className="container">
      <div className="row">
        <div className="gallery col-lg-12 col-md-12 col-sm-12 col-xs-12" />

        <br />
        <div className="left">
          <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter hdpe">
            <img
              src={props.textValue.largeImageURL}
              className="img-responsive"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Result;
//
