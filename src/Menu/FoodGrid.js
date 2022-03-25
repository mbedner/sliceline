import styledComponents from "styled-components";
import { Title } from "../Styles/title";

export const FoodGrid = styledComponents.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
`;

export const FoodLabel = styledComponents.div`
    position: absolute;
    background-color: rgba(255, 255, 255, 0.8);
    padding: 5px;
`;

export const Food = styledComponents(Title)`
    height: 100px;
    background-image: ${({ img }) => `url(${img});`}
    background-position: center;
    background-size: cover;
    filter: contrast(75%);
    padding: 10px;
    font-size: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px 0 gray;
    &:hover {
        cursor: pointer;
        opacity: .7;
    }
`;
