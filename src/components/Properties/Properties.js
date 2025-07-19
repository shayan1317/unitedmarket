import React, { useState } from 'react';
import Tab from '../Tabs/Tab';
import FeaturesWithUnited from '../ViewFeatures/FeaturesWithUnited';
import OneSvg from '../../assets/advanatges/one.svg';
import TwoSvg from '../../assets/advanatges/two.svg';
import ThreeSvg from '../../assets/advanatges/three.svg';
import FourSvg from '../../assets/advanatges/four.svg';
import FiveSvg from '../../assets/advanatges/five.svg';
import SixSvg from '../../assets/advanatges/six.svg';
import { Box, Text, HStack, VStack, Hidden, Image } from 'native-base';
import { tab } from '@testing-library/user-event/dist/tab';

// import Adavantages from "../Advantages/Adavantages";
const array = ['With United Market ', 'Without United Market '];
function Properties() {
	const [activetab, setactivetab] = useState('With United Market ');
	const [previousTab, setPreviousTab] = useState('Without United Market ');
	const [tabValue, setTabValue] = useState(0);

	const toggleTabs = (value) => {
		setTabValue(value);

		const arr = array.filter((data) => data !== value);

		setactivetab(value);
		setPreviousTab(arr[0]);
	};
	const properties = [
		{
			imgUrl: 'one.svg',
			description: 'Collaboration is unorganized',
		},
		// {
		// 	imgUrl: 'two.svg',
		// 	description: 'Focused on press more than member success',
		// },
		{
			imgUrl: 'six.svg',
			description: 'No protection on both sides of the transaction',
		},
		{
			imgUrl: 'three.svg',
			description: 'Ineffective when sharing or receiving audio files',
		},

		{
			imgUrl: 'four.svg',
			description:
				'Quickly runs out of storage and lacks proper tools for music creators.',
		},
		{
			imgUrl: 'five.svg',
			description: 'Not built to service music creators and their teams',
		},
	];
	return (
		<Box backgroundColor='#000000' py={70}>
			<Box width='95%' marginX='auto'>
				<Tab
					activetab={activetab}
					previousTab={previousTab}
					tabValue={tabValue}
					toggleTabs={toggleTabs}
				/>
				{(activetab === 'Without United Market ' || tabValue === 1) && (
					<Box width='100%' marginTop={20}>
						<HStack
							flexGrow={1}
							flexWrap={'wrap'}
							justifyContent={{ md: 'center' }}
							alignItems={{ md: 'center', base: 'start' }}
							space={{ md: '100px', base: '50px' }}
							px={{ base: '5' }}
						>
							<Box
								alignItems={{ md: 'start', base: 'center' }}
								alignSelf={'baseline'}
								textAlign='left'
								w={{
									xl: '17%',
									lg: '18%',
									md: '22%',
									sm: '22%',
									base: '33.3%',
								}}
								my={8}
							>
								<VStack
									alignItems={{ md: 'start', base: 'center' }}
									alignSelf={'baseline'}
									space={{ md: 10, base: 3 }}
									marginBottom={{ md: '30px', lg: '30px', sm: '10px' }}
									textAlign='left'
								>
									<Image
										size={{
											xl: '180',
											lg: '170',
											md: '150',
											sm: '100',
											base: '100',
										}}
										// width='183'
										height='123'
										resizeMode='contain'
										source={OneSvg}
									/>

									<Box>
										<Text
											fontSize={{
												xl: '1.4rem',
												lg: '1.3rem',
												md: '1rem',
												base: '16px',
											}}
											color='#AFAFAF'
											fontFamily='poppins'
										>
											{properties[0].description}
										</Text>
									</Box>
								</VStack>
							</Box>
							<Box
								alignItems={{ md: 'start', base: 'center' }}
								alignSelf={'baseline'}
								textAlign='left'
								w={{
									xl: '17%',
									lg: '18%',
									md: '22%',
									sm: '22%',
									base: '33.3%',
								}}
								my={8}
							>
								<VStack
									alignItems={{ md: 'start', base: 'center' }}
									alignSelf={'baseline'}
									space={{ md: 7, base: 3 }}
									marginBottom={{ md: '30px', lg: '30px', sm: '10px' }}
									textAlign='left'
								>
									<Image
										size={{
											xl: '180',
											lg: '170',
											md: '150',
											sm: '100',
											base: '100',
										}}
										// width='183'
										height='123'
										resizeMode='contain'
										source={SixSvg}
									/>

									<Box>
										<Text
											fontSize={{
												xl: '1.4rem',
												lg: '1.3rem',
												md: '1rem',
												base: '16px',
											}}
											color='#AFAFAF'
											fontFamily='poppins'
										>
											{properties[1].description}
										</Text>
									</Box>
								</VStack>
							</Box>
							<Box
								alignItems={{ md: 'start', base: 'center' }}
								alignSelf={'baseline'}
								textAlign='left'
								w={{
									xl: '17%',
									lg: '18%',
									md: '22%',
									sm: '22%',
									base: '33.3%',
								}}
								my={8}
							>
								<VStack
									alignItems={{ md: 'start', base: 'center' }}
									alignSelf={'baseline'}
									space={{ md: 7, base: 3 }}
									marginBottom={{ md: '30px', lg: '30px', sm: '10px' }}
									textAlign='left'
								>
									<Image
										size={{
											xl: '180',
											lg: '170',
											md: '150',
											sm: '100',
											base: '100',
										}}
										// width='183'
										height='123'
										resizeMode='contain'
										source={ThreeSvg}
									/>

									<Box>
										<Text
											fontSize={{
												xl: '1.4rem',
												lg: '1.3rem',
												md: '1rem',
												base: '16px',
											}}
											color='#AFAFAF'
											fontFamily='poppins'
										>
											{properties[2].description}
										</Text>
									</Box>
								</VStack>
							</Box>
							<Hidden from='xl' till='md'>
								<Box
									alignItems={{ md: 'start', base: 'center' }}
									alignSelf={'baseline'}
									textAlign='left'
									w={{
										xl: '17%',
										lg: '18%',
										md: '22%',
										sm: '22%',
										base: '33.3%',
									}}
									my={8}
								>
									<VStack
										alignItems={{ md: 'start', base: 'center' }}
										alignSelf={'baseline'}
										space={{ md: 7, base: 3 }}
										marginBottom={{ md: '30px', lg: '30px', sm: '10px' }}
										textAlign='left'
									>
										<Image
											size={{
												xl: '180',
												lg: '170',
												md: '150',
												sm: '100',
												base: '100',
											}}
											// width='183'
											height='123'
											resizeMode='contain'
											source={FourSvg}
										/>

										<Box>
											<Text
												fontSize={{
													xl: '1.4rem',
													lg: '1.3rem',
													md: '1rem',
													base: '16px',
												}}
												color='#AFAFAF'
												fontFamily='poppins'
											>
												{properties[3].description}
											</Text>
										</Box>
									</VStack>
								</Box>
								<Box
									alignItems={{ md: 'start', base: 'center' }}
									alignSelf={'baseline'}
									textAlign='left'
									w={{
										xl: '17%',
										lg: '18%',
										md: '22%',
										sm: '22%',
										base: '100%',
									}}
									my={6}
									px={20}
								>
									<VStack
										alignItems={{ md: 'start', base: 'center' }}
										alignSelf={'baseline'}
										space={{ md: 7, base: 3 }}
										marginBottom={{ md: '30px', lg: '30px', sm: '10px' }}
										textAlign='left'
									>
										<Image
											size={{
												xl: '180',
												lg: '170',
												md: '150',
												sm: '100',
												base: '100',
											}}
											// width='183'
											height='123'
											resizeMode='contain'
											source={FiveSvg}
										/>

										<Box>
											<Text
												fontSize={{
													xl: '1.4rem',
													lg: '1.3rem',
													md: '1rem',
													base: '16px',
												}}
												color='#AFAFAF'
												fontFamily='poppins'
											>
												{properties[4].description}
											</Text>
										</Box>
									</VStack>
								</Box>
							</Hidden>
						</HStack>
						<Hidden from='base'>
							<Box width='80%' mx='auto' jus>
								<HStack
									flexGrow={1}
									flexWrap={'wrap'}
									justifyContent={{ md: 'center', base: 'start' }}
									alignItems={{ md: 'center', base: 'start' }}
									space='100px'
								>
									<Box
										alignItems={{ md: 'start', base: 'center' }}
										alignSelf={'baseline'}
										textAlign='left'
										w={{
											xl: '17%',
											lg: '18%',
											md: '22%',
											sm: '22%',
											base: '33.3%',
										}}
										my={8}
									>
										<VStack
											alignItems={{ md: 'start', base: 'center' }}
											alignSelf={'baseline'}
											space={{ md: 7, base: 3 }}
											marginBottom={{ md: '30px', lg: '30px', sm: '10px' }}
											textAlign='left'
										>
											<Image
												size={{
													xl: '180',
													lg: '170',
													md: '150',
													sm: '100',
													base: '100',
												}}
												// width='183'
												height='123'
												resizeMode='contain'
												source={FourSvg}
											/>

											<Box>
												<Text
													fontSize={{
														xl: '1.4rem',
														lg: '1.3rem',
														md: '1rem',
														base: '16px',
													}}
													color='#AFAFAF'
													fontFamily='poppins'
												>
													{properties[3].description}
												</Text>
											</Box>
										</VStack>
									</Box>
									<Box
										alignItems={{ md: 'start', base: 'center' }}
										alignSelf={'baseline'}
										textAlign='left'
										w={{
											xl: '17%',
											lg: '18%',
											md: '22%',
											sm: '22%',
											base: '33.3%',
										}}
										my={8}
									>
										<VStack
											alignItems={{ md: 'start', base: 'center' }}
											alignSelf={'baseline'}
											space={{ md: 7, base: 3 }}
											marginBottom={{ md: '30px', lg: '30px', sm: '10px' }}
											textAlign='left'
										>
											<Image
												size={{
													xl: '180',
													lg: '170',
													md: '150',
													sm: '100',
													base: '100',
												}}
												// width='183'
												height='123'
												resizeMode='contain'
												source={FiveSvg}
											/>

											<Box>
												<Text
													fontSize={{
														xl: '1.4rem',
														lg: '1.3rem',
														md: '1rem',
														base: '16px',
													}}
													color='#AFAFAF'
													fontFamily='poppins'
												>
													{properties[4].description}
												</Text>
											</Box>
										</VStack>
									</Box>
								</HStack>
							</Box>
						</Hidden>
					</Box>
				)}
				{(activetab === 'With United Market ' || tabValue === 0) && (
					<FeaturesWithUnited />
				)}
			</Box>
		</Box>
	);
}

export default Properties;
