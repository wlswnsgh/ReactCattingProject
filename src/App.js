import logo from './logo.svg';
import './App.css';
import Template from './Commtent/Template';
import Insert from './Commtent/Insert';
import React, { useState } from 'react';
import List from './Commtent/List';

function App() {
  const [inputText, setInputText] = useState([]);

  const handleInsert = (text) => {

    setInputText((prev) => [
      ...prev,
      {text: text}
    ]);

  };

  return (
    <Template>
      <List todos = {inputText} />
      <Insert onInsert = {handleInsert} />
    </Template>
  );
}



export default App;
