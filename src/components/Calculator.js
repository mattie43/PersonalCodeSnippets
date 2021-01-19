import { useState } from "react";
import styled from "styled-components";

export default function Calculator() {
  const [value, setValue] = useState("0");
  return (
    <Container>
      <Body>
        <label>{value}</label>
        <button>AC</button>
        <button>±</button>
        <button>%</button>
        <button>÷</button>
        <button onClick={() => setValue("7")}>7</button>
        <button>8</button>
        <button>9</button>
        <button>X</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>-</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>+</button>
        <button id="calc-0">0</button>
        <button>.</button>
        <button>=</button>
      </Body>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  background-color: inherit;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const Body = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 248px;
  & label {
    display: flex;
    background-color: #eee;
    width: 248px;
    height: 60px;
    border-radius: 5px;
    margin-bottom: 1px;
    font-size: 40px;
    font-weight: bold;
    color: #222831;
    justify-content: flex-end;
    align-items: center;
    padding: 10px;
  }
  & button {
    display: flex;
    border-radius: 5px;
    outline: none;
    border: none;
    font-size: 20px;
    font-weight: bold;
    height: 60px;
    width: 60px;
    background-color: #eee;
    margin: 1px;
    align-items: center;
    justify-content: center;
    :hover {
      background-color: #c9c9c9;
      cursor: pointer;
    }
  }
  & #calc-0 {
    width: 122px;
  }
`;
