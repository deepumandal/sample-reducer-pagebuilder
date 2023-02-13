import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { HStack } from "@chakra-ui/react";
import Controller from "./view/controller/Controller";
import Simulator from "./view/simulator/Simulator";

function App() {

  return (
    <React.Fragment>
      <HStack sx={{
        border : '1px solid black',
        padding : '1rem 2%',
        justifyContent : 'flex-start',
      }}>
        <Controller />
        <Simulator />
      </HStack>
    </React.Fragment>
  );
}

export default App;
