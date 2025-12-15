import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Ultra-aggressive badge hiding
const removeAllBadges = () => {
  // Remove by ID patterns
  document.querySelectorAll('[id*="badge"], [id*="lovable"], [id*="logo"], [id*="widget"]').forEach((el: Element) => {
    const id = (el as HTMLElement).id || '';
    if (id.includes('lovable') || id.includes('badge') || id.includes('widget')) {
      console.log('Removed element with id:', id);
      el.remove();
    }
  });

  // Remove by class patterns
  document.querySelectorAll('[class*="badge"], [class*="lovable"], [class*="widget"]').forEach((el: Element) => {
    const className = (el as HTMLElement).className || '';
    if (
      className.includes('lovable') || 
      className.includes('badge') || 
      className.includes('widget') ||
      className.includes('floating')
    ) {
      console.log('Removed element with class:', className);
      el.remove();
    }
  });

  // Remove by data attributes
  document.querySelectorAll('[data-lovable], [data-badge], [data-widget]').forEach((el: Element) => {
    console.log('Removed element with data attribute');
    el.remove();
  });

  // Remove floating elements positioned in corners
  document.querySelectorAll('div, span, iframe').forEach((el: HTMLElement) => {
    const style = window.getComputedStyle(el);
    if (
      style.position === 'fixed' &&
      (style.bottom !== 'auto' || style.right !== 'auto') &&
      (el.offsetHeight < 100 && el.offsetWidth < 100)
    ) {
      // Likely a floating badge
      if (el.innerHTML && !el.innerHTML.includes('PharmaX') && !el.innerHTML.includes('root')) {
        console.log('Removed floating element');
        el.remove();
      }
    }
  });
};

// Run immediately
removeAllBadges();

// Monitor for DOM changes
const observer = new MutationObserver(() => {
  removeAllBadges();
});
observer.observe(document.documentElement, { childList: true, subtree: true, attributes: true });

// Also check periodically in case something loads late
setInterval(removeAllBadges, 1000);

// Remove on window load
window.addEventListener('load', removeAllBadges);

createRoot(document.getElementById("root")!).render(<App />);
