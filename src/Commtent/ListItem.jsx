import React from 'react';
import styled, { css } from "styled-components";

const TodoListItemWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 10px;
  background: skyblue;
  width: 460px;
  height: 45px;
  border-radius: 10px;
  padding-left: 5px;
`;

const Text = styled.div`
  color: ${props => props.done && 
    css`
      color: #adb5bd;
      text-decoration: line-through;
    `
  };
`;

function ListItem(props) {
    const { todo: { text, done} } = props;

    return (
        <TodoListItemWrapper>
            <Text done = {done}>{text}</Text>
        </TodoListItemWrapper>
    );
}

export default ListItem;