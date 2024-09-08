/*global chrome*/

import "./App.css";
import { useEffect, useState } from "react";
function App() {
  const [blocksSecret, setBlocksSecret] = useState("");
  const [prompt, setPrompt] = useState("");
  const [output, setOutput] = useState("");
  console.log(blocksSecret, prompt);

  return (
    <div className="App">
      <h3>Engineered By BlocksBridge</h3>
      <div>
        <label>Enter BlocksBridge Secret:</label>
        <input
          type="text"
          placeholder="Enter BlocksBridge Secret"
          onChange={(e) => setBlocksSecret(e.target.value)}
        />
      </div>
      <div>
        <label>Enter AI Prompt:</label>
        <input
          type="text"
          placeholder="Enter your prompt"
          onChange={(e) => setBlocksSecret(e.target.value)}
        />
      </div>
      <button
        onClick={() => {
          setOutput(blocksSecret);
        }}>
        Generate Prompt
      </button>

      <div className="output">{output}</div>
    </div>
  );
}

export default App;
