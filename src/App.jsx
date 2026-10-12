import { useState } from "react";
import Login from "./Login";
import Dashboard from "./Dashboard";
import SymptomCheck from "./SymptomCheck";
import Result from "./Result";
import "./App.css";
function App() {
  const [page, setPage] = useState("home");
  const [symptomsData, setSymptomsData] = useState("");

  if (page === "login") {
    return (
      <Login
        onBack={() => setPage("home")}
        onRegister={() => alert("Registration page coming soon!")}
        onLogin={() => setPage("dashboard")}
      />
    );
  }

  if (page === "dashboard") {
    return (
      <Dashboard
        onLogout={() => setPage("home")}
        onStartCheck={() => setPage("symptom")}
      />
    );
  }

  if (page === "symptom") {
    return (
      <SymptomCheck
        onBack={() => setPage("dashboard")}
        onResult={(symptoms) => {
          setSymptomsData(symptoms);
          setPage("result");
        }}
      />
    );
  }

  if (page === "result") {
    return (
      <Result
        symptoms={symptomsData}
        onBack={() => setPage("dashboard")}
      />
    );
  }

  // 👇 yahan tera existing HOME PAGE code

  // yahan tumhara existing HOME PAGE code rahega
  // =========================
  // HOME PAGE
  // =========================
  return (
    <div className="app">

      {/* ================= NAVBAR ================= */}

      <nav className="navbar">

        <div className="logo">
          <div className="logo-icon">✚</div>

          <span>
            TriageCare <b>AI</b>
          </span>
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>

          <a href="#how-it-works">
            How It Works
          </a>

          <a href="#departments">
            Departments
          </a>
        </div>

        <div className="nav-buttons">

          <button
            className="login-btn"
            onClick={() => setPage("login")}
          >
            Login
          </button>

          <button
            className="signup-btn"
            onClick={() => setPage("login")}
          >
            Get Started
          </button>

        </div>

      </nav>


      {/* ================= HERO SECTION ================= */}

      <section className="hero" id="home">

        <div className="hero-content">

          <div className="badge">
            ✨ AI-Powered Patient Care
          </div>

          <h1>
            Find the Right Care,
            <span> Faster.</span>
          </h1>

          <p>
            Describe your symptoms in your own words and
            TriageCare AI helps route your request to the
            most suitable medical department.
          </p>


          <div className="hero-buttons">

            <button
              className="primary-btn"
              onClick={() => setPage("login")}
            >
              Get Started →
            </button>

            <button className="secondary-btn">
              Learn More
            </button>

          </div>


          <div className="trust">

            <div className="avatars">
              <span>👩🏻</span>
              <span>👨🏻</span>
              <span>👩🏽</span>
            </div>

            <div>
              <strong>
                Smart & Simple
              </strong>

              <small>
                Human-reviewed AI recommendations
              </small>
            </div>

          </div>

        </div>


        {/* ================= AI CARD ================= */}

        <div className="hero-visual">

          <div className="glow"></div>

          <div className="ai-card">

            <div className="card-top">

              <div>

                <small>
                  SYMPTOM ANALYSIS
                </small>

                <h3>
                  AI Triage Assistant
                </h3>

              </div>

              <div className="ai-icon">
                ✦
              </div>

            </div>


            <div className="symptom-box">

              <span>
                Patient symptoms
              </span>

              <p>
                "I've been having chest discomfort
                and difficulty breathing."
              </p>

            </div>


            <div className="analyzing">

              <div className="pulse"></div>

              <span>
                Analyzing symptoms...
              </span>

            </div>


            <div className="result-card">

              <div className="result-icon">
                ♥
              </div>

              <div className="result-info">

                <small>
                  RECOMMENDED DEPARTMENT
                </small>

                <h3>
                  Cardiology
                </h3>

              </div>

              <div className="confidence">

                <strong>
                  92%
                </strong>

                <span>
                  Match
                </span>

              </div>

            </div>


            <div className="human-review">

              <span>
                ✓
              </span>

              Human review available

            </div>

          </div>

        </div>

      </section>


      {/* ================= FEATURES ================= */}

      <section className="features">

        <div className="feature">

          <div className="feature-icon">
            🧠
          </div>

          <div>

            <h3>
              AI-Powered
            </h3>

            <p>
              Understands symptoms in everyday language.
            </p>

          </div>

        </div>


        <div className="feature">

          <div className="feature-icon">
            ⚡
          </div>

          <div>

            <h3>
              Fast Routing
            </h3>

            <p>
              Helps direct requests to the right department.
            </p>

          </div>

        </div>


        <div className="feature">

          <div className="feature-icon">
            🛡️
          </div>

          <div>

            <h3>
              Human in the Loop
            </h3>

            <p>
              Staff can review and override AI suggestions.
            </p>

          </div>

        </div>

      </section>


      {/* ================= HOW IT WORKS ================= */}

      <section
        className="how-section"
        id="how-it-works"
      >

        <div className="section-heading">

          <span>
            HOW IT WORKS
          </span>

          <h2>
            Healthcare made <b>simpler.</b>
          </h2>

          <p>
            TriageCare AI connects patients with the right
            department through a simple three-step process.
          </p>

        </div>


        <div className="steps">

          <div className="step">

            <div className="step-number">
              01
            </div>

            <h3>
              Describe Your Symptoms
            </h3>

            <p>
              Tell us what you're experiencing using
              your own everyday words.
            </p>

          </div>


          <div className="step">

            <div className="step-number">
              02
            </div>

            <h3>
              AI Analyzes
            </h3>

            <p>
              Our AI compares the meaning of your
              symptoms with medical department information.
            </p>

          </div>


          <div className="step">

            <div className="step-number">
              03
            </div>

            <h3>
              Get Routed
            </h3>

            <p>
              Your request is sent to the recommended
              department for review.
            </p>

          </div>

        </div>

      </section>


      {/* ================= DEPARTMENTS ================= */}

      <section
        className="departments"
        id="departments"
      >

        <div className="section-heading">

          <span>
            MEDICAL DEPARTMENTS
          </span>

          <h2>
            Care for every <b>need.</b>
          </h2>

        </div>


        <div className="department-grid">

          <div className="department-card">

            <div>
              ♥
            </div>

            <h3>
              Cardiology
            </h3>

            <p>
              Heart and chest-related concerns.
            </p>

          </div>


          <div className="department-card">

            <div>
              🦴
            </div>

            <h3>
              Orthopedics
            </h3>

            <p>
              Bones, joints and muscle concerns.
            </p>

          </div>


          <div className="department-card">

            <div>
              ◉
            </div>

            <h3>
              Dermatology
            </h3>

            <p>
              Skin, hair and nail concerns.
            </p>

          </div>


          <div className="department-card">

            <div>
              🧠
            </div>

            <h3>
              Neurology
            </h3>

            <p>
              Brain and nervous system concerns.
            </p>

          </div>

        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <footer>

        <div className="logo">

          <div className="logo-icon">
            ✚
          </div>

          <span>
            TriageCare <b>AI</b>
          </span>

        </div>

        <p>
          AI-assisted patient routing.
          Human-reviewed. Patient-focused.
        </p>

        <span className="copyright">
          © 2026 TriageCare AI
        </span>

      </footer>

    </div>
  );
}

export default App;