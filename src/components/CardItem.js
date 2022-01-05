import React from "react";

const CardItem = (props) => {
  return (
    <>
      <div class="col-sm-3 mx-2">
        <div
          class={`card border border-${props.color} bg-${props.bgcolor} text-light`}
        >
          <div class="card-body">
            <h5 className="card-title">{props.title}</h5>
            <h4>{props.number}</h4>
            <p className="card-text">{props.desc}</p>
          </div>
        </div>
      </div>
    </>
  );
};

CardItem.defaultProps = {
  number: "0",
};

export default CardItem;
