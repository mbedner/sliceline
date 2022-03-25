import React from "react";
import styledComponents from "styled-components";

const CursorPointer = `cursor: pointer`;

const RadioInput = styledComponents.input`
  ${CursorPointer}
`;

const Label = styledComponents.label`
  ${CursorPointer}
`;

export function Choices({ openFood, choiceRadio }) {
  return (
    <>
      <h3>Choose One</h3>
      {openFood.choices.map((choice) => (
        <>
          <RadioInput
            type="radio"
            id={choice}
            name="choice"
            value={choice}
            checked={choiceRadio.value === choice}
            onChange={choiceRadio.onChange}
          />
          <Label for={choice}> {choice} </Label>{" "}
        </>
      ))}
    </>
  );
}
