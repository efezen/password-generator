import "./Styles.scss"

function App() {
  return (
    <div className="container">
      <div className="generator">
        <h2 className="generator_header">Password Generator</h2>
        <div className="generator_password">
          {/* Password */}
          <button>Clipboard</button>
        </div>
        <div className="form-group">
          <label htmlFor="password-length">Password Length</label>
          <input
            type="number"
            name="password-length"
            id="password-length"
            max="20"
            min="7"
          />
        </div>
        <div className="form-group">
          <label htmlFor="uppercase-letters">Include Uppercase Letters</label>
          <input
            type="checkbox"
            name="uppercase-leters"
            id="uppercase-letters"
          />
        </div>
        <div className="form-group">
          <label htmlFor="include-numbers">Include Lower Case Letters</label>
          <input
            id="include-numbers"
            className="include-numbers"
            type="checkbox"
          />
        </div>
        <div className="form-group">
          <label htmlFor="include-symbols">Include Lower Case Letters</label>
          <input
            id="include-symbols"
            className="include-symbols"
            type="checkbox"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
