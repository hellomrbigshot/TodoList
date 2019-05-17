import React from 'react'
import './App.css'
import { 
  BrowserRouter as Router, 
  Route, 
  Link
} from 'react-router-dom'
function Index() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

function AppRouter() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Index} />
        <Route path="/about/" component={About} />
        <Route path="/users/" component={Users} />
        <Route path="/topics" component={Topics} />
      </div>
    </Router>
  )
}
function Topic({ match }) {
  return <h3>Request Params: {match.params.id}</h3>
}
function Topics({ match }) {
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${match.url}/component`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>props-v-state</Link>
        </li>
      </ul>
      <Route path={`${match.path}/:id`} component={Topic}></Route>
      <Route 
        exact
        path={`${match.path}`}
        render={() => <h3>选择一个 topic </h3>}></Route>
    </div>
  )
}
export default AppRouter