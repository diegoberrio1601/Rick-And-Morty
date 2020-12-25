import React from 'react'
import styled from 'styled-components'

const Card = ({ name, image ,status, species, gender, origin, }) => {

  return (
    <CharacterContent>
      <Img src={image} />
      <Info>
        <Title>{name}</Title>
        <span>
          <b>Gender</b> - {gender}
        </span>
        <p>
          {}
          {status === "unknown" ? (
            <Unknown>😶</Unknown>
          ) : status === "Alive" ? (
            <Alive>😁</Alive>
          ) : (
            <Dead>💀</Dead>
          )}
          {status} - {species}
        </p>
        <span>
          <b>Origin:</b>
        </span>
        <p>{origin}</p>
      </Info>
    </CharacterContent>
  );
}



const CharacterContent = styled.div`
  display: flex;
  width: 600px;
  height: 250px;
  margin: 10px 0;
  border-radius: 10px;
  background-color: #3c3e44;
  @media (max-width: 767px) {
    width:100%;
    height:auto;
    flex-direction: column;   
  }
`;

const Img = styled.img`
  border-radius: 10px;
  @media (max-width: 767px) {
    width: 90%;
    height: 50%;
    margin: 15px auto;
  }
`;
const Info = styled.div`
  display: inherit;
  margin-left: 20px;
  flex-direction: column;
  align-items: flex-start;
  @media (max-width: 767px) {
    margin-left: 0;
    align-items: center;
    flex-direction: column;
  }
`;
const Title = styled.p`
font-size:1.5rem;
font-weight:bold;
`
const Alive = styled.span`
margin-right:5px;
border-radius:50%;
background-color:green;
justify-content:center;
`
const Unknown = styled.span`
  width:20px;
  height:10px;
  margin-right: 5px;
  border-radius: 50%;
  background-color: gray;
  justify-content: center;
`;

const Dead = styled.span`
  width: 20px;
  height: 10px;
  margin-right: 5px;
  border-radius: 50%;
  background-color: red;
  justify-content: center;
`;
export default Card