import { createRoot } from "react-dom/client";
import { ThemeProvider } from "next-themes";
import "./i18n.ts"; // <-- Agregas esta línea aquí
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
    <App />
  </ThemeProvider>
);
