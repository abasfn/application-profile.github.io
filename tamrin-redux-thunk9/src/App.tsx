import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import WelcomePage from './pages/welcome.page';
import LoginPage from './pages/login.page';
import SignUpPage from './pages/signup.page';
import MainPage from './pages/mainpage';
import "tailwindcss/tailwind.css"
import PageData from './pages/page.data';
function App() {
  return (
    <div className="max-w-xl m-auto">
     <Router>
      <Switch>
        <Route path="/signup">
          <SignUpPage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/mainPage">
          <MainPage/>
        </Route>
        <Route path="/datapage">
          <PageData/>
        </Route>
        <Route path="/">
          <WelcomePage />
        </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
