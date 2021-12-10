import React from "react";

const FullName = ({ name }) => {
  return (
    <div>
      <h1
        style={{
          backgroundColor: "green",
          borderRadius: "20px",
          margin: "0 auto",
          padding: "50px",
          fontFamily : "Arial",
          fontSize : "50px",
          color : "white",
          
        }}
      >
        Player Name : {name.fullName}
      </h1>
    </div>
  );
};

export default FullName;
