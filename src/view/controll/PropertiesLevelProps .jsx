import { Button, HStack, Input, Select, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const PropertiesLevelProps = () => {
  const dispatch = useDispatch();
  const slideshow = useSelector((state) => state.SlideShow);

  const [slidewhowkey, setSlidewhowkey] = useState("");
  const [value, setValue] = useState("");

  const [gridkey, setGridkey] = useState("");
  const [gridvalue, setGridvalue] = useState("");

  let valuesOptions = [
    "backgroundColor",
    "textAlignment",
    "heightLabel",
    "heightPercentage",
    "heightPercentage",
    "heightPercentage",
    "margin",
    "marginTop",
    "marginBottom",
    "marginLeft",
    "marginRight",
    "padding",
    "paddingTop",
    "paddingBottom",
    "paddingLeft",
    "paddingRight",
    "borderTopLeftRadius",
    "borderTopRightRadius",
    "borderBottomLeftRadius",
    "borderBottomRightRadius",
    "display",
    "scrollable",
    "border",
    "width",
    "height",
    "justifyContent",
    "alignItems",
    "url",
    "backgroundImage",
    "backgroundSize",
    "backgroundRepeat",
    "backgroundAttachment",
    "backgroundPosition",
    "backgroundOpacity",
    "backgroundOpacityValue",
  ];
  let gridOptions = [
    "gridTemplateColumns",
    "gridTemplateRows",
    "rowGap",
    "columnGap",
    "gridAutoRows",
    "gridAutoFlow",
  ];
  let flexProps = ["flexDirection", "flexWrap", "flexFlow"];

  let scrollProps = ["overflowX", "overflowY", "scrollBehavior"];

  const handleOnchangeslideshowvalue = (e) => {
    const name = e.target.name;
    if (name === "key") {
      setSlidewhowkey(e.target.value);
    } else if (name === "value") {
      setValue(e.target.value);
    }
  };
  const handleClick = (e) => {
    e.preventDefault();
    let map = {};
    map[slidewhowkey] = value;
    dispatch({ type: "SLIDE_SHOW_PROPERTIES_LEVEL", payload: map });
  };

  // grid 
  const handleOnchangeslideshowgridvalue = (e) => {
    const name = e.target.name;
    if (name === "key") {
      setGridkey(e.target.value);
    } else if (name === "value") {
      setGridvalue(e.target.value);
    }
  };

 
  const handlegridClick = (e) => {
    e.preventDefault();
    let map = {};
    map[gridkey] = gridvalue;
    console.log(map);

    dispatch({ type: "SLIDE_SHOW_PROPERTIES_LEVEL_DISPLAY", payload: map });
  };
   
  return (
    <>
      <Text color={"red"}> Properties </Text>{" "}
      <HStack>
        <Select
          placeholder="key"
          name="key"
          onChange={handleOnchangeslideshowvalue}
        >
          {valuesOptions.map((item, index) => (
            <option key={index} value={item}>
              {" "}
              {item}{" "}
            </option>
          ))}
        </Select>
        <Input
          type="text"
          name="value"
          placeholder="enter your value"
          onChange={handleOnchangeslideshowvalue}
        />
      </HStack>
      <Button onClick={handleClick}> update </Button>
      {/* ////////////////////////////////////////////////////// */}
      <Text> gridOptions </Text>
      <HStack>
        <Select
          placeholder="key"
          name="key"
          onChange={handleOnchangeslideshowgridvalue}
        >
          {gridOptions.map((item, index) => (
            <option key={index} value={item}>
              {" "}
              {item}{" "}
            </option>
          ))}
        </Select>
        <Input
          type="text"
          name="value"
          placeholder="enter your value"
          onChange={handleOnchangeslideshowgridvalue}
        />
      </HStack>
      <Button onClick={handlegridClick}> update </Button>
    </>
  );
};

export default PropertiesLevelProps;
