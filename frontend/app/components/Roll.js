// Hover label that rolls up to reveal a copy of itself.
export default function Roll({ children }) {
  return (
    <span className="roll">
      <span data-text={children}>{children}</span>
    </span>
  );
}
