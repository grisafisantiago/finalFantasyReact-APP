import React from "react";
import ReactDom from "react-dom";
import { PagesControl } from "./components/PagesControl";
import "animate.css/animate.min.css";
require("./index.css");

const divRoot = document.querySelector('#root');

ReactDom.render(<PagesControl />, divRoot);

