import React from "react";
import styledComponents from "styled-components";
import { Title } from "../Styles/title";
import { pizzaRed } from "../Styles/colors";

const QuantityInputStyled = styledComponents.input`
    font-size: 18px;
    width: 30px;
    text-align: center;
    border: none;
    outline: none;
`;

const IncrementContainer = styledComponents(Title)`
    display: flex;
    height: 24px;
`;

const IncrementButton = styledComponents.div`
    width: 23px;
    color: ${pizzaRed};
    font-size: 20px;
    text-align: center;
    cursor: pointer;
    line-height: 23px;
    margin: 0px 10px;
    border: 1px solid ${pizzaRed};
    ${({ disabled }) =>
      disabled &&
      `opacity: 0.5; 
    pointer-events: none; 
    `}
    &:hover {
    background-color: #ffe3e3;
    }
`;

export function QuantityInput({ quantity }) {
  return (
    <IncrementContainer>
      <div>Quantity: </div>
      <IncrementButton
        onClick={() => quantity.setValue(quantity.value - 1)}
        disabled={quantity.value === 1}
      >
        -
      </IncrementButton>
      <QuantityInputStyled {...quantity} />
      <IncrementButton onClick={() => quantity.setValue(quantity.value + 1)}>
        +
      </IncrementButton>
    </IncrementContainer>
  );
}
