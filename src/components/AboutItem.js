import * as React from "react";

export const AboutItem = ({ i, item }) => {
  return (
    <div className="col-sm-4">
      <div className="aboutCard p-4">
        <div className="card p-3">
          <h4>{item.title}</h4>
          <p>{item.description}</p>
          <h6>{item.subTitle}</h6>
          <p>{item.subDescription}</p>
          <h6>{item.listTitle}</h6>
          <ul className="skillsList">
            {
              item.list.map((item, i) => (
                <li key={i}>{item}</li>
              ))
            }
          </ul>
        </div>
      </div>
    </div>
  );
};
