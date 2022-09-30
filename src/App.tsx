import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import PersonList from './components/PersonList';
import Button from './components/Button';
import Input from './components/Input';

const persons = [
  {
    firstName: "Milton",
    lastName: "Francis",
    age: 26
  },
  {
    firstName: "Shavane",
    lastName: "Brooks",
    age: 22
  }
]

function App() {
  return (
    <div className="App">
      <Greet name="milton"/>
      <PersonList names={persons}/>
      <Button handleClick={(event, id)=> console.log("button is clicked", event, id)}></Button>
      <Input value="" handleChange={event=>console.log(event)}/>
    </div>
  );
}

export default App;
