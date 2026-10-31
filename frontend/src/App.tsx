import {useState} from 'react';
import axios from "axios";
import './App.css';

function App() {
  const [text, setText] = useState("");
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSummarize = async () => {
    try {
      setLoading(true);

      const res = await axios.post("http://localhost:5000/api/summarize", {
        text,
      });

      setSummary(res.data.summary);
    } catch (err) {
      alert("Error summarizing text");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>AI Text Summarizer</h1>

      <textarea
        rows={10}
        cols={60}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Paste your text here..."
      />

      <br /><br />

      <button onClick={handleSummarize} disabled={loading}>
        {loading ? "Summarizing..." : "Summarize"}
      </button>

      <h2>Summary:</h2>
      <p>{summary}</p>
    </div>
  );
}

export default App;
