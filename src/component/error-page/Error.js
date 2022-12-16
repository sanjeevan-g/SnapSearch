import "./error.scss";

export default function Error({content}) {

  return (
    <div className="error-page">
      <span className="material-symbols-outlined icon">
        sentiment_dissatisfied
      </span>
      <p className="error-message">
        {content}
      </p>
    </div>
  );
}
