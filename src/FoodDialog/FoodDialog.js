import React from "react";
import styledComponents from "styled-components";
import { FoodLabel } from "../Menu/FoodGrid";
import { pizzaRed } from "../Styles/colors";
import { Title } from "../Styles/title";
import { formatPrice } from "../Data/FoodData";

const Dialog = styledComponents.div`
    width: 500px;
    background-color: white;
    position: fixed;
    top: 75px;
    z-index: 5;
    max-height: calc(100% - 100px);
    left: calc(50% - 250px);
    display: flex;
    flex-direction: column;
    overflow: hidden;
`;

export const DialogContent = styledComponents.div`
    overflow: auto;
    min-height: 100px;
`;

export const DialogFooter = styledComponents.div`
    box-shadow: 0 2px 20px 0 gray;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ConfirmButton = styledComponents(Title)`
    color: white;
    margin: 10px;
    height: 20px;
    border-radius: 5px;
    padding: 10px;
    text-align: center;
    width: 200px;
    cursor: pointer;
    background-color: ${pizzaRed};
`;

const DialogShadow = styledComponents.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  background-color: black;
  opacity: 0.7;
  z-index: 4;
`;

const DialogBanner = styledComponents.div`
  min-height: 200px;
  margin-bottom: 20px;
  ${({ img }) => `background-image: url(${img});`}
  background-position: center;
  background-size: cover;
`;

const DialogBannerName = styledComponents(FoodLabel)`
    top: 100px;
    font-size: 30px;
    padding: 5px 10p;
`;

export function FoodDialog({ openFood, setOpenFood, setOrders, orders }) {
  function close() {
    setOpenFood();
  }
  if (!openFood) return null;

  const order = {
    ...openFood,
  };

  function addToOrder() {
    setOrders([...orders, order]);
    close();
  }

  return (
    <>
      <DialogShadow onClick={close} />
      <Dialog>
        <DialogBanner img={openFood.img}>
          <DialogBannerName>{openFood.name}</DialogBannerName>
        </DialogBanner>
        <DialogContent></DialogContent>
        <DialogFooter>
          <ConfirmButton onClick={addToOrder}>
            Add to order: {formatPrice(openFood.price)}
          </ConfirmButton>
        </DialogFooter>
      </Dialog>
    </>
  );
}
