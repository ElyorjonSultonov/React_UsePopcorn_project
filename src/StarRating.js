import React from "react";
const containStyle = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
};

const starContainerStyle = {
  display: "flex",
  gap: "4px",
  fontSize: "20px",
};

const textStyle = {
  lineHeight: "1",
  margin: "0",
  fontSize: "30px",
};

function StarRating({ maxRating }) {
  return (
    <div style={containStyle}>
      <div style={starContainerStyle}>
        {Array.from({ length: maxRating }, (_, i) => (
          <span>s{i + 1}</span>
        ))}
      </div>
      <p style={textStyle}>10</p>
    </div>
  );
}

export default StarRating;
