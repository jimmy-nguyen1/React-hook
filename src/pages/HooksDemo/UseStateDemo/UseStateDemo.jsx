import React, { useState } from "react";
import DemoChonXe from "./DemoChonXe";

export default function UseStateDemo() {
  const [number, setNumber] = useState(1);
  const [like, setLike] = useState(1);

  const handleClick = () => {
    // setNumber làm 2 nv là thay đổi giá trị number = giá trị mới, và gọi lại function component chạy lại
    setNumber(number + 1);
  };
  return (
    <div className="container">
      <h3>Number: {number}</h3>
      <button
        className="btn btn-success"
        onClick={() => {
          handleClick();
        }}
      >
        +
      </button>
      <div className="card w-25 mt-2">
        <img src="https://i.pravatar.cc" alt="..." />
        <div className="card-body">
          <h3>Name: Jimmy</h3>
          <p>Age: 18</p>
          <button
            className="btn btn-danger"
            onClick={() => {
              setLike(like + 1);
            }}
          >
            {like} <i className="fa fa-heart"></i>
          </button>
        </div>
      </div>
      <hr />
      <DemoChonXe></DemoChonXe>
    </div>
  );
}
