import "./MyRequests.css";

function MyRequests({ onBack }) {
  return (
    <div className="requests-page">

      {/* HEADER */}
      <header className="requests-header">

        <div className="requests-logo">
          <div className="requests-logo-icon">✚</div>

          <span>
            TriageCare <b>AI</b>
          </span>
        </div>

        <button
          className="requests-back"
          onClick={onBack}
        >
          ← Back to Dashboard
        </button>

      </header>


      {/* MAIN */}
      <main className="requests-container">

        <div className="requests-title">

          <span className="requests-badge">
            📋 PATIENT REQUESTS
          </span>

          <h1>
            My Requests
          </h1>

          <p>
            View and track your submitted symptom requests
            and their current status.
          </p>

        </div>


        {/* SUMMARY */}
        <section className="request-summary">

          <div className="summary-card">
            <span>Total Requests</span>
            <strong>3</strong>
          </div>

          <div className="summary-card">
            <span>Completed</span>
            <strong className="green-text">2</strong>
          </div>

          <div className="summary-card">
            <span>Pending</span>
            <strong className="orange-text">1</strong>
          </div>

        </section>


        {/* REQUEST LIST */}
        <section className="requests-list">

          <div className="request-item">

            <div className="request-item-icon heart">
              ♥
            </div>

            <div className="request-details">

              <h3>
                Chest discomfort
              </h3>

              <p>
                Request #TC-1024
              </p>

              <small>
                Submitted Today
              </small>

            </div>

            <div className="request-department">
              Cardiology
            </div>

            <span className="request-status pending-status">
              Pending Review
            </span>

          </div>


          <div className="request-item">

            <div className="request-item-icon bone">
              🦴
            </div>

            <div className="request-details">

              <h3>
                Knee pain
              </h3>

              <p>
                Request #TC-1021
              </p>

              <small>
                Submitted Yesterday
              </small>

            </div>

            <div className="request-department">
              Orthopedics
            </div>

            <span className="request-status completed-status">
              Completed
            </span>

          </div>


          <div className="request-item">

            <div className="request-item-icon skin">
              ◉
            </div>

            <div className="request-details">

              <h3>
                Skin irritation
              </h3>

              <p>
                Request #TC-1018
              </p>

              <small>
                Submitted 3 days ago
              </small>

            </div>

            <div className="request-department">
              Dermatology
            </div>

            <span className="request-status completed-status">
              Completed
            </span>

          </div>

        </section>


        <div className="requests-note">
          🔒 Your medical requests are securely handled.
        </div>

      </main>

    </div>
  );
}

export default MyRequests;