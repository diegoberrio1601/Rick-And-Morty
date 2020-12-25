import React from 'react'
import styled from 'styled-components'

const Header = () => {
  return (
    <Nav>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/799px-Rick_and_Morty.svg.png" width="200px"/>
    </Nav>
  );
}

const Nav = styled.nav`
  width: 100%;
  height: 60px;
  display: flex;
  padding: 10px 0;
  background-color: #3c3e44;
  justify-content: center;
  -webkit-box-shadow: 0px 5x 5px 0px rgba(0, 0, 0, 0.11);
  -moz-box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.11);
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.11);
`;

export default Header
