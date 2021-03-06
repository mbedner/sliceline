import React from "react";
import styledComponents from "styled-components";
import { foods } from "../Data/FoodData";
import { Food, FoodGrid, FoodLabel } from "./FoodGrid";
import { formatPrice } from "../Data/FoodData";

const MenuStyle = styledComponents.div`
    margin: 0px 400px 50px 20px;
    height: 1000px;
`;

export function Menu({ setOpenFood }) {
  return (
    <MenuStyle>
      {Object.entries(foods).map(([sectionName, foods]) => (
        <>
          <h1>{sectionName}</h1>
          <FoodGrid>
            {foods.map((food) => (
              <Food img={food.img} onClick={() => setOpenFood(food)}>
                <FoodLabel>
                  <div>{food.name}</div>
                  <div>{formatPrice(food.price)}</div>
                </FoodLabel>
              </Food>
            ))}
          </FoodGrid>
        </>
      ))}
    </MenuStyle>
  );
}
