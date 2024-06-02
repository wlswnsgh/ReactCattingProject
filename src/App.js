import logo from './logo.svg';
import './App.css';
import Template from './Commtent/Template';
import Insert from './Commtent/Insert';
import React, { useState } from 'react';
import List from './Commtent/List';
import styled from "styled-components";

const StyleImg = styled.img`
  width: 100px;
  height: 100px;
`;


function App() {
  const [inputText, setInputText] = useState([]);
  const [img, setImg] = useState(null);



  const handleInsert = (text) => {

    setInputText((prev) => [
      ...prev,
      { text: text }
    ]);
  };

  const ImgChange = (e) => {
    setImg(e.target.files[0]);
  }

  return (
    <Template>
      <List todos = {inputText} Img ={img}>
      </List>

      <Insert onInsert = {handleInsert} dateImg= {ImgChange} />
    </Template>
  );
}



export default App;
