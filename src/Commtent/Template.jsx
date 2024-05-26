import React from 'react';
import styled from "styled-components";

const TodoTemplateWrapper = styled.div `
  width: 512px;
  margin: 6rem auto 0;
  border-radius: 4px;
  overflow: hidden;

  .app-title{
  background: #22b8cf;
  color: white;
  height: 4rem;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  }

  .content {
    background: yellowgreen;
  }
`;

function Template(props) {
    const { children } = props;

    return (
        <TodoTemplateWrapper>
            <div className='app-title'>Chatting App</div>
            <div className='content'>{children}</div>
        </TodoTemplateWrapper>
    );
}

export default Template;