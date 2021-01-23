import React from "react";
import "../Assets/css/admin-view.css";

export default function AdminView() {
  return (
    <div>
      <a href="/admin/create-product">
        <h4>Create new product</h4>
      </a>
      <lu>
        <h4>Products list</h4>
      </lu>
    </div>
  );
}
