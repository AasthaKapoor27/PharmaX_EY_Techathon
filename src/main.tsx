import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Aggressively hide all Lovable elements
const hideAllLovaBleBadges = () => {
  // Hide by ID
  const badge = document.getElementById("lovable-badge");
  if (badge) {
    badge.remove();
  }

  // Hide by attribute selectors
  document.querySelectorAll('[data-lovable-widget], [data-lovable], .lovable-badge').forEach(el => {
    (el as HTMLElement).remove();
  });

  // Override any inline styles trying to show it
  const style = document.createElement('style');
  style.textContent = `
    #lovable-badge, [data-lovable-widget], [data-lovable], .lovable-badge {
      display: none !important;
      visibility: hidden !important;
      width: 0 !important;
      height: 0 !important;
      overflow: hidden !important;
      pointer-events: none !important;
    }
  `;
  document.head.appendChild(style);
};

// Hide on initial load
hideAllLovaBleBadges();

// Monitor for any injected badges and remove them immediately
const observer = new MutationObserver(() => hideAllLovaBleBadges());
observer.observe(document.body, { childList: true, subtree: true, attributes: true });

// Also run cleanup on window load
window.addEventListener('load', hideAllLovaBleBadges);

createRoot(document.getElementById("root")!).render(<App />);
