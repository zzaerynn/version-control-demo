import './App.css';
import "./components/HelloMessage";
import HelloMessage from "./components/HelloMessage";


function App() {
  return (
    <div className="App">
        <HelloMessage name="Everyone" />
        <HelloMessage name="There" />
    </div>
  );
}

export default App;
