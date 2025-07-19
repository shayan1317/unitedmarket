import { Box, Heading, HStack, VStack, Text, Button } from "native-base";
import React from "react";
import { userDetailsContext } from "../Form";
import { useContext } from "react";
function AccountType({ getaccounttype }) {
  const accounts = ["artist", "manager", "musci/producer", "A & R", "label"];

  // const getaccounttype(e){

  // }
  const selectaccounttype = (e) => {
    getaccounttype(e);
  };
  return (
    <Box>
      <Heading mb={3}>I’m a(n):</Heading>
      <Box>
        <VStack space={5}>
          <HStack
            space={8}
            flexGrow={1}
            flexWrap={"wrap"}
            justifyContent={{ base: "center" }}
          >
            <Button
              onPress={selectaccounttype}
              _focus={{
                backgroundColor: "#2EBB55",
                _text: {
                  color: "#E3E3E3",
                },
              }}
              _text={{
                color: "#AFAFAF",
                textTransform: "capitalize",
                fontFamily: "poppins",
              }}
              _hover={{
                backgroundColor: "#2EBB55",
                _text: {
                  color: "#E3E3E3",
                },
              }}
              backgroundColor={"transparent"}
              _
              borderColor={"#AFAFAF"}
              borderRadius={5}
              borderWidth="1"
              w={{ lg: "28%", sm: "24%" }}
              h={"110px"}
            >
              {accounts[0]}
            </Button>
            <Button
              onPress={selectaccounttype}
              _focus={{
                backgroundColor: "#2EBB55",
                _text: {
                  color: "#E3E3E3",
                },
              }}
              _text={{
                color: "#AFAFAF",
                textTransform: "capitalize",
                fontFamily: "poppins",
              }}
              _hover={{
                backgroundColor: "#2EBB55",
                _text: {
                  color: "#E3E3E3",
                },
              }}
              backgroundColor={"transparent"}
              borderColor={"#AFAFAF"}
              borderRadius={5}
              borderWidth="1"
              h={"110px"}
              w={{ lg: "28%", sm: "24%" }}
            >
              {accounts[1]}{" "}
            </Button>
            <Button
              onPress={selectaccounttype}
              _focus={{
                backgroundColor: "#2EBB55",
                _text: {
                  color: "#E3E3E3",
                },
              }}
              _text={{
                color: "#AFAFAF",
                textTransform: "capitalize",
                fontFamily: "poppins",
              }}
              _hover={{
                backgroundColor: "#2EBB55",
                _text: {
                  color: "#E3E3E3",
                },
              }}
              backgroundColor={"transparent"}
              borderColor={"#AFAFAF"}
              borderRadius={5}
              borderWidth="1"
              h={"110px"}
              w={{ lg: "28%", sm: "24%" }}
            >
              {" "}
              {accounts[2]}{" "}
            </Button>
          </HStack>
          <Box>
            <HStack
              space={8}
              flexGrow={1}
              flexWrap={"wrap"}
              justifyContent={{ base: "center" }}
              alignItems={{ md: "center", base: "start" }}
            >
              <Button
                onPress={selectaccounttype}
                _focus={{
                  backgroundColor: "#2EBB55",
                  _text: {
                    color: "#E3E3E3",
                  },
                }}
                _text={{
                  color: "#AFAFAF",
                  textTransform: "capitalize",
                  fontFamily: "poppins",
                }}
                _hover={{
                  backgroundColor: "#2EBB55",
                  _text: {
                    color: "#E3E3E3",
                  },
                }}
                backgroundColor={"transparent"}
                borderColor={"#AFAFAF"}
                borderRadius={5}
                borderWidth="1"
                h={"110px"}
                w={{ lg: "28%", sm: "24%" }}
              >
                {" "}
                {accounts[3]}{" "}
              </Button>
              <Button
                onPress={selectaccounttype}
                _focus={{
                  backgroundColor: "#2EBB55",
                  _text: {
                    color: "#E3E3E3",
                  },
                }}
                _text={{
                  color: "#AFAFAF",
                  textTransform: "capitalize",
                  fontFamily: "poppins",
                }}
                _hover={{
                  backgroundColor: "#2EBB55",
                  _text: {
                    color: "#E3E3E3",
                  },
                }}
                backgroundColor={"transparent"}
                borderColor={"#AFAFAF"}
                borderRadius={5}
                borderWidth="1"
                h={"110px"}
                w={{ lg: "28%", sm: "24%" }}
              >
                {accounts[4]}{" "}
              </Button>
            </HStack>
          </Box>
        </VStack>
      </Box>
    </Box>
  );
}

export default AccountType;
