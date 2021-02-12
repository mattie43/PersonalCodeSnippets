import { useState } from "react";
import styled from "styled-components";

export default function Calculator() {
  const [value, setValue] = useState([]);

  function handleClick(num) {
    switch (num) {
      case "±":
        if (value[0] && value[0] === "-") {
          setValue(value.slice(1));
        } else {
          setValue(["-", ...value]);
        }
        break;

      default:
        setValue([...value, num]);
        break;
    }
  }

  return (
    <Container>
      <Body>
        <label>{value}</label>
        <button id="calc-clear" onClick={() => setValue([])}>
          Clear
        </button>
        <button onClick={() => handleClick("÷")}>÷</button>
        <button onClick={() => handleClick(7)}>7</button>
        <button onClick={() => handleClick(8)}>8</button>
        <button onClick={() => handleClick(9)}>9</button>
        <button onClick={() => handleClick("x")}>x</button>
        <button onClick={() => handleClick(4)}>4</button>
        <button onClick={() => handleClick(5)}>5</button>
        <button onClick={() => handleClick(6)}>6</button>
        <button onClick={() => handleClick("-")}>-</button>
        <button onClick={() => handleClick(1)}>1</button>
        <button onClick={() => handleClick(2)}>2</button>
        <button onClick={() => handleClick(3)}>3</button>
        <button onClick={() => handleClick("+")}>+</button>
        <button id="calc-0">0</button>
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
  & #calc-0,
  #calc-clear {
    width: 184px;
  }
`;
