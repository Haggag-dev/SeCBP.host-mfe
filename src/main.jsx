import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./Input.css";
import AppRoutes from "./AppRoutes";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppRoutes />
  </StrictMode>
);
