import React from 'react';
import { Box, Image, AspectRatio, Container, HStack, Text } from 'native-base';
import FooterIcons from './FooterIcons';
import LogoSVG from '../../assets/footers/logo.svg';

function Footer() {
	const imgs = ['linkedin.svg', 'twitter.svg', 'instagram.svg', 'youtube.svg'];
	const imgUrls = [
		'https://www.linkedin.com/company/unitedmarket',
		'https://twitter.com/unitedmarketapp?s=11&t=BeQLHqOtLHY__VpauHyFEw',
		'https://instagram.com/unitedmarket?utm_medium',
		'https://www.youtube.com/channel/UCuWxIf970SF9k-2KrAVxcOQ?app=desktop',
	];
	return (
		<Box py={3}>
			<Container w='100%' marginX='auto'>
				<HStack
					direction={{ md: 'row', base: 'column' }}
					w='100%'
					alignItems='center'
					justifyContent='space-between'
				>
					<Image resizeMode='contain' size='xl' source={LogoSVG} />
					<Box>
						<HStack alignItems='center'>
							<Text
								mx={2}
								color='#E3E3E3'
								textTransform='uppercase'
								fontSize={{ md: '30', base: '16px' }}
								fontFamily='poppins'
							>
								follow us
							</Text>
							{imgs.map((imgs1, index) => {
								return (
									<FooterIcons
										key={index}
										imgUrl={imgUrls[index]}
										imgName={imgs[index]}
									/>
								);
							})}
						</HStack>
					</Box>
				</HStack>
			</Container>
		</Box>
	);
}

export default Footer;
