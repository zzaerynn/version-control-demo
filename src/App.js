import React from "react"
import './App.css';

class HelloMessage extends React.Component {
    render() {
        return (
            <div>
                Hello {this.props.name}
            </div>
        );
    }
}

function App() {
  return (
    <div className="App">
        <HelloMessage name="Everyone" />
    </div>
  );
}

export default App;
