import React, { useState } from 'react';
import styled from "styled-components";

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

function Insert({ onInsert }) {
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
            <StyledInput 
                type='text'
                onChange={handleChange}
                value={value}
            />
        </TodoInsertWrapper>
    );
}

export default Insert;