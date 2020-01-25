import React from 'react';
import Header from "./components/Header.js";
import { Link } from 'react-router-dom'
import CharacterList from "./components/CharacterList"
import WelcomePage from './components/WelcomePage'
import { Route } from 'react-router-dom'
export default function App() {

  return (
    <main>
      <Header />
      <Link to='/welcome'>
        WelcomePage
      </Link>
      <Link to='/characterList'>
        CharacterPage
      </Link>
    <Route exact path='/' component={CharacterList}/>
    <Route path='/characterList' component={CharacterList}/>
    <Route path='/welcome' component={WelcomePage}/>
    </main>
  );
}
