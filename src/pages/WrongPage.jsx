import React from "react";
import { Link } from "react-router-dom";
export default function WrongPage() {
  return (
    <div className="sadPath">
      <h1>wrong page</h1>
      <Link to="/">Back to Home Page</Link>
    </div>
  );
}
