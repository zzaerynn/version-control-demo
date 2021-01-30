import './App.css';
import HelloMessage from "./components/HelloMessage";
import Timer from "./components/Timer";
import TodoApp from "./components/TodoApp";
import TimerAsFunction from "./components/TimerAsFunction";

function App() {
  return (
    <div className="App">
        <HelloMessage name="Everyone" />
        <HelloMessage name="There" />
        <br />
        <h3>My Timer:</h3>
        <Timer />
        <TimerAsFunction />
        <h3>My Todo App:</h3>
        <TodoApp />
    </div>
  );
}

export default App;
