import React from "react";
import spinner from "./Spinner-1s-200px.gif";

export default function Spinner() {
  return (
    <div className="d-flex justify-content-center mt-4 ">
    <img src={spinner} style={{width:"6%" ,background:"none"}} alt="spinner" />
  </div>
  )
}