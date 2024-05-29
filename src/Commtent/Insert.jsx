import React, { useRef, useState } from 'react';
import styled from "styled-components";
import { MdSend } from "react-icons/md"
import { FiPlus } from "react-icons/fi";
import { IoChatboxOutline } from "react-icons/io5";

const TodoInsertWrapper = styled.div`
  display: flex;
  background: #495057;
`;

const StyledInput = styled.input`
  background: none;
  outline: none;
  border: none;
  padding: 0.5rem;
  font-size: 1.125rem;
  line-height: 1.5;
  color: white;
  flex: 1; 
`;

const StyledInput2 = styled.input`
  border: none;
  background: #868e96;
  color: white;
  display: flex;
  align-items: center;
  width: 45px;
  cursor: pointer;
  display: none;
  transition: 0.2s background ease-in;
  &:hover {
    background: #adb5bd;
  }
`;

const StyledImg = styled.img`
  width: 100px;
  height: 100px;
  background: red;
`;

const StyledButton = styled.button`
  border: none;
  background: #868e96;
  color: white;
  padding: 0 1rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: 0.2s background ease-in;

  &:hover {
    background: #adb5bd;
  }
`;

function Insert(props) {
    const {onInsert, imgdate} = props;
    const [value, setValue] = useState('');
    const [images, setImages] = useState();
    const fileInput = React.useRef(null);


    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    
        if (!value) {
          return; 
        }
    
        onInsert(value);
        setValue('');
        
    };

    const handleButtonClick = () => {
      fileInput.current.click();
    };

    const handleKeyUp = (e) => {
      if (e.key === 'Enter') {
        onInsert(value);
        setValue('');
      } 
    }

    return (
        <TodoInsertWrapper>
            <StyledButton onClick={handleButtonClick}>
              <FiPlus />
            </StyledButton>
            
            <StyledInput2 
              type='file'
              ref={fileInput}
              accept='image/*'
              // value={images}
            />

            <StyledInput 
                type='text'
                onChange={handleChange}
                value={value}
                placeholder="메세지를 입력해주세요."
                onKeyUp={handleKeyUp}
            />
            
            <StyledButton type='submit' onClick={handleSubmit}>
              <MdSend />
            </StyledButton>
          
        </TodoInsertWrapper>
    );
}

export default Insert;