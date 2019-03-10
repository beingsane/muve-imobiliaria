import React, { Component } from "react";
import "./style.css";

const Breadcrumb = (props) => {
  return(
            <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item active crumbs" aria-current="page">Home</li>
                <li className="breadcrumb-item active crumbs" aria-current="page">Two</li>
            </ol>
            </nav>

    )
}

export default Breadcrumb;
