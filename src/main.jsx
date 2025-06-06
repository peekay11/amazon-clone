import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { StateProvider } from "./StateProvider"; // ✅ Make sure this path is correct
import reducer, { initialState } from "./reducer";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </StrictMode>
);
