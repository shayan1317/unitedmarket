import { Box, HStack, Text, Input, Button, Container } from 'native-base';
import React from 'react';
import { LogBox } from 'react-native-web';
import CustomForm from './CustomForm';

function GetNotified() {
	return (
		<Box my={10} paddingY={8} backgroundColor='#1C1B1B'>
			<Container marginX='auto' w='100%'>
				<HStack
					w='100%'
					direction={{ md: 'row', base: 'column' }}
					justifyContent='space-between'
					space={10}
					alignItems='center'
				>
					<Text
						fontSize={{ md: '24px', base: '16px' }}
						textAlign={{ md: 'start', base: 'center' }}
						color='#E3E3E3'
						width={{ md: '700px', base: '' }}
						fontFamily='poppins'
					>
						ENTER YOUR EMAIL TO GET NOTIFIED OF INDUSTRY, SYNC LICENSING, AND
						PLACEMENT OPPORTUNITIES
					</Text>
					<CustomForm />
				</HStack>
			</Container>
		</Box>
	);
}

export default GetNotified;
