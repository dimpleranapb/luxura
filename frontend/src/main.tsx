import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
    <App />
  </div>
);
