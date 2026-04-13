import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import App from "./root";

const container = document.getElementById("root")!;

const rootElement = (
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);

// Only hydrate if there is existing HTML content in the container
if (container.hasChildNodes() && container.innerHTML.trim() !== "") {
  hydrateRoot(container, rootElement);
} else {
  createRoot(container).render(rootElement);
}
