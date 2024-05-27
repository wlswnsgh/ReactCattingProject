import logo from './logo.svg';
import './App.css';
import Template from './Commtent/Template';
import Insert from './Commtent/Insert';
import React, { useRef, useState } from 'react';
import { v4 as uuidv4 } from "uuid";
import List from './Commtent/List';
import io from "socket.io-client";

// const socket = io.connect('http://localhost:3000');

function App() {
  const [inputText, setInputText] = useState([]);
  const nextId = useRef(4);

  const handleInsert = (text) => {
    const todo = {
      id: uuidv4(),
      text,
      done: false
    };

    setInputText(inputText.concat(todo));
    nextId.current += 1;
  };


  return (
    <Template>
      <List todos = {inputText} />
      <Insert onInsert = {handleInsert} />
    </Template>
  );
}

export default App;
