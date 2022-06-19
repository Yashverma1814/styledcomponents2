import React from 'react'
import styled from "styled-components";

const Btn1 = styled.button`
    background-color: blue;
    border: none;
    color: white;
    padding: 7px;
`;

const Btn2 = styled.button`
    background-color: white;
    border: 1px solid black;
    color: black;
    padding: 6px;
`;

const Btn3 = styled.button`
    background-color: white;
    border: 1px dashed black;
    color: black;
    padding: 6px;
`;

const Btn4 = styled.button`
    background-color: white;
    border: none;
    color: black;
    padding: 7px;
`;

const Btn5 = styled.button`
    background-color: white;
    border: None;
    color: black;
    padding: 7px;
    &:hover{
        color:blue
    }
`;
const Button = () => {
  return (
    <div>
      <Btn1>Primary Button</Btn1>
      <br /><br />
      <Btn2>Default Button</Btn2>
      <br /><br />
      <Btn3>Dashed Button</Btn3>
      <br />
      <br />
      <Btn4>Text Button</Btn4>
      <br /><br />
      <Btn5>Link Button</Btn5>
    </div>
  )
}

export { Button };
