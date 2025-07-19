import React from 'react';
import { Heading, Box, VStack, HStack } from 'native-base';
import CustomersBox from './CustomersBox';
function Customers() {
	const row1 = [
		{
			imgUrl: 'logo1.svg',
			description: 'Collaboration is unorganized',
		},
		{
			imgUrl: 'logo2.svg',
			description: 'Focused on press more than member success',
		},

		{
			imgUrl: 'logo3.svg',
			description: 'Collaboration is unorganized',
		},
		{
			imgUrl: 'logo4.svg',
			description: 'Not built to service music creators and their teams',
		},
	];
	const row2 = [
		{
			imgUrl: 'logo5.svg',
			description: 'No protection on both sides of the transaction',
		},
		{
			imgUrl: 'logo6.svg',
			description: 'Collaboration is unorganized',
		},
		{
			imgUrl: 'logo7.svg',
			description: 'Focused on press more than member success',
		},

		{
			imgUrl: 'logo8.svg',
			description: 'Not built to service music creators and their teams',
		},
		{
			imgUrl: 'logo9.svg',
			description: 'Ineffective when sharing or receiving audio files',
		},
	];
	const row3 = [
		{
			imgUrl: 'logo10.svg',
			description: 'Ineffective when sharing or receiving audio files',
		},
		{
			imgUrl: 'logo11.svg',
			description: 'No protection on both sides of the transaction',
		},
	];

	return (
		<Box my={20}>
			<Heading
				color='#fff'
				textAlign='center'
				fontSize={{ md: '40px', sm: '2xl', base: '24px' }}
				marginTop={{ md: '30px', base: '20px' }}
				marginBottom={{ md: '50px', base: '30px' }}
				fontWeight={500}
				fontFamily='Clash Display'
			>
				AS SEEN ON
			</Heading>
			<Box
				my={8}
				w={{ xl: '85%', lg: '92%', md: '97%', base: '98%' }}
				marginX='auto'
			>
				<HStack alignItems='center' justifyContent='center' flexWrap={'wrap'}>
					{row1.map((data, index) => {
						return (
							<CustomersBox
								key={index}
								imgsizeXl='5xl'
								imgSizeBase='lg'
								wbase='20%'
								wlg='22%'
								wmd='16%'
								wsm='20%'
								imgUrls={data.imgUrl}
								h={'75px'}
							/>
						);
					})}
				</HStack>

				<HStack alignItems='center' justifyContent='center' flexWrap={'wrap'}>
					{row2.map((data, index) => {
						return (
							<CustomersBox
								key={index}
								imgsizeXl='5xl'
								wbase='14%'
								imgSizeBase='sm'
								wlg='15%'
								wmd='12%'
								wsm='15%'
								// h='75px'
								h={'100px'}
								imgUrls={data.imgUrl}
							/>
						);
					})}
				</HStack>
				<HStack alignItems='center' justifyContent='center' flexWrap={'wrap'}>
					{row3.map((data, index) => {
						return (
							<CustomersBox
								key={index}
								imgSizeBase='5xl'
								imgsizeXl='2xl'
								wbase='15%'
								wlg='20%'
								wmd='12%'
								wsm='15%'
								h={'75px'}
								imgUrls={data.imgUrl}
							/>
						);
					})}
				</HStack>
			</Box>
		</Box>
	);
}

export default Customers;
