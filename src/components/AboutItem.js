import * as React from "react";

export const AboutItem = ({ i, item }) => {
  return (
    <div className="col-md-4">
      <h4>{item.title}</h4>
      <h6>{item.description}</h6>
      <h6>{item.listTitle}</h6>
      <ul className="skillsList">
        {
          item.list.map((item, i) => (
            <li key={i}>{item}</li>
          ))
        }
      </ul>
    </div>
  );
};
