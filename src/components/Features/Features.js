import { Box, Button, Container, HStack, Link, Wrap } from 'native-base';
import Title from '../Title/Title';
import React from 'react';
import Nbox from './NBox';
function Features() {
	const data = [
		{
			imgUrl: 'group1.svg',

			name: 'TALENT DASHBOARD',
			text: 'Collaboration is unorganized',
			description:
				'Track your artists or music producers in real-time and get analytics on their performance',
		},
		{
			imgUrl: 'group2.svg',

			name: 'MARKETPLACE',
			text: 'Focused on press more than member success',
			description: 'Sell beats and kits to vetted upcoming Artist',
		},
		{
			imgUrl: 'group3.svg',

			name: 'CONTRACTS',
			text: 'Ineffective when sharing or receiving audio files',
			description: 'Send, Receive and Sign contracts',
		},
		{
			imgUrl: 'group4.svg',

			name: 'SECURE FILE MANAGEMENT ',
			text: 'Collaboration is unorganized',
			description: 'Securely share and manage your audio files.',
		},
		{
			imgUrl: 'group5.svg',

			name: 'OPPORTUNITIES PORTAL',
			text: 'Collaboration is unorganized',
			description:
				'Submit for exclusive industry and community driven opportunities',
		},
		{
			imgUrl: 'group6.svg',

			name: 'SUBSCRIBERS',
			text: 'Collaboration is unorganized',
			description:
				'Connect and combine your audience cross platforms keep them in the loop.',
		},
		{
			imgUrl: 'group7.svg',

			name: 'Team Administration',
			text: 'Collaboration is unorganized',
			description:
				'Assign roles and permissions to your team members so they can stay in the loop and manage business and opportunities for you and your team',
		},
		{
			imgUrl: 'group8.svg',

			name: 'RealTime',
			text: 'Collaboration is unorganized',
			description:
				'Get basic and high-level feedback on your tracks from industry experts. ',
		},
		{
			imgUrl: 'group9.svg',

			name: 'ConnectMe',
			text: 'Collaboration is unorganized',
			description: 'Find artists or co-producers on demand',
		},
	];
	return (
		<div id='features'>
			<Box marginTop={20}>
				<Box width='95%' marginX='auto'>
					<Title
						heading1='features'
						isFlag={true}
						size='lg'
						paragraph='Here is a breakdown of the feature set our members gain access to. We are focused on being a full service provider for your team and their needs.'
					></Title>

					<Box>
						<HStack
							alignItems='center'
							justifyContent='center'
							alignSelf={{ md: 'center', base: '' }}
							// flexGrow={1}
							flexWrap={'wrap'}
							// w="100%"
						>
							{data.map((each, index) => {
								return (
									<Nbox
										key={index}
										id={index}
										imgSizeXl='40%'
										imgSizeLg='md'
										wXl='24%'
										spaceXl='4rem'
										wlg='24%'
										spaceLg='2.5rem'
										wMd='31%'
										spaceMd='4rem'
										imgSizeMd='100%'
										wSm='100%'
										spaceSm='6rem'
										imgSizeSm='100%'
										isFeatures={true}
										baseImg='35%'
										// baseW='100%'
										name={each.name}
										imgUrl={each.imgUrl}
										description={each.description}
										folder='features'
									/>
								);
							})}
						</HStack>
					</Box>

					<Box w='100%' marginTop={20}>
						<Link href='https://unitedmarket.typeform.com/to/OclKy2Mw'>
							<Button
								py={3}
								w='350px'
								backgroundColor='#2EBB55'
								mx='auto'
								_text={{ fontSize: { md: '20px', sm: '16px', base: '16px' } }}
								fontFamily='poppins'
								borderColor='#2EBA55'
								borderWidth={1}
								_hover={{
									backgroundColor: 'transparent',
									_text: {
										color: '#2EBA55',
									},
								}}
							>
								Apply For Membership
							</Button>
						</Link>
					</Box>
				</Box>
			</Box>
		</div>
	);
}

export default Features;
