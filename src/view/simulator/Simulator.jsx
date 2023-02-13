import React from "react";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
  VStack,
} from "@chakra-ui/react";
import FirstLevelRender from "../simulator-control/FirstLevelRender";
import VideoContentsimulator from "../simulator-control/VideoContentsimulator";
import PropertiesLevelRender from "../simulator-control/PropertiesLevelRender";
const Simulator = () => {
  return (
    <VStack
      sx={{
        border: "1px solid red",
        width: "78vw",
        height: "88vh",
      }}
    >
      <Heading>FirstLevelRender</Heading>

      <Accordion>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Section 1 title
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <FirstLevelRender />
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Section 2 title
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <PropertiesLevelRender />
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Video box here
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <VideoContentsimulator />{" "}
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </VStack>
  );
};

export default Simulator;
