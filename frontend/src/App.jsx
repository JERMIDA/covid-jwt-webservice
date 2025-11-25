import { useState } from "react";
import axios from "axios";
import LoginForm from "./components/LoginForm";
import "./App.css";

function App() {
  const [token, setToken] = useState("");
  const [data, setData] = useState(null);

  const fetchCovid = async () => {
    try {
      const res = await axios.get("http://localhost:5000/data/covid", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setData(res.data);
    } catch (err) {
      alert("Error fetching data"),err;
    }
  };

  const logout = () => {
    setToken("");
    setData(null);
  };

  return (
    <div className="covid-bg">
      <div className="covid-container">
        <h1 className="covid-header">COVID-19 Global Status</h1>

        {!token && <LoginForm setToken={setToken} />}

        {token && (
          <>
            <div className="covid-button-row">
              <button onClick={fetchCovid} className="covid-btn primary">
                Fetch COVID Data
              </button>
              <button onClick={logout} className="covid-btn danger">
                Logout
              </button>
            </div>

            {data && (
              <div className="covid-card-container">
                {Object.entries(data).map(([key, value]) => (
                  <div key={key} className="covid-card">
                    <h3 className="covid-card-title">{formatTitle(key)}</h3>
                    <p className="covid-card-value">{value.toLocaleString()}</p>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
// Helper function
const formatTitle = (key) => {
  return key
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (str) => str.toUpperCase());
};
export default App;
