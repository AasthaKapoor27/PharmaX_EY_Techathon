import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Safe Lovable hiding - doesn't break DOM operations
const hideAllLovaBleBadges = () => {
  // Hide by ID
  const badge = document.getElementById("lovable-badge");
  if (badge) {
    badge.remove();
  }

  // Hide by attribute selectors
  document.querySelectorAll('[data-lovable-widget], [data-lovable], .lovable-badge, [id*="lovable"], [class*="lovable"]').forEach(el => {
    (el as HTMLElement).remove();
  });
};

// Hide on initial load
hideAllLovaBleBadges();

// Monitor for any injected badges and remove them immediately
const observer = new MutationObserver(() => hideAllLovaBleBadges());
observer.observe(document.body, { childList: true, subtree: true });
observer.observe(document.head, { childList: true });

// Also run cleanup on window load
window.addEventListener('load', hideAllLovaBleBadges);

createRoot(document.getElementById("root")!).render(<App />);
