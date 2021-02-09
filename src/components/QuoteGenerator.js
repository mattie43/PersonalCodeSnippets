import { useState } from "react";
import styled from "styled-components";

export default function QuoteGenerator() {
  const [quote, setQuote] = useState("Generate a random quote!");
  const [quoteAuthor, setQuoteAuthor] = useState("");

  function getQuote() {
    fetch("https://favqs.com/api/qotd")
      .then((resp) => resp.json())
      .then((data) => {
        setQuote('"' + data.quote.body + '"');
        setQuoteAuthor("- " + data.quote.author);
      });
  }
  return (
    <Container>
      <div>{quote}</div>
      <div>{quoteAuthor}</div>
      <br />
      <button onClick={getQuote}>Generate!</button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
`;
