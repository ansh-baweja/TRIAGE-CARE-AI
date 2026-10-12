import { useState } from "react";
import "./SymptomCheck.css";

function SymptomCheck({ onBack, onResult }) {
  const [symptoms, setSymptoms] = useState("");

  const handleAnalyze = () => {
    if (!symptoms.trim()) {
      alert("Please describe your symptoms first.");
      return;
    }

    onResult(symptoms);
  };

  return (
    <div className="symptom-page">

      {/* HEADER */}
      <header className="symptom-header">
        <div className="symptom-logo">
          <div className="symptom-logo-icon">✚</div>
          <span>
            TriageCare <b>AI</b>
          </span>
        </div>

        <button className="back-dashboard" onClick={onBack}>
          ← Back to Dashboard
        </button>
      </header>


      {/* MAIN */}
      <main className="symptom-container">

        <div className="symptom-heading">
          <span className="symptom-badge">
            ✨ AI SYMPTOM ANALYSIS
          </span>

          <h1>
            Tell us how you're <span>feeling.</span>
          </h1>

          <p>
            Describe your symptoms in your own words.
            Our AI will analyze your description and suggest
            the most suitable medical department.
          </p>
        </div>


        {/* FORM CARD */}
        <section className="symptom-card">

          <div className="card-heading">
            <div className="card-icon">🩺</div>

            <div>
              <h2>Describe your symptoms</h2>
              <p>
                Don't worry about using medical terminology.
                Just explain what you're experiencing.
              </p>
            </div>
          </div>


          <label>
            What are you experiencing?
          </label>

          <textarea
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
            placeholder="For example: I've been having chest discomfort and difficulty breathing for the last two days..."
          />

          <div className="input-info">
            <span>💡 Tip: Describe where it hurts, how long you've had it, and how it feels.</span>
            <span>{symptoms.length}/500</span>
          </div>


          {/* EXAMPLES */}
          <div className="examples">

            <span>Try an example:</span>

            <button
              onClick={() =>
                setSymptoms(
                  "I've been having chest discomfort and difficulty breathing."
                )
              }
            >
              Chest discomfort
            </button>

            <button
              onClick={() =>
                setSymptoms(
                  "I have pain and swelling in my knee when I walk."
                )
              }
            >
              Knee pain
            </button>

            <button
              onClick={() =>
                setSymptoms(
                  "I have red and itchy patches on my skin."
                )
              }
            >
              Skin problem
            </button>

          </div>


          {/* ANALYZE */}
          <button
            className="analyze-btn"
            onClick={handleAnalyze}
          >
            Analyze My Symptoms →
          </button>


          <div className="privacy-note">
            🔒 Your information is handled securely.
            AI recommendations are always reviewed by healthcare staff.
          </div>

        </section>


        {/* PROCESS */}
        <div className="analysis-process">

          <div className="process-item">
            <div>01</div>
            <span>Describe</span>
          </div>

          <div className="process-line"></div>

          <div className="process-item">
            <div>02</div>
            <span>AI Analysis</span>
          </div>

          <div className="process-line"></div>

          <div className="process-item">
            <div>03</div>
            <span>Department</span>
          </div>

        </div>

      </main>

    </div>
  );
}

export default SymptomCheck;