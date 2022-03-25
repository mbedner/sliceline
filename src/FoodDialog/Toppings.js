import React from "react";
import styledComponents from "styled-components";

const ToppingGrid = styledComponents.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const ToppingCheckbox = styledComponents.input`
  margin-right: 10px;
  cursor: pointer;
`;

const CheckboxLabel = styledComponents.label`
  cursor: pointer;
`;

export function Toppings({ toppings, checkTopping }) {
  return (
    <ToppingGrid>
      {toppings.map((topping, i) => (
        <CheckboxLabel>
          <ToppingCheckbox type="checkbox" onClick={() => checkTopping(i)} />
          {topping.name}
        </CheckboxLabel>
      ))}
    </ToppingGrid>
  );
}
