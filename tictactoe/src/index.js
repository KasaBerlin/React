import React from "react";
import ReactDOM from "react-dom";

import registerServiceWorker from "./registerServiceWorker";

import "./styles/index.css";

// ==========================
// Components
// ==========================

import Game from "./components/game";

// ========================================

ReactDOM.render(<Game />, document.getElementById("root"));
registerServiceWorker();
