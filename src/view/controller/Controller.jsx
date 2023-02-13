import React, { useState } from "react";
import { VStack, Heading, Text, Select } from "@chakra-ui/react";
import TopLevelProp from "../controll/TopLevelProp";
import PropertiesLevelProps from "../controll/PropertiesLevelProps ";
import SlideShowSection from "../controll/SlideShowSection";

let controllOption = ["topLevel", "properties", "section"];
const Controller = () => {
  const [select, setSelect] = useState("topLevel");
  
  const handleonControllerchange = (e) => {
    setSelect(e.target.value);
  };

  return (
    <VStack
      sx={{
        border: "1px solid red",
        width: "30vw",
        height: "88vh",
      }}
    >
      <Heading> Controller </Heading>
      <Select value={select} onChange={handleonControllerchange}>
        {controllOption.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </Select>

      {select === "topLevel" && <TopLevelProp />}
      {select === "properties" && <PropertiesLevelProps />}
      {select === "section" && <SlideShowSection />}
    </VStack>
  );
};

export default Controller;
