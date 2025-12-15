import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Ensure Lovable badge is hidden
const hideLovaBleBadge = () => {
  const badge = document.getElementById("lovable-badge");
  if (badge) {
    badge.style.display = "none";
    badge.style.visibility = "hidden";
  }
};

// Hide on load and monitor for any injected badges
hideLovaBleBadge();
const observer = new MutationObserver(() => hideLovaBleBadge());
observer.observe(document.body, { childList: true, subtree: true });

createRoot(document.getElementById("root")!).render(<App />);
