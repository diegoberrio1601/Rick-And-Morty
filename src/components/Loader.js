import React from 'react'
import loader from "../img/loader.gif";
import styled from 'styled-components'

const Loader = () => {
  return (
    <Splash>
      <img src={loader} alt="Logo" width="300px" />
      <h2>Rick And Morty React.js</h2>
      <h3>by: Diegoberrio1601</h3>
    </Splash>
  );
}

const Splash = styled.div`
  width:100%;
  height:100vh;
  display:flex;
  align-items:center;
  flex-direction:column;
  justify-content:center;
  background-color:black;
`

export default Loader
