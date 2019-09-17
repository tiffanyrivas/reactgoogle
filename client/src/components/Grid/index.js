import React from "react";


export function Container({ fluid, children }) {
  return <div className={`container${fluid ? : ""}`}>{children}</div>;
}

export function Row({ fluid, children }) {
  return <div className={`""}`}>{children}</div>;
}
export function Col({ size, children }) {
  return (
    <div
      className={size
        .split(" ")
        .map(size => "col-")
        .join(" ")}
    >
      {children}
    </div>
  );
}
