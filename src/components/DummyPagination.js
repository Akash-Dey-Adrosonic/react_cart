import React from "react";

const DummyPagination = () => {
  return (
    <div style={{ margin: "auto", maxWidth: "60%", textAlign: "center" }}>
      <ul className="paginate">
        <li>
          <a href="#" className="first-page">
            Go To First
          </a>
        </li>
        <li>
          <a href="#" className="prev-page">
            Previous
          </a>
        </li>
        <li>
          <a href="#">Next</a>
        </li>
        <li>
          <a href="#">Go To last</a>
        </li>
      </ul>
    </div>
  );
};

export default DummyPagination;
