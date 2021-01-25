import { useState } from "react";
import styled from "styled-components";

import paper from "../images/oldpaper.jpg";

export default function ToDo() {
  const [toDoList, setToDoList] = useState(["test1", "test2"]);
  const [input, setInput] = useState("");

  function renderItems() {
    return toDoList.map((item) => (
      <li onClick={() => removeItem(item)}>{item}</li>
    ));
  }

  function handleClick() {
    setToDoList([...toDoList, input]);
    setInput("");
  }

  function removeItem(clickedItem) {
    setToDoList(toDoList.filter((item) => item !== clickedItem));
  }

  return (
    <Container>
      <Body>
        <InputSection>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={handleClick}>Add Item</button>
        </InputSection>
        <ListSection>
          <ul>{renderItems()}</ul>
        </ListSection>
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
`;

const InputSection = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  & input {
    outline: none;
    font-size: 25px;
  }
  & button {
    height: 40px;
    margin: 20px;
  }
`;

const ListSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-image: url("${paper}");
  height: 75vh;
  width: 40vw;
  padding: 20px;
  & ul {
    list-style: none;
    color: black;
    font-size: 25px;
  }
  & li {
    cursor: pointer;
  }
`;
