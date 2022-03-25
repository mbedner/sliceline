import React from "react";
import styledComponents from "styled-components";
import { foods } from "../Data/FoodData";
import { Food, FoodGrid, FoodLabel } from "./FoodGrid";

const MenuStyle = styledComponents.div`
    margin: 0px 400px 50px 20px;
    height: 1000px;
`;

export function Menu() {
  return (
    <MenuStyle>
      <h1>Menu</h1>
      <FoodGrid>
        {foods.map((food) => (
          <Food img={food.img}>
            <FoodLabel>{food.name}</FoodLabel>
          </Food>
        ))}
      </FoodGrid>
    </MenuStyle>
  );
}
