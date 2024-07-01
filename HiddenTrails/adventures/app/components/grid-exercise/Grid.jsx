"use-client";
import React from "react";

function Grid() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="col-span-1">
        <h1>Title</h1>
        <h1>Title</h1>
        <h1>Title</h1>
      </div>
      <div className="col-span-1">
        <div className="text-right">Section</div>
      </div>
    </div>
  );
}

export default Grid;
