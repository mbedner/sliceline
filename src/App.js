import React, { useState } from "react";
import { Navbar } from "./Navbar/Navbar";
import { Banner } from "./Banner/Banner";
import { Menu } from "./Menu/Menu";
import { FoodDialog } from "./FoodDialog/FoodDialog";
import { Order } from "./Order/Order";
import { GlobalStyle } from "./Styles/GlobalStyle";

function App() {
  const [openFood, setOpenFood] = useState();

  return (
    <>
      <FoodDialog openFood={openFood} setOpenFood={setOpenFood} />
      <GlobalStyle />
      <Navbar />
      <Order />
      <Banner />
      <Menu setOpenFood={setOpenFood} />
    </>
  );
}

export default App;
