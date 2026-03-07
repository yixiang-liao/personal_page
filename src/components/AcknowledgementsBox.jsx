import React from "react";

const AcknowledgementsBox = ({ image, name, tags, onClick }) => {
  return (
    <div
      className="acknowledgements-box"
      onClick={onClick}
      style={{ cursor: "pointer" }}
    >
      <img src={image} alt={name} />
      <div className="acknowledgements-text">
        <h3>{name}</h3>
        <div className="tags">
          <span className="tag">
            {tags.map((tag, i) => `#${tag}`).join("、")}
          </span>
        </div>
      </div>
    </div>
  );
};

export default AcknowledgementsBox;
