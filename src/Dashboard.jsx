import "./Dashboard.css";

function Dashboard({ onLogout, onStartCheck }) {
  return (
    <div className="dashboard-page">

      {/* SIDEBAR */}
      <aside className="sidebar">

        <div className="dashboard-logo">
          <div className="dashboard-logo-icon">✚</div>
          <span>
            TriageCare <b>AI</b>
          </span>
        </div>

        <div className="sidebar-menu">
             <button className="menu-item">
   <span>📋</span>
  My Requests
</button>

          <button className="menu-item active">
            <span>⌂</span>
            Dashboard
          </button>

          <button
            className="menu-item"
            onClick={onStartCheck}
          >
            <span>🩺</span>
            Symptom Check
          </button>

          <button className="menu-item">
            <span>📋</span>
            My Requests
          </button>

          <button className="menu-item">
            <span>👤</span>
            Profile
          </button>

        </div>

        <button
          className="logout-btn"
          onClick={onLogout}
        >
          ↪ Logout
        </button>

      </aside>


      {/* MAIN CONTENT */}
      <main className="dashboard-main">

        {/* TOP BAR */}
        <header className="dashboard-header">

          <div>
            <p className="welcome-small">
              PATIENT PORTAL
            </p>

            <h1>
              Good Morning 👋
            </h1>
          </div>

          <div className="profile-circle">
            P
          </div>

        </header>


        {/* WELCOME CARD */}
        <section className="welcome-card">

          <div className="welcome-content">

            <span className="dashboard-badge">
              ✨ AI-Powered Care
            </span>

            <h2>
              How are you feeling today?
            </h2>

            <p>
              Describe your symptoms in your own words.
              TriageCare AI will help identify the most suitable
              medical department for your request.
            </p>

            <button
              className="start-check-btn"
              onClick={onStartCheck}
            >
              Start Symptom Check →
            </button>

          </div>

          <div className="welcome-icon">
            🩺
          </div>

        </section>


        {/* QUICK STATS */}
        <section className="stats-grid">

          <div className="stat-card">

            <div className="stat-icon blue">
              📋
            </div>

            <div>
              <span>Total Requests</span>
              <strong>3</strong>
            </div>

          </div>


          <div className="stat-card">

            <div className="stat-icon green">
              ✓
            </div>

            <div>
              <span>Completed</span>
              <strong>2</strong>
            </div>

          </div>


          <div className="stat-card">

            <div className="stat-icon orange">
              ⏳
            </div>

            <div>
              <span>Pending</span>
              <strong>1</strong>
            </div>

          </div>

        </section>


        {/* REQUESTS */}
        <section className="requests-section">

          <div className="section-title">

            <div>
              <h2>
                Recent Requests
              </h2>

              <p>
                Track your submitted symptom requests.
              </p>
            </div>

            <button className="view-all">
              View All
            </button>

          </div>


          <div className="request-card">

            <div className="request-icon">
              ♥
            </div>

            <div className="request-info">

              <h3>
                Chest discomfort
              </h3>

              <p>
                Request #TC-1024 · Today
              </p>

            </div>

            <div className="request-department">
              Cardiology
            </div>

            <div className="status pending">
              Pending Review
            </div>

          </div>


          <div className="request-card">

            <div className="request-icon bone">
              🦴
            </div>

            <div className="request-info">

              <h3>
                Knee pain
              </h3>

              <p>
                Request #TC-1021 · Yesterday
              </p>

            </div>

            <div className="request-department">
              Orthopedics
            </div>

            <div className="status completed">
              Completed
            </div>

          </div>

        </section>


        {/* AI INFO */}
        <section className="ai-info">

          <div className="ai-info-icon">
            ✦
          </div>

          <div>

            <h3>
              How TriageCare AI helps
            </h3>

            <p>
              Our AI analyzes the meaning of your symptoms
              and compares them with department information.
              A healthcare staff member always reviews the recommendation.
            </p>

          </div>

        </section>

      </main>

    </div>
  );
}

export default Dashboard;