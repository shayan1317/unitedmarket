import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Container,
  HStack,
  VStack,
  Heading,
  Text,
  Button,
  AspectRatio,
  Image,
  Link,
  Hidden,
} from "native-base";

function Banner() {
  const navigate = useNavigate();
  var bannerImg = require("../../assets/banner/banner.png");
  return (
    <div id="home">
      <Box backgroundColor="#000000" paddingY={70}>
        <Container w="100%" marginX="auto">
          <Box w="100%">
            <VStack>
              <Box marginBottom={10}>
                <HStack
                  space={2}
                  w="100%"
                  textTransform="capitalize"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Heading
                    textAlign="center"
                    fontSize={{ lg: "60px", md: "60px", base: "23px" }}
                    color="#E3E3E3"
                    fontFamily="poppins"
                    fontWeight="normal"
                  >
                    music
                  </Heading>
                  <Heading
                    textAlign="center"
                    fontSize={{ lg: "60px", md: "60px", base: "23px" }}
                    color="#E3E3E3"
                    // fontFamily="poppins"
                    fontWeight="extrabold"
                  >
                    business
                  </Heading>
                  <Heading
                    textAlign="center"
                    fontSize={{ lg: "60px", md: "60px", base: "23px" }}
                    color="#E3E3E3"
                    fontFamily="poppins"
                    fontWeight="400"
                  >
                    made
                  </Heading>
                  <Hidden from="base" till="md">
                    <Heading
                      marginTop={{ base: "2", md: "0" }}
                      textAlign={{ base: "center" }}
                      fontSize={{ lg: "60px", base: "23px" }}
                      color="#2EBA55"
                      fontFamily="poppins"
                      fontWeight="400"
                    >
                      simple.
                    </Heading>
                  </Hidden>
                </HStack>
                <Hidden from="md">
                  <Heading
                    marginTop={{ base: "2", md: "0" }}
                    textAlign={{ base: "center" }}
                    fontSize={{ lg: "60px", base: "23px" }}
                    color="#2EBA55"
                    fontFamily="poppins"
                    fontWeight="400"
                    textTransform="capitalize"
                  >
                    simple.
                  </Heading>
                </Hidden>
              </Box>
              {/* <Box w={'100%'} marginX='auto' marginBottom={5}>
								<Text
									textAlign='center'
									fontSize='15px'
									color='#AFAFAF'
									marginTop='3'
									fontFamily='Poppins'
								>
									Music industry leading opportunity curating, file management
									and team workflow software. Gain more placements with United
									Market.
								</Text>
							</Box> */}
              <Box marginBottom={4}>
                <Link onPress={() => navigate("/signup")}>
                  <Button
                    color="#E3E3E3"
                    borderColor="#2EBA55"
                    borderWidth={1}
                    marginX="auto"
                    w={{ md: "350px", base: "250px" }}
                    // _text={}='25px'
                    fontFamily="Poppins"
                    background="#2EBB55"
                    _text={{
                      fontSize: { md: "24px", sm: "16px", base: "16px" },
                    }}
                    _hover={{
                      backgroundColor: "transparent",
                      _text: {
                        color: "#2EBA55",
                      },
                    }}
                  >
                    Apply For Membership
                  </Button>
                </Link>
              </Box>
              <Box
                textAlign="center"
                marginTop={{ md: "18px", sm: "16px", base: "16px" }}
              >
                <Text color="#2EBB55">
                  <HStack space={"4px"}>
                    <Text fontSize={{ md: "18px", sm: "16px", base: "16px" }}>
                      Psst.. We
                    </Text>

                    <Image
                      width="20px"
                      resizeMode="contain"
                      height="20px"
                      source={require("..//..//assets/banner/ear1.png")}
                    />

                    <Text fontSize={{ md: "18px", sm: "16px", base: "16px" }}>
                      to your feedback
                    </Text>
                  </HStack>
                </Text>
              </Box>
            </VStack>
          </Box>
          <Box w="100%" marginX="auto">
            {/* <Center w="100%" h="100%">
            <Image resizeMode="cover" source={bannerImg} alt="Alternate Text" />
          </Center> */}
            <AspectRatio w="100%" ratio={16 / 9}>
              <Image marginTop={8} source={bannerImg} alt="image" />
            </AspectRatio>
          </Box>
        </Container>
      </Box>
    </div>
  );
}

export default Banner;
