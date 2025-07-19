import React from "react";
import {
  Box,
  VStack,
  AspectRatio,
  Image,
  Text,
  Heading,
  Button,
} from "native-base";

function Adavantages({ imgUrls, text }) {
  return (
    <Box
      w={{ md: "23%", sm: "30%", base: "35%" }}
      mx={{ md: "2rem", base: "1rem" }}
      // w={{ lg: "32.3%", base: "35%" }}
      my={2}
      // mx={{ md: "0", base: "5" }}
      alignItems="center"
    >
      <AspectRatio w="100%">
        <Image
          w={{ lg: "100%", md: "100%", sm: "100%", base: "90%" }}
          // h="100px"
          // mx={"auto"}
          resizeMode="contain"
          source={require(`../../assets/advanatges/${imgUrls}`)}
        />
      </AspectRatio>
      <Box w="100%">
        <Heading
          fontWeight={"normal"}
          fontSize={{ lg: "md", md: "lg", sm: "md" }}
          // w="80%"
          color="#AFAFAF"
        >
          {text}
        </Heading>
      </Box>
    </Box>
  );
}

export default Adavantages;
