import React from "react";
import { Box, Text, HStack, Image, Link } from "native-base";

function ConnectWith() {
 
  return (
    <Box mt={10} textAlign="center">
      <Text
        color="#1C1B1B"
        textTransform="capitalize"
        mb={5}
        fontSize="sm"
        fontWeight="semibold"
        fontFamily="poppins"
      >
        continue with
      </Text>
      <HStack space={3} justifyContent="center" alignItems="center">
        <Box
          py={2}
          px={6}
          borderColor="#AFAFAF"
          borderWidth={1}
          borderRadius={5}
        >
          <Image
            size={"14"}
            resizeMode="contain"
            source={require("./../../../assets/LoginScreens/google.png")}
          />
        </Box>
        <Text fontFamily="poppins" fontWeight={"semibold"}>
          OR
        </Text>
        <Box
          py={2}
          px={6}
          borderColor="#AFAFAF"
          borderWidth={1}
          borderRadius={5}
        >
          <Image
            size={"15px"}
            resizeMode="contain"
            source={require("./../../../assets/LoginScreens/facebook.png")}
          />
        </Box>
      </HStack>
      <Box mt={5}>
        <HStack justifyContent="center" space={2}>
          <Text
            fontWeight={"semibold"}
            fontFamily="poppins"
            color={"#1C1B1B"}
            textTransform={"capitalize"}
          >
            already have an account
          </Text>
          <Link
            _text={{
              color: "#2EBB55",
              fontWeight: "semibold",
              fontFamily: "poppins",
            }}
            textTransform={"capitalize"}
          >
            sign up
          </Link>
        </HStack>
      </Box>
    </Box>
  );
}

export default ConnectWith;
