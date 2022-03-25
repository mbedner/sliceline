import React from "react";
import styledComponents from "styled-components";
import {
  ConfirmButton,
  DialogFooter,
  DialogContent,
} from "../FoodDialog/FoodDialog";
import { formatPrice } from "../Data/FoodData";
import { getPrice } from "../FoodDialog/FoodDialog";

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
    ${({ editable }) =>
      editable
        ? `
    &:hover {
      cursor: pointer;
      background-color: #e7e7e7;
    }
  `
        : `
    pointer-events: none; 
  `}

`;

const OrderItem = styledComponents.div`
    padding: 10px 0;
    display: grid;
    grid-template-columns: 20px 150px 20px 60px;
    justify-content: space-between;
`;

const DetailItem = styledComponents.div`
    color: gray;
    font-size: 10px;
`;

export function Order({ orders, setOrders, setOpenFood }) {
  const subtotal = orders.reduce((total, order) => {
    return total + getPrice(order);
  }, 0);
  const tax = subtotal * 0.07;
  const total = subtotal + tax;

  const deleteItem = (index) => {
    const newOrders = [...orders];
    newOrders.splice(index, 1);
    setOrders(newOrders);
  };

  return (
    <OrderStyled>
      {orders.length === 0 ? (
        <OrderContent> Your Order Looks Pretty Empty</OrderContent>
      ) : (
        <OrderContent>
          <OrderContainer>Your Order:</OrderContainer>
          {orders.map((order, index) => (
            <OrderContainer editable>
              <OrderItem
                onClick={() => {
                  setOpenFood({ ...order, index });
                }}
              >
                <div>{order.quantity}</div>
                <div>{order.name}</div>
                <div
                  style={{ cursor: "pointer" }}
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteItem(index);
                  }}
                >
                  <span role="img" aria-label="trash can">
                    🗑️
                  </span>
                </div>
                <div>{formatPrice(getPrice(order))}</div>
              </OrderItem>
              <DetailItem>
                {order.toppings
                  .filter((t) => t.checked)
                  .map((toppings) => toppings.name)
                  .join(", ")}
              </DetailItem>
              {order.choice && <DetailItem>{order.choice}</DetailItem>}
            </OrderContainer>
          ))}
          <OrderContainer>
            <OrderItem>
              <div />
              <div>Sub-Total</div>
              <div />
              <div>{formatPrice(subtotal)}</div>
            </OrderItem>
            <OrderItem>
              <div />
              <div>Tax</div>
              <div />
              <div>{formatPrice(tax)}</div>
            </OrderItem>
            <OrderItem>
              <div />
              <div>Total</div>
              <div />
              <div>{formatPrice(total)}</div>
            </OrderItem>
          </OrderContainer>
        </OrderContent>
      )}
      <DialogFooter>
        <ConfirmButton>Checkout</ConfirmButton>
      </DialogFooter>
    </OrderStyled>
  );
}
