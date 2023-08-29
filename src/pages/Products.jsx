import React from "react";
import ItemListContainer from "../components/ItemListContainer";
import { NavLink } from "react-router-dom";

const Products = () => {
  return (
    <div>
      <div
        className="container"
        style={{ marginTop: "15px", marginBottom: "15px" }}
      >
        <button className="btn btn-primary" style={{ marginRight: "2px" }}>
          <NavLink to={`/Category/${1}`}>Vasijas</NavLink>
        </button>
        <button className="btn btn-primary" style={{ marginRight: "2px" }}>
          <NavLink to={`/Category/${2}`}>Platos</NavLink>
        </button>
        <button className="btn btn-primary" style={{ marginRight: "2px" }}>
          <NavLink to={`/Category/${3}`}>Tazas</NavLink>
        </button>
        <button className="btn btn-primary" style={{ marginRight: "2px" }}>
          <NavLink to={`/Category/${4}`}>Jarras</NavLink>
        </button>
        <button className="btn btn-primary" style={{ marginRight: "2px" }}>
          <NavLink to={`/Category/${5}`}>Jarrones</NavLink>
        </button>
        <button className="btn btn-primary">
          <NavLink to={`/Category/${6}`}>Floreros</NavLink>
        </button>
      </div>
      <ItemListContainer />
    </div>
  );
};

export default Products;
