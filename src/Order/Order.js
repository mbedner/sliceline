import React from "react";
import styledComponents from "styled-components";
import {
  ConfirmButton,
  DialogFooter,
  DialogContent,
} from "../FoodDialog/FoodDialog";

const OrderStyled = styledComponents.div`
    position: fixed;
    right: 0;
    top: 48px;
    width: 340px;
    background-color: white;
    height: calc(100% - 48px);
    box-shadow: 4px 0px 5px 4px gray;
    z-index: 2;
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
`;

const OrderContent = styledComponents(DialogContent)`
    padding: 20px;
    height: 100%;
`;

const OrderContainer = styledComponents.div`
    padding: 10px 0;
    border-bottom: 1px solid gray;
`;

const OrderItem = styledComponents.div`
    padding: 10px 0;
`;

export function Order({ orders }) {
  return (
    <OrderStyled>
      {orders.length === 0 ? (
        <OrderContent> Your Order Looks Pretty Empty</OrderContent>
      ) : (
        <OrderContent>
          <OrderContainer>Your Order:</OrderContainer>
          {orders.map((order) => (
            <OrderContainer>
              <OrderItem>{order.name}</OrderItem>
            </OrderContainer>
          ))}
        </OrderContent>
      )}
      <DialogFooter>
        <ConfirmButton>Checkout</ConfirmButton>
      </DialogFooter>
    </OrderStyled>
  );
}
