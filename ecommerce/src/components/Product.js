import React from "react";

export default function ProductCard(props) {
  const { name } = props.name;
  return (
    <div>
      <h1>product name : {name} </h1>
    </div>
  );
}
