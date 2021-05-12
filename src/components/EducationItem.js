import * as React from "react";

export const EducationItem = ({ i, item }) => {
  return (
    <div className="col-md-6">
      <h4>{item.name}</h4>
      <h6>{item.degreeType}</h6>
      <h5>{item.specialization}</h5>
      <h6>{item.listTitle}</h6>
      <div className="row">
        <div className="col-6">
          <p>{item.startMonth} {item.startYear}</p>
        </div>
        <div className="col-6">
          <p>{item.endMonth} {item.endYear}</p>
        </div>
      </div>
    </div>
  );
};
