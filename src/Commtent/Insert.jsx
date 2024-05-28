import React, { useState } from 'react';
import styled from "styled-components";
import { MdSend } from "react-icons/md"
import { FiPlus } from "react-icons/fi";
import { IoChatboxOutline } from "react-icons/io5";

const TodoInsertWrapper = styled.form`
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
  transition: 0.2s background ease-in;
  &:hover {
    background: #adb5bd;
  }
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
    const {onInsert} = props;
    const [value, setValue] = useState('');

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

    

    return (
        <TodoInsertWrapper onSubmit={handleSubmit}>
            <StyledInput2 type='button'>
              {/* <FiPlus /> */}
            </StyledInput2>

            <StyledInput 
                type='text'
                onChange={handleChange}
                value={value}
                placeholder="메세지를 입력해주세요."
            />
            
            <StyledButton type='submit'>
              <MdSend />
            </StyledButton>
        </TodoInsertWrapper>
    );
}

export default Insert;