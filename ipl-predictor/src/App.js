import React from "react";
import IPLPointsPredictor from "./IPLPointsPredictor";
import "./App.css"; 

function App() {
    return (
        <div className="app">
            <nav className="navbar">
                <div className="logo">🏆 IPL Predictor</div>
            </nav>
            <div className="content">
                <IPLPointsPredictor />
            </div>
        </div>
    );
}

export default App;
