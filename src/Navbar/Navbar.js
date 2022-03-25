import React from "react";
import styledComponents from "styled-components";
import { pizzaRed } from "../Styles/colors";
import { Title } from "../Styles/title";

const NavbarStyled = styledComponents.div`
    background-color: ${pizzaRed};
    padding: 10px;
    position: fixed;
    width: 100%;
    z-index: 999;
`;

const Logo = styledComponents(Title)`
    font-size: 20px;
    color: white;
    text-shadow: 1px 1px 4px rgba(0,0,0,.35)
`;

export function Navbar() {
  return (
    <NavbarStyled>
      <Logo>
        Sliceline{" "}
        <span role="img" aria-label="pizza slice">
          🍕
        </span>
      </Logo>
    </NavbarStyled>
  );
}
