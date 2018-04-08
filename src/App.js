import React, { Component } from 'react';
import {BrowserRouter as Router, Route, 
  Link, NavLink, Switch} from 'react-router-dom';
import './App.css';
import Data from './data/data';

const Home = () => (
  <div>
    <h2>Welcome to our friends site</h2>
    <Link to="/all">See all users</Link>
  </div>
)

const User = (props) => (
  <div>
    <table>
      <thead>
        <tr><th></th><th></th></tr>
      </thead>
      <tbody>
        <tr><td>Gender: </td><td>{props.user.gender}</td></tr>
        <tr><td>Title: </td><td>{props.user.title}</td></tr>
        <tr><td>Firstname: </td><td>{props.user.first}</td></tr>
        <tr><td>Lastname: </td><td>{props.user.last}</td></tr>
        <tr><td>Street: </td><td></td>{props.user.street}</tr>
        <tr><td>City: </td><td>{props.user.city}</td></tr>
        <tr><td>State: </td><td>{props.user.state}</td></tr>
        <tr><td>Zip: </td><td>{props.user.zip}</td></tr>
        <tr><td>Email: </td><td>{props.user.email}</td></tr>
        <tr><td>Date of Birth: </td><td>{props.user.dob}</td></tr>
        <tr><td>Phone: </td><td>{props.user.phone}</td></tr>
        <tr><td>Cell: </td><td>{props.user.cell}</td></tr>
      </tbody>
    </table>
    <Link to="/all">Back</Link>
  </div>
)

function TableItem(props){
  return(
    <tr><td><img src={props.value.picture.thumbnail}/></td>
    <td>{props.value.first} {props.value.last}</td>
    <td><Link to={`${props.match.url}/details/${props.value.email}`}>details</Link></td></tr>
    
  );
}

function UserTable(props){
  const users = props.users;
  const match = props.match;
  const rows = users.map((user) =>
    <TableItem key={user.email} value={user} match={match} />
  )
  return(
    <table>
      <thead>
        <tr><th></th><th>name</th><th>details</th></tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
  );
}

const Users = ({match}) => (
  <div>
    <h2>All users of this site</h2>
        <UserTable users={Data.users} match={match}/>
    <Link exact to="/">Home</Link>
  </div>
)

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/all" component={Users} />
          <Route path="/details/:index" component={User} />
        </Switch>  
      </Router>
    );
  }
}

export default App;
