import React, { useState } from "react";
import { Box, VStack, Image, Radio, Text, HStack, Heading } from "native-base";

import StepperForm from "./StepperForm";
function Sidebar({ isLogin, handleNext, handleBack }) {
  return (
    <Box backgroundColor="#000201" w="40%">
      <Box my={"auto"} p={10}>
        <Box paddingLeft={2} mb={10}>
          <Image
            size={"xl"}
            resizeMode="contain"
            source={require("../../../assets/footers/logo.png")}
          />
        </Box>
        <Box>
          {isLogin ? (
            <VStack space={4} paddingLeft={2}>
              <Heading color="white" fontSize="2xl">Welcome Back!</Heading>
              <Text color="#AFAFAF">Please sign in to access your account and manage your marketplace activities.</Text>
            </VStack>
          ) : (
            <StepperForm handleBack={handleBack} handleNext={handleNext} />
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default Sidebar;
