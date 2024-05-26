import React from 'react';
import styled from "styled-components";
import ListItem from './ListItem';

const TodoListWrapper = styled.div`
  min-height: 320px;
  max-height: 320px;
  overflow-y: auto;
`;

function List({ todos }) {
    return (
        <TodoListWrapper>
            {todos.map((todo) => {
               return <ListItem 
               key={todo.id} todo={todo} 
               />;  
            })}
        </TodoListWrapper>
    );
};

export default List;