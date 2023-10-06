import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";

const rootNode: HTMLElement = document.getElementById("root") as HTMLElement;
const root: ReactDOM.Root = ReactDOM.createRoot(rootNode);

root.render(<App />)
