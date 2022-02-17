import { useState, useEffect } from 'react';
import { getUser } from './services/fetch-utils';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import AuthPage from './AuthPage';
import { logout } from './services/fetch-utils';
import ListPage from './ListPage';

import './App.css';

export default function App() {
  // track the user in state
  const [user, setUser] = useState('');

  // add a useEffect to get the user and inject the user object into state on load
  useEffect(() => {
    async function fetchUser() {
      const loggedInUser = await getUser();
      setUser(loggedInUser);
    }
    fetchUser();
  }, []);

  async function handleLogout() {
    // call the logout function
    await logout();
    // clear the user in state
    setUser('');
  }

  return (
    <Router>
      <div className='App'>
        <header>
          {
            user && <button onClick={ handleLogout }>Logout</button>
          }
        </header>
        <main>
          <Switch>
            <Route exact path="/">
              {
                user
                  ? <Redirect to='/shopping-list'/>
                  : <AuthPage setUser={ setUser }/>
              }
            </Route>
            <Route exact path="/shopping-list">
              {
                user
                  ? <ListPage />
                  : <AuthPage setUser={ setUser }/>
              }
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );}