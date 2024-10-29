import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BudgetProvider } from "./context/BudgetContext.tsx";

// Añadimos el provider para tenerlo en toda la aplicacion

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BudgetProvider>
      <App />
    </BudgetProvider>
  </StrictMode>
);
