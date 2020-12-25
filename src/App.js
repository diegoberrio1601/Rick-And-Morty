import React, { Fragment, useState, useEffect } from "react";
import "./App.css";
import { api } from "./api/index";
import Card from "./components/Card";
import Header from "./components/Header";
import styled from "styled-components";
import Loader from "./components/Loader";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [characters, setCharacters] = useState([]);
  const [counter, setCounter] = useState(0);
  const [back, setBack] = useState(null);
  const [next, setNext] = useState();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    _getCharacters();
  }, []);

  const _getCharacters = async () => {
    const res = await api.getCharacters();
    setCharacters(res.results);
    setCounter(res.info.pages);
    setNext(res.info.next);
  };

  const _nextPage = async () => {
    const res = await api.nextPage(next);
    setCharacters(res.results);
    setNext(res.info.next);
    setBack(res.info.prev);
    setCounter(counter - 1);
  };

  const _backPage = async () => {
    const res = await api.nextPage(back);
    setCharacters(res.results);
    setNext(res.info.next);
    setBack(res.info.prev);
    setCounter(counter + 1);
  };

  return (
    <Fragment>
      {isLoading ? (
        <Loader/>
      ) : (
        <Container className="App">
          <Header />
          <Item>
            {characters.map((character) => (
              <Card
                key={character.id}
                image={character.image}
                name={character.name}
                gender={character.gender}
                status={character.status}
                species={character.species}
                origin={character.origin.name}
              />
            ))}
          </Item>
          <Pagination>
            {back === null ? null : (
              <Button onClick={_backPage}>
                <P>🔙</P>
              </Button>
            )}
            <b>Pages: {counter}</b>
            <Button>
              <P onClick={_nextPage}>🔜</P>
            </Button>
          </Pagination>
        </Container>
      )}
    </Fragment>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Item = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 20px 0;
  flex-wrap: wrap;
  justify-content: space-around;
  @media (max-width: 767px) {
    width: 90%;
    align-items: center;
    flex-direction: column;
  }
`;

const Pagination = styled.div`
  width: 100%;
  height: 60px;
  display: inherit;
  margin-bottom: 20px;
  align-items: center;
  justify-content: space-around;
`;
const Button = styled.button`
  display: flex;
  width: 50px;
  height: 50px;
  border: none;
  align-items: center;
  border-radius: 10px;
  justify-content: center;
  background-color: #3c3e44;
`;
const P = styled.p`
  color: white;
  font-size: 30px;
`;

export default App;
