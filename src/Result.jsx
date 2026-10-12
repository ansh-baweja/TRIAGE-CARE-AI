import "./Result.css";

function Result({ symptoms, onBack }) {
  return (
    <div className="result-page">

      {/* HEADER */}
      <header className="result-header">

        <div className="result-logo">
          <div className="result-logo-icon">✚</div>

          <span>
            TriageCare <b>AI</b>
          </span>
        </div>

        <button
          className="result-back"
          onClick={onBack}
        >
          ← Back to Dashboard
        </button>

      </header>


      {/* MAIN CONTENT */}
      <main className="result-container">

        {/* HEADING */}
        <div className="result-heading">

          <span className="result-badge">
            ✓ AI ANALYSIS COMPLETE
          </span>

          <h1>
            Your care recommendation
          </h1>

          <p>
            Based on the symptoms you described,
            TriageCare AI has identified the most suitable
            medical department for your request.
          </p>

        </div>


        {/* YOUR SYMPTOMS */}
        <section className="symptoms-result-card">

          <div className="result-section-title">

            <div className="result-small-icon">
              🩺
            </div>

            <div>
              <span>YOUR SYMPTOMS</span>

              <h2>
                Your description
              </h2>
            </div>

          </div>

          <div className="symptoms-text">
            "{symptoms}"
          </div>

        </section>


        {/* AI RECOMMENDATION */}
        <section className="recommendation-card">

          <div className="recommendation-top">

            <div className="heart-icon">
              ♥
            </div>

            <div>

              <span>
                RECOMMENDED DEPARTMENT
              </span>

              <h2>
                Cardiology
              </h2>

              <p>
                Heart and chest-related concerns
              </p>

            </div>

          </div>


          {/* CONFIDENCE */}
          <div className="confidence-box">

            <div className="confidence-title">

              <span>
                AI MATCH CONFIDENCE
              </span>

              <strong>
                92%
              </strong>

            </div>

            <div className="confidence-bar">

              <div className="confidence-fill"></div>

            </div>

          </div>

        </section>


        {/* HUMAN REVIEW */}
        <section className="review-card">

          <div className="review-icon">
            ✓
          </div>

          <div>

            <h3>
              Pending Human Review
            </h3>

            <p>
              A healthcare staff member will review
              the AI recommendation before your request
              is finalized.
            </p>

          </div>

        </section>


        {/* BACK BUTTON */}
        <button
          className="result-dashboard-btn"
          onClick={onBack}
        >
          Return to Dashboard →
        </button>


        {/* DISCLAIMER */}
        <p className="result-note">
          🔒 AI recommendations are decision-support only
          and do not replace professional medical advice.
        </p>

      </main>

    </div>
  );
}

export default Result;