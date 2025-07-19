import React from 'react';
import { Box, Heading, HStack, VStack, Text } from 'native-base';

function Title({ heading1, heading2, paragraph, isFlag }) {
	return (
		<Box w='100%' marginBottom={20}>
			<VStack>
				<Box>
					<VStack>
						<HStack justifyContent='center'>
							<Heading
								color='#E3E3E3'
								textTransform='capitalize'
								fontSize={{ md: '40px', sm: '3xl', base: '25px' }}
								fontWeight={500}
								fontFamily='poppins'
							>
								{heading1}
							</Heading>
							<Heading
								fontSize={{ md: '40px', sm: '3xl', base: '25px' }}
								color='#2EBA55'
								textTransform='capitalize'
								fontWeight={500}
								fontFamily='poppins'
							>
								{heading2}
							</Heading>
						</HStack>

						{/* <Box mx="auto" marginTop={5} w={{ md: "60%", base: "85%" }}>
              <Text
                textAlign={{ md: "center", base: "center" }}
                color="#AFAFAF"
                fontSize={{ md: "xl", base: "md" }}
              >
                {paragraph}
              </Text>
            </Box> */}
					</VStack>
				</Box>
			</VStack>
		</Box>
	);
}

export default Title;
