import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/cla_logo.png';
import './App.css';

const Hello = () => {
  return (
    <div>
      <div className="Hello">
        <img width="200px" alt="icon" src={icon} />
      </div>
      <center>
        <h1>CutLang GUI</h1>
      </center>
      <div className="Hello">
        <button
          type="button"
          onClick={() => window.electron.ipcRenderer.downloadWithDocker()}
        >
          <span role="img" aria-label="books">
            🐳
          </span>
          Download with docker
        </button>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
