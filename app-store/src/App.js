import "./App.css";
import "font-awesome/css/font-awesome.min.css";
import Todo from "./components/Todo/Todo";
import LandingPage from "./components/Landing/LandingPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TodoInventory from "./components/Todo/TodoInventory";
import Dashboard from "./containers/Dashboard/Dashboard";
import ProductDetails from "./containers/ProductDetails";
import Directory from "./components/Directory/Directory";

function App() {
  return (
    <Router>
      <div className="">
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/todo">
            <Todo />
          </Route>
          <Route path="/todoInventory">
            <TodoInventory/>
          </Route>
          <Route path="/directory" exact component={Directory}/>
          <Route path="/store" exact component={Dashboard}/>
          <Route path="/productDetails/:productId" exact component={ProductDetails}/>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
