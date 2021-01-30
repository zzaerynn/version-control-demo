import './App.css';
import "./components/HelloMessage";
import HelloMessage from "./components/HelloMessage";
import Timer from "./components/Timer";

function App() {
  return (
    <div className="App">
        <HelloMessage name="Everyone" />
        <HelloMessage name="There" />
        <Timer />
    </div>
  );
}

export default App;
