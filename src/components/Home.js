import styled from "styled-components";

export default function Home() {
  return (
    <Container>
      <Body>
        This is where I'm going to be keeping my own code snippets/little
        projects. I'll be trying to add a new project each day.
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

const Body = styled.p`
  font-size: 30px;
  padding: 5vw;
  text-align: justify;
`;
