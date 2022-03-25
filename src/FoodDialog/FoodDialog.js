import React from "react";
import styledComponents from "styled-components";
import { FoodLabel } from "../Menu/FoodGrid";

const Dialog = styledComponents.div`
    width: 500px;
    height: 500px;
    background-color: white;
    position: fixed;
    top: 75px;
    z-index: 5;
    max-height: calc(100% - 100px);
    left: calc(50% - 250px);
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

export function FoodDialog({ openFood, setOpenFood }) {
  function close() {
    setOpenFood();
  }
  if (!openFood) return null;
  return (
    <>
      <DialogShadow onClick={close} />
      <Dialog>
        <DialogBanner img={openFood.img}>
          <DialogBannerName>{openFood.name}</DialogBannerName>
        </DialogBanner>
      </Dialog>
    </>
  );
}
