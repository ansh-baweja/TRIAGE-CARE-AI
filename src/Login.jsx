import "./Login.css";

function Login({ onBack, onRegister, onLogin }) {
  return (
    <div className="login-page">

      <div className="login-card">

        <button className="back-btn" onClick={onBack}>
          ← Back
        </button>

        <div className="login-logo">
          <div className="login-logo-icon">✚</div>
          <span>TriageCare <b>AI</b></span>
        </div>

        <div className="login-heading">
          <h1>Welcome Back 👋</h1>
          <p>Login to access your patient portal.</p>
        </div>

       <form onSubmit={(e) => {
  e.preventDefault();
  onLogin();
}}>

          <div className="input-group">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
            />
          </div>

          <div className="login-options">
            <label>
              <input type="checkbox" />
              Remember me
            </label>

            <button type="button" className="forgot-btn">
              Forgot Password?
            </button>
          </div>

          <button type="submit" className="login-submit">
            Login →
          </button>

        </form>

        <div className="register-text">
          Don't have an account?
          <button onClick={onRegister}>
            Create Account
          </button>
        </div>

        <div className="secure-note">
          🛡️ Your information is kept secure and private.
        </div>

      </div>

    </div>
  );
}

export default Login;