import React from "react";
import "./App.css";
import Like from "./components/Like";
import Blocks from "./components/Blocks";

export default function App() {
  return (
    <div className="container">
      <Blocks />
      <Like />
    </div>
  );
};
