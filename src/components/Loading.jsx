import "../styles/LoadingSpinner.css";

function LoadingSpinner({
  message = "Loading...",
  fullScreen = false,
  size = "medium",
}) {
  return (
    <div
      className={`LoadingSpinner ${fullScreen ? "full-screen" : ""}`}
      role="status"
      aria-live="polite"
    >
      <div className={`spinner spinner-${size}`} aria-hidden="true" />

      {message && <p className="loading-message">{message}</p>}

      <span className="sr-only">{message || "Loading"}</span>
    </div>
  );
}

export default LoadingSpinner;
