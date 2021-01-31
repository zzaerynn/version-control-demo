import './App.css';
import {Route, Redirect, Switch} from 'react-router-dom';
import HelloMessage from "./components/HelloMessage";
import FunctionPage from "./components/FunctionPage";
import ClassPage from "./components/ClassPage";

const NoMatch = ({location}) => (
    <div>
        <strong>Error!</strong> No route found matching:
        <div>
            <code>{location.pathname}</code>
        </div>
    </div>
);

function App() {
  return (
    <div className="App">
        <HelloMessage name="Everyone" />
        <HelloMessage name="There" />
        <br />
        <Switch>
            <Route path='/functions' component={FunctionPage}/>
            <Route path='/classes' component={ClassPage}/>
            <Route exact path='/' render={() => (
                <Redirect
                    to='/functions'
                />
            )}/>
            <Route component={NoMatch}/>
        </Switch>
    </div>
  );
}

export default App;
