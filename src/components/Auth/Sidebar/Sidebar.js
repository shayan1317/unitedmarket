import React, { useState } from "react";
import { Box, VStack, Image, Radio, Text, HStack, Heading } from "native-base";

import StepperForm from "./StepperForm";
function Sidebar({ handleNext, handleBack }) {
  // const Options = [
  //   {
  //     description: "Email/phone number",
  //   },

  //   {
  //     description: "Password",
  //   },
  //   {
  //     description: "choose account type",
  //   },

  //   {
  //     description: "set label name",
  //   },
  //   {
  //     description: "review",
  //   },
  // ];
  return (
    <Box backgroundColor="#000201" w="40%">
      <Box my={"auto"} p={10}>
        <Box paddingLeft={2}>
          <Image
            size={"xl"}
            resizeMode="contain"
            source={require("../../../assets/footers/logo.png")}
          />
        </Box>
        <Box>
          {/* <VStack>
            {Options.map((option) => {
              return (
                <HStack>
                  <RadioBtn />
                  <Box>
                    <Image
                      source={require("../../../assets/footers/logo.png")}
                    />
                  </Box>
                  <Heading fontSize={"md"} fontWeight="normal" color="#2EBB55">
                    {option.description}
                  </Heading>
                </HStack>
              );
            })}
          </VStack> */}
          <StepperForm handleBack={handleBack} handleNext={handleNext} />
        </Box>
      </Box>
    </Box>
  );
}

export default Sidebar;
